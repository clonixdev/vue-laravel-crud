import { mockUsers, mockTasks, mockProducts, generateMockData } from './mockData.js';

// Simular base de datos en memoria
let users = [...mockUsers];
let tasks = [...mockTasks];
let products = [...mockProducts];

// Función para parsear filtros
function parseFilters(filterString) {
  if (!filterString) return [];
  try {
    return JSON.parse(filterString);
  } catch (e) {
    return [];
  }
}

// Función para aplicar filtros
function applyFilters(data, filters) {
  if (!filters || filters.length === 0) return data;
  
  return data.filter(item => {
    return filters.every(filter => {
      const [column, operator, value] = filter;
      
      if (!value && value !== 0) return true;
      
      const itemValue = getNestedValue(item, column);
      
      switch (operator) {
        case 'LIKE':
          return itemValue && itemValue.toString().toLowerCase().includes(value.toLowerCase());
        case '=':
          return itemValue == value;
        case '!=':
          return itemValue != value;
        case '>':
          return itemValue > value;
        case '<':
          return itemValue < value;
        case '>=':
          return itemValue >= value;
        case '<=':
          return itemValue <= value;
        case 'IN':
          return Array.isArray(value) && value.includes(itemValue);
        case 'NOT IN':
          return Array.isArray(value) && !value.includes(itemValue);
        default:
          return true;
      }
    });
  });
}

// Función para obtener valor anidado
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Función para paginar datos
function paginateData(data, page = 1, perPage = 20) {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  
  return {
    data: data.slice(startIndex, endIndex),
    current_page: parseInt(page),
    last_page: Math.ceil(data.length / perPage),
    per_page: parseInt(perPage),
    total: data.length,
    from: startIndex + 1,
    to: Math.min(endIndex, data.length)
  };
}

// Función para obtener datos por modelo
function getDataByModel(modelName) {
  switch (modelName) {
    case 'users':
      return users;
    case 'tasks':
      return tasks;
    case 'products':
      return products;
    default:
      return [];
  }
}

// Función para actualizar datos por modelo
function updateDataByModel(modelName, newData) {
  switch (modelName) {
    case 'users':
      users = newData;
      break;
    case 'tasks':
      tasks = newData;
      break;
    case 'products':
      products = newData;
      break;
  }
}

