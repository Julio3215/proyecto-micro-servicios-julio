# Proyecto final: migración de monolito a microservicios

Este proyecto separa el monolito `backend-mono-api` en cuatro servicios:

- **gateway (8000):** punto único de entrada y proxy.
- **customers (8001):** usuarios, autenticación, perfiles, direcciones, carrito y wishlist.
- **products (8002):** catálogo y consulta/creación de productos.
- **shopping (8003):** creación y consulta de pedidos.

Cada dominio tiene su propia base MongoDB: `customers_db`, `products_db` y `shopping_db`.

## Ejecutar

```bash
docker compose config
docker compose up -d --build
docker compose ps
```

## Probar

```bash
curl http://localhost:8000/
curl http://localhost:8000/customers/
curl http://localhost:8000/products/
curl http://localhost:8000/shopping/
```

## Sembrar productos

```bash
docker compose exec products node seed.js
```

Luego:

```bash
curl http://localhost:8000/products/
```

## Detener

```bash
docker compose down
```
