# Endpoint: `GET /artesanias/{id}`

Permite obtener información detallada sobre una artesanía específica mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la artesanía que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /artesania/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_artesania": 1,
    "nombre": "Mesa de roble",
    "descripcion": "Mesa robusta hecha de roble",
    "imagen": null,
    "precio": 250,
    "fk_artesano": 1,
    "fk_tipo_de_artesania": 1
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