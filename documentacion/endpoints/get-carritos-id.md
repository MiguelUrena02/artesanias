# Endpoint: `GET /carritos/{id}`

Permite obtener información detallada sobre un carrito específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del carrito que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /carritos/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_carrito": 1,
    "fk_artesania": 1,
    "fk_usuario": 1,
    "cantidad": 2
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el tema."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un tema en específico.