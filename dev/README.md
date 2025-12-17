# Sistema de Demo - Vue Laravel CRUD

Este directorio contiene un sistema completo de demostración para el componente `vue-laravel-crud` que permite probar todas sus funcionalidades.

## Estructura

```
dev/
├── api/                    # Mock API Server
│   ├── mockServer.js      # Servidor Express
│   ├── routes.js          # Endpoints CRUD
│   └── mockData.js        # Datos de prueba
├── demo/                  # Aplicación Demo
│   ├── DemoApp.vue        # App principal
│   └── examples/          # Ejemplos de uso
│       ├── BasicTable.vue
│       ├── CardsView.vue
│       ├── KanbanView.vue
│       ├── FiltersAndSearch.vue
│       ├── CustomSlots.vue
│       ├── LocalData.vue
│       ├── DragAndDrop.vue
│       └── ImportExport.vue
└── README.md              # Este archivo
```

## Cómo usar

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar el sistema de demo

```bash
npm run demo
```

Este comando iniciará:
- **Mock API Server** en `http://localhost:3001`
- **Aplicación Demo** en `http://localhost:8080`

### 3. Comandos individuales

```bash
# Solo el servidor API
npm run demo:api

# Solo la aplicación demo
npm run demo:app
```

## Funcionalidades Demostradas

### 1. Tabla Básica
- CRUD completo (Crear, Leer, Actualizar, Eliminar)
- Formularios personalizados
- Modal de visualización
- Selección de elementos

### 2. Vista de Tarjetas
- Layout masonry responsivo
- Tarjetas con información estructurada
- Mismo CRUD que tabla

### 3. Vista Kanban
- **NUEVA FUNCIONALIDAD**: Drag & drop entre columnas
- Agrupación por estado
- Tarjetas compactas
- Persistencia automática

### 4. Filtros y Búsqueda
- Filtros por columna
- Búsqueda global
- Sidebar de filtros
- Filtros de fecha, estado, etc.

### 5. Slots Personalizados
- Formularios personalizados
- Celdas con renderizado custom
- Badges y estilos personalizados

### 6. Datos Locales
- Funcionamiento sin AJAX
- Datos en memoria
- Ideal para prototipos

### 7. Drag & Drop
- Ordenamiento de filas
- Persistencia del orden
- Indicadores visuales

### 8. Importar/Exportar
- Exportación a JSON/XLSX
- Importación de archivos
- Eliminación masiva

## Mock API

El servidor mock simula una API Laravel completa con:

### Endpoints Disponibles

- `GET /api/:modelName` - Listar con paginación y filtros
- `GET /api/:modelName/:id` - Obtener elemento
- `POST /api/:modelName` - Crear elemento
- `PUT /api/:modelName/:id` - Actualizar elemento
- `DELETE /api/:modelName/:id` - Eliminar elemento
- `DELETE /api/:modelName/bulk-destroy` - Eliminación masiva
- `POST /api/:modelName/sort` - Ordenar elementos
- `GET /api/:modelName/export` - Exportar datos
- `POST /api/:modelName/import` - Importar datos

### Modelos Disponibles

- **users**: Usuarios con nombre, email, edad, estado
- **tasks**: Tareas con título, descripción, estado, prioridad
- **products**: Productos con nombre, precio, categoría, stock

### Características del Mock API

- ✅ Paginación completa
- ✅ Filtros avanzados (LIKE, =, !=, >, <, etc.)
- ✅ Búsqueda global
- ✅ Ordenamiento
- ✅ Agrupación
- ✅ Exportación JSON/XLSX
- ✅ Importación simulada
- ✅ Eliminación masiva
- ✅ Validación de datos
- ✅ Manejo de errores

## Desarrollo

### Agregar nuevos ejemplos

1. Crear archivo en `dev/demo/examples/`
2. Agregar al array `examples` en `DemoApp.vue`
3. Importar el componente

### Agregar nuevos modelos

1. Agregar datos en `dev/api/mockData.js`
2. Actualizar `getDataByModel()` en `dev/api/routes.js`
3. Crear ejemplo que use el nuevo modelo

### Personalizar Mock API

- Modificar `dev/api/routes.js` para agregar endpoints
- Actualizar `dev/api/mockData.js` para más datos
- Configurar `dev/api/mockServer.js` para middleware adicional

## Troubleshooting

### Puerto ocupado
```bash
# Cambiar puerto del API
PORT=3002 npm run demo:api

# Cambiar puerto de la app
vue-cli-service serve dev/demo/DemoApp.vue --port 8081
```

### Errores de CORS
El mock server incluye CORS habilitado por defecto.

### Datos no se cargan
Verificar que el mock API esté corriendo en `http://localhost:3001`

## Contribuir

Para agregar nuevas funcionalidades al demo:

1. Implementar en el componente principal
2. Crear ejemplo en `dev/demo/examples/`
3. Actualizar este README
4. Probar todos los ejemplos

## Notas

- El mock API mantiene datos en memoria (se resetean al reiniciar)
- Los archivos de exportación son simulados
- La importación tiene un delay de 1 segundo para simular procesamiento
- Todos los ejemplos son completamente funcionales
