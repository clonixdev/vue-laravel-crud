import express from 'express';
import cors from 'cors';
import { setupRoutes } from './routes.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Configurar rutas
setupRoutes(app);

// Ruta de salud
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    endpoints: [
      'GET /api/:modelName - Listar elementos',
      'GET /api/:modelName/:id - Obtener elemento',
      'POST /api/:modelName - Crear elemento',
      'PUT /api/:modelName/:id - Actualizar elemento',
      'DELETE /api/:modelName/:id - Eliminar elemento',
      'DELETE /api/:modelName/bulk-destroy - Eliminación masiva',
      'POST /api/:modelName/sort - Ordenar elementos',
      'GET /api/:modelName/export - Exportar datos',
      'POST /api/:modelName/import - Importar datos',
      'POST /api/:modelName/generate - Generar datos de prueba',
      'POST /api/:modelName/reset - Resetear datos'
    ]
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Mock API Server running on http://localhost:${PORT}`);
  console.log(`📊 Available models: users, tasks, products`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});

export default app;
