# Endpoint: `GET /artesanos/{id}`

Permite obtener información detallada sobre un artesano específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del artesano que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /artesano/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
    "id_artesano": 1,
    "nombre": "Arturo",
    "apellidos": "González",
    "calle": "Calle F",
    "colonia": "Colonia U",
    "ciudad": "Ciudad6",
    "estado": "Estado6",
    "fk_oficio": 1,
    "descripcion": "Artesano experto en muebles de madera"
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