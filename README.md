# Supermarket Backend

API REST para la gestión básica de un supermercado, desarrollada con Node.js, Express.js, PostgreSQL y Sequelize bajo una arquitectura MVC.

## Integrantes

- María Alejandra López Ríos
- Valeria Ortiz Cubillos

## Responsabilidades

### María Alejandra López Ríos

- Creación de los modelos Sequelize y sus relaciones
- Desarrollo de servicios y lógica de negocio
- Implementación de controladores y rutas CRUD
- Configuración de PostgreSQL y Sequelize
- Documentación de la API con Swagger

### Valeria Ortiz Cubillos

- Elaboración del README
- Documentación de instalación y ejecución
- Documentación de ejemplos de endpoints
- Verificación manual de los endpoints mediante Swagger

## Tecnologías

- JavaScript
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- Swagger

## Entidades

- Productos
- Proveedores
- Usuarios
- Ventas
- Detalles de venta

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/malr211097/Supermarket-backend.git
```

Ingresar al proyecto:

```bash
cd Supermarket-backend
```

Instalar las dependencias:

```bash
npm install
```

## Configuración de la base de datos

Crear una base de datos en PostgreSQL.

Después, crear un archivo `.env` en la raíz del proyecto con la configuración de la base de datos:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=supermarket
DB_USER=postgres
DB_PASSWORD=contraseña_de_postgresql
```

Los valores deben ajustarse de acuerdo con la configuración local de PostgreSQL.

## Ejecución

Iniciar el proyecto con:

```bash
npm start
```

El servidor estará disponible en:

```text
http://localhost:3000
```

La documentación Swagger estará disponible en:

```text
http://localhost:3000/api-docs
```

## Endpoints

Cada entidad cuenta con operaciones CRUD completas.

| Entidad | Consultar todos | Consultar por ID | Crear | Actualizar | Eliminar |
|---|---|---|---|---|---|
| Productos | `GET /api/product` | `GET /api/product/{id}` | `POST /api/product` | `PUT /api/product/{id}` | `DELETE /api/product/{id}` |
| Proveedores | `GET /api/provider` | `GET /api/provider/{id}` | `POST /api/provider` | `PUT /api/provider/{id}` | `DELETE /api/provider/{id}` |
| Usuarios | `GET /api/user` | `GET /api/user/{id}` | `POST /api/user` | `PUT /api/user/{id}` | `DELETE /api/user/{id}` |
| Ventas | `GET /api/sale` | `GET /api/sale/{id}` | `POST /api/sale` | `PUT /api/sale/{id}` | `DELETE /api/sale/{id}` |
| Detalles de venta | `GET /api/sale-detail` | `GET /api/sale-detail/{id}` | `POST /api/sale-detail` | `PUT /api/sale-detail/{id}` | `DELETE /api/sale-detail/{id}` |

## Ejemplos

### Crear un proveedor

```http
POST /api/provider
Content-Type: application/json
```

```json
{
  "name": "Distribuidora Central",
  "phone": "3001234567",
  "email": "ventas@distribuidoracentral.com",
  "city": "Manizales"
}
```

### Crear un producto

```http
POST /api/product
Content-Type: application/json
```

```json
{
  "name": "Arroz blanco 1 kg",
  "description": "Arroz blanco empacado de un kilogramo",
  "price": 4500,
  "stock": 50,
  "providerId": 1
}
```

### Crear un usuario

```http
POST /api/user
Content-Type: application/json
```

```json
{
  "name": "Laura Gomez",
  "email": "laura.gomez@example.com",
  "role": "customer"
}
```

### Crear una venta

```http
POST /api/sale
Content-Type: application/json
```

```json
{
  "userId": 1,
  "date": "2026-09-24"
}
```

### Crear un detalle de venta

```http
POST /api/sale-detail
Content-Type: application/json
```

```json
{
  "saleId": 1,
  "productId": 1,
  "quantity": 2
}
```

## Validaciones

- El precio de un producto debe ser mayor que cero
- El stock de un producto no puede ser negativo
- El correo electrónico de cada usuario debe ser único
- El total de cada venta se calcula automáticamente a partir de sus detalles