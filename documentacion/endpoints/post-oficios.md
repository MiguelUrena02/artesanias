# Endpoint: `POST /oficios`

Permite ingresar información sobre un oficio específico mediante su identificador único.

## Ejemplo de Solicitud (URL)
```http
POST /oficios
```
## Ejemplo de Solicitud (JSON)
```json
{
    "nombre": "Repujador"
}
```

## Respuesta Exitosa (Código 201 OK)
```json
    {
    "status": 201,
    "message": "Created"
    }
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 400,
    "error": "Bad request",
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

- Asegurate invocar los campos correspondientes a la tabla, así como proporcionar datos según el tipo de dato