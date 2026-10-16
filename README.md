# ☕ Desafío - Cafetería Nanacao

Tests unitarios para una API REST de cafés, hechos con **Jest** y **Supertest**.

Desafío del módulo de Testing del curso Full Stack JavaScript de Desafío Latam (G108).

## 📌 Descripción

La Cafetería Nanacao necesita comprobar que todas las rutas de su sistema de administración funcionen correctamente. En este proyecto se testean las rutas de la API REST de apoyo.

## ✅ Tests implementados

| # | Ruta | Qué se comprueba |
|---|------|------------------|
| 1 | `GET /cafes` | Devuelve status **200** y un arreglo con al menos 1 objeto |
| 2 | `DELETE /cafes/:id` | Devuelve **404** al intentar eliminar un café con un id que no existe |
| 3 | `POST /cafes` | Agrega un nuevo café y devuelve **201** |
| 4 | `PUT /cafes/:id` | Devuelve **400** si el id de los parámetros es distinto al id del payload |

## 🛠️ Tecnologías

- Node.js
- Express
- Jest
- Supertest

## 🚀 Cómo ejecutar los tests

1. Clonar el repositorio
2. Instalar las dependencias:

```bash
npm install
```

3. Ejecutar los tests:

```bash
npm run test
```

> ⚠️ Antes de correr los tests, asegúrate de no tener otro servidor usando el puerto 3000.

## 📁 Estructura

```
desafio-cafeteria-nanacao/
├── tests/
│   └── server.spec.js   # Tests de las rutas
├── cafes.json           # Datos de los cafés
├── index.js             # Servidor Express
└── package.json
```

## 👩‍💻 Autora

Tamara Rivera
