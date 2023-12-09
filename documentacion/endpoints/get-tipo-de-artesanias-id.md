# Endpoint: `GET /tipo-de-artesanias/{id}`

Permite obtener información detallada sobre un tipo de artesania específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tipo de artesania que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /tipo-de-artesania/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_tipo": 1,
    "nombre": "Madera"
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