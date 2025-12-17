// Datos de prueba para el mock API
export const mockUsers = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan@example.com",
    age: 30,
    status: "active",
    created_at: "2023-01-15T10:30:00Z",
    updated_at: "2023-01-15T10:30:00Z"
  },
  {
    id: 2,
    name: "María García",
    email: "maria@example.com",
    age: 25,
    status: "inactive",
    created_at: "2023-01-16T14:20:00Z",
    updated_at: "2023-01-16T14:20:00Z"
  },
  {
    id: 3,
    name: "Carlos López",
    email: "carlos@example.com",
    age: 35,
    status: "active",
    created_at: "2023-01-17T09:15:00Z",
    updated_at: "2023-01-17T09:15:00Z"
  },
  {
    id: 4,
    name: "Ana Martínez",
    email: "ana@example.com",
    age: 28,
    status: "pending",
    created_at: "2023-01-18T16:45:00Z",
    updated_at: "2023-01-18T16:45:00Z"
  },
  {
    id: 5,
    name: "Luis Rodríguez",
    email: "luis@example.com",
    age: 42,
    status: "active",
    created_at: "2023-01-19T11:30:00Z",
    updated_at: "2023-01-19T11:30:00Z"
  }
];

export const mockTasks = [
  {
    id: 1,
    title: "Implementar login",
    description: "Crear sistema de autenticación",
    status: "todo",
    priority: "high",
    assignee: "Juan Pérez",
    created_at: "2023-01-15T10:30:00Z",
    updated_at: "2023-01-15T10:30:00Z"
  },
  {
    id: 2,
    title: "Diseñar base de datos",
    description: "Crear esquema de base de datos",
    status: "in_progress",
    priority: "medium",
    assignee: "María García",
    created_at: "2023-01-16T14:20:00Z",
    updated_at: "2023-01-16T14:20:00Z"
  },
  {
    id: 3,
    title: "Crear API REST",
    description: "Desarrollar endpoints de la API",
    status: "done",
    priority: "high",
    assignee: "Carlos López",
    created_at: "2023-01-17T09:15:00Z",
    updated_at: "2023-01-17T09:15:00Z"
  },
  {
    id: 4,
    title: "Testing unitario",
    description: "Escribir pruebas unitarias",
    status: "todo",
    priority: "low",
    assignee: "Ana Martínez",
    created_at: "2023-01-18T16:45:00Z",
    updated_at: "2023-01-18T16:45:00Z"
  },
  {
    id: 5,
    title: "Documentación",
    description: "Crear documentación del proyecto",
    status: "in_progress",
    priority: "medium",
    assignee: "Luis Rodríguez",
    created_at: "2023-01-19T11:30:00Z",
    updated_at: "2023-01-19T11:30:00Z"
  }
];

export const mockProducts = [
  {
    id: 1,
    name: "Laptop Dell",
    price: 1200.00,
    category: "Electronics",
    stock: 15,
    active: true,
    created_at: "2023-01-15T10:30:00Z",
    updated_at: "2023-01-15T10:30:00Z"
  },
  {
    id: 2,
    name: "Mouse Logitech",
    price: 25.99,
    category: "Accessories",
    stock: 50,
    active: true,
    created_at: "2023-01-16T14:20:00Z",
    updated_at: "2023-01-16T14:20:00Z"
  },
  {
    id: 3,
    name: "Teclado Mecánico",
    price: 89.99,
    category: "Accessories",
    stock: 0,
    active: false,
    created_at: "2023-01-17T09:15:00Z",
    updated_at: "2023-01-17T09:15:00Z"
  },
  {
    id: 4,
    name: "Monitor 24\"",
    price: 199.99,
    category: "Electronics",
    stock: 8,
    active: true,
    created_at: "2023-01-18T16:45:00Z",
    updated_at: "2023-01-18T16:45:00Z"
  },
  {
    id: 5,
    name: "Auriculares Bluetooth",
    price: 79.99,
    category: "Accessories",
    stock: 25,
    active: true,
    created_at: "2023-01-19T11:30:00Z",
    updated_at: "2023-01-19T11:30:00Z"
  }
];

// Función para generar más datos de prueba
export function generateMockData(type, count = 20) {
  const data = [];
  const baseData = type === 'users' ? mockUsers : type === 'tasks' ? mockTasks : mockProducts;
  
  for (let i = 0; i < count; i++) {
    const baseItem = baseData[i % baseData.length];
    data.push({
      ...baseItem,
      id: baseItem.id + (i * baseData.length),
      name: `${baseItem.name} ${i + 1}`,
      email: baseItem.email ? `${baseItem.email.split('@')[0]}${i + 1}@example.com` : undefined,
      title: baseItem.title ? `${baseItem.title} ${i + 1}` : undefined,
      created_at: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      updated_at: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
    });
  }
  
  return data;
}