export function setupRoutes(app) {
  // GET - Listar elementos con paginación y filtros
  app.get('/api/:modelName', (req, res) => {
    const { modelName } = req.params;
    const { page = 1, limit = 20, filters } = req.query;
    
    let data = getDataByModel(modelName);
    
    // Aplicar filtros
    const parsedFilters = parseFilters(filters);
    data = applyFilters(data, parsedFilters);
    
    // Paginar
    const result = paginateData(data, page, limit);
    
    res.json(result);
  });

  // GET - Obtener elemento por ID
  app.get('/api/:modelName/:id', (req, res) => {
    const { modelName, id } = req.params;
    const data = getDataByModel(modelName);
    const item = data.find(item => item.id == id);
    
    if (!item) {
      return res.status(404).json({ error: 'Elemento no encontrado' });
    }
    
    res.json(item);
  });

  // POST - Crear nuevo elemento
  app.post('/api/:modelName', (req, res) => {
    const { modelName } = req.params;
    const data = getDataByModel(modelName);
    
    const newItem = {
      id: Math.max(...data.map(item => item.id), 0) + 1,
      ...req.body,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    data.push(newItem);
    updateDataByModel(modelName, data);
    
    res.status(201).json(newItem);
  });

  // PUT - Actualizar elemento
  app.put('/api/:modelName/:id', (req, res) => {
    const { modelName, id } = req.params;
    const data = getDataByModel(modelName);
    const index = data.findIndex(item => item.id == id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Elemento no encontrado' });
    }
    
    data[index] = {
      ...data[index],
      ...req.body,
      id: parseInt(id),
      updated_at: new Date().toISOString()
    };
    
    updateDataByModel(modelName, data);
    
    res.json(data[index]);
  });

  // DELETE - Eliminar elemento
  app.delete('/api/:modelName/:id', (req, res) => {
    const { modelName, id } = req.params;
    const data = getDataByModel(modelName);
    const index = data.findIndex(item => item.id == id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Elemento no encontrado' });
    }
    
    data.splice(index, 1);
    updateDataByModel(modelName, data);
    
    res.json({ message: 'Elemento eliminado correctamente' });
  });

  // DELETE - Eliminación masiva
  app.delete('/api/:modelName/bulk-destroy', (req, res) => {
    const { modelName } = req.params;
    const { ids } = req.query;
    
    if (!ids) {
      return res.status(400).json({ error: 'IDs requeridos' });
    }
    
    const idsArray = Array.isArray(ids) ? ids : ids.split(',');
    const data = getDataByModel(modelName);
    const filteredData = data.filter(item => !idsArray.includes(item.id.toString()));
    
    updateDataByModel(modelName, filteredData);
    
    res.json({ message: `${idsArray.length} elementos eliminados correctamente` });
  });

  // POST - Ordenar elementos
  app.post('/api/:modelName/sort', (req, res) => {
    const { modelName } = req.params;
    const { order } = req.body;
    
    if (!order || !Array.isArray(order)) {
      return res.status(400).json({ error: 'Orden inválido' });
    }
    
    const data = getDataByModel(modelName);
    
    order.forEach(({ id, order: newOrder }) => {
      const item = data.find(item => item.id == id);
      if (item) {
        item.order = newOrder;
      }
    });
    
    updateDataByModel(modelName, data);
    
    res.json({ message: 'Orden actualizado correctamente' });
  });

  // GET - Exportar datos
  app.get('/api/:modelName/export', (req, res) => {
    const { modelName } = req.params;
    const { format = 'JSON', ids, filters } = req.query;
    
    let data = getDataByModel(modelName);
    
    // Aplicar filtros si se especifican
    if (filters) {
      const parsedFilters = parseFilters(filters);
      data = applyFilters(data, parsedFilters);
    }
    
    // Filtrar por IDs si se especifican
    if (ids) {
      const idsArray = Array.isArray(ids) ? ids : ids.split(',');
      data = data.filter(item => idsArray.includes(item.id.toString()));
    }
    
    if (format === 'XLSX') {
      // Simular archivo XLSX
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', `attachment; filename="${modelName}_export.xlsx"`);
      res.send(Buffer.from('Simulated XLSX content'));
    } else {
      // JSON
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Disposition', `attachment; filename="${modelName}_export.json"`);
      res.json(data);
    }
  });

  // POST - Importar datos
  app.post('/api/:modelName/import', (req, res) => {
    const { modelName } = req.params;
    
    // Simular importación exitosa
    setTimeout(() => {
      res.json({ 
        success: true, 
        message: 'Datos importados correctamente',
        imported: 5
      });
    }, 1000);
  });

  // Endpoint para generar datos de prueba
  app.post('/api/:modelName/generate', (req, res) => {
    const { modelName } = req.params;
    const { count = 20 } = req.body;
    
    const newData = generateMockData(modelName, count);
    const data = getDataByModel(modelName);
    
    // Agregar nuevos datos
    data.push(...newData);
    updateDataByModel(modelName, data);
    
    res.json({ 
      message: `${count} elementos generados correctamente`,
      total: data.length
    });
  });

  // Endpoint para resetear datos
  app.post('/api/:modelName/reset', (req, res) => {
    const { modelName } = req.params;
    
    switch (modelName) {
      case 'users':
        users = [...mockUsers];
        break;
      case 'tasks':
        tasks = [...mockTasks];
        break;
      case 'products':
        products = [...mockProducts];
        break;
    }
    
    res.json({ message: 'Datos reseteados correctamente' });
  });
}
