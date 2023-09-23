
# Backend de la API de Películas

Este proyecto es un backend simple de una API de películas construido usando Node.js, Express.js y MongoDB. Sigue el patrón de diseño MVC (Modelo-Vista-Controlador).

## Desglose del Modelo-Vista-Controlador (MVC):

### Modelo:
- El archivo `models.js` representa la estructura de datos de una película. También proporciona métodos para interactuar con la base de datos MongoDB.

### Vista:
- Este backend sirve como una API, por lo que no se utilizan vistas tradicionales. Las respuestas se envían en formato JSON.

### Controlador:
- La lógica para manejar las solicitudes de la API y formular respuestas se encuentra en archivos de ruta como `director.js`, `genre.js`, `index.js` y `movieEndpoints.js`.

## Puntos finales de la API:

1. **GET**: Recuperar las películas más recientes.
   - Punto final: `http://localhost:3000/`

2. **POST**: Agregar una nueva película a la base de datos.
   - Punto final: `http://localhost:3000/movies/`

3. **PUT**: Actualizar los detalles de una película existente.
   - Punto final: `http://localhost:3000/movies/:id`
   - Ejemplo: `http://localhost:3000/movies/650e53532a5487443efb440e`

4. **DELETE**: Eliminar una película de la base de datos.
   - Punto final: `http://localhost:3000/movies/:id`
   - Ejemplo: `http://localhost:3000/movies/650e53532a5487443efb440e`

## Cómo usar POSTMAN:

**Solicitud GET**:
1. Abre POSTMAN.
2. Establece el tipo de solicitud en "GET".
3. Ingresa la URL del punto final: `http://localhost:3000/`
4. Haz clic en "Enviar" para obtener la respuesta.

**Solicitud POST**:
1. Abre POSTMAN.
2. Establece el tipo de solicitud en "POST".
3. Ingresa la URL del punto final: `http://localhost:3000/movies/`
4. Ve a la pestaña "Body", selecciona `raw` y formatea como `JSON (application/json)`.
5. Ingresa los datos de la película en formato JSON.
6. Haz clic en "Enviar" para agregar la película.

**Solicitud PUT**:
1. Abre POSTMAN.
2. Establece el tipo de solicitud en "PUT".
3. Ingresa la URL específica del punto final de la película: `http://localhost:3000/movies/650e53532a5487443efb440e`
4. En la pestaña "Body", selecciona `raw` y formatea como `JSON (application/json)`.
5. Ingresa los datos actualizados de la película en formato JSON.
6. Haz clic en "Enviar" para actualizar la película.

**Solicitud DELETE**:
1. Abre POSTMAN.
2. Establece el tipo de solicitud en "DELETE".
3. Ingresa la URL específica del punto final de la película: `http://localhost:3000/movies/650e53532a5487443efb440e`
4. Haz clic en "Enviar" para eliminar la película.
