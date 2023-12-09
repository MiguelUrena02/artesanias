# Endpoint: `POST /usuarios`

Permite ingresar información sobre un usuario específico mediante su identificador único.

## Ejemplo de Solicitud (URL)
```http
POST /usuarios
```
## Ejemplo de Solicitud (JSON)
```json
    {
        "nombre": "Ezequiel",
        "apellidos": "Alonso",
        "calle": "Calle T",
        "colonia": "Colonia T",
        "ciudad": "Ciudad 4",
        "estado": "Estado 4"
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