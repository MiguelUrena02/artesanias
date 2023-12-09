# Endpoint: `POST /artesanias`

Permite ingresar información sobre una artesania específica mediante su identificador único.

## Ejemplo de Solicitud (URL)
```http
POST /artesanias
```
## Ejemplo de Solicitud (JSON)
```json
{
    "nombre": "Peluche tejido rosa",
    "descripcion": "Peluche tejido de 50cm",
    "imagen": null,
    "precio": 350,
    "fk_artesano": 3,
    "fk_tipo_de_artesania": 3
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