# Endpoint: `PATCH /artesanos/{id}`

Permite actulizar información sobre un artesano específica mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del artesano que se desea actualizar.

## Ejemplo de Solicitud (URL)
```http
PATCH /artesanos/1
```
## Ejemplo de Solicitud (JSON)
```json
{
    "nombre": "Sir Arturo",
    "apellidos": "Pendragon",
    "calle": "Calle F",
    "colonia": "Colonia U",
    "ciudad": "Ciudad6",
    "estado": "Estado6",
    "fk_oficio": 1,
    "descripcion": "Artesano experto en muebles de madera"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
    "message": "Successfull partial update"
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
- Asegurate invocar los campos correspondientes a la tabla, así como proporcionar datos según el tipo de dato