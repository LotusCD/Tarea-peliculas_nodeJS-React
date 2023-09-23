
# Movie API Backend

This project is a simple movie API backend built using Node.js, Express.js, and MongoDB. It follows the MVC (Model-View-Controller) design pattern.

## Model-View-Controller (MVC) Breakdown:

### Model:
- The `models.js` file represents the data structure of a movie. It also provides methods to interact with the MongoDB database.

### View:
- This backend serves as an API, so traditional views are not used. Responses are sent in JSON format.

### Controller:
- The logic for handling API requests and formulating responses can be found in route files like `director.js`, `genre.js`, `index.js`, and `movieEndpoints.js`.

## API Endpoints:

1. **GET**: Retrieve the latest movies.
   - Endpoint: `http://localhost:3000/`

2. **POST**: Add a new movie to the database.
   - Endpoint: `http://localhost:3000/movies/`

3. **PUT**: Update an existing movie's details.
   - Endpoint: `http://localhost:3000/movies/:id`
   - Example: `http://localhost:3000/movies/650e53532a5487443efb440e`

4. **DELETE**: Remove a movie from the database.
   - Endpoint: `http://localhost:3000/movies/:id`
   - Example: `http://localhost:3000/movies/650e53532a5487443efb440e`

## How to Use POSTMAN:

**GET Request**:
1. Open POSTMAN.
2. Set the request type to "GET".
3. Enter the endpoint URL: `http://localhost:3000/`
4. Click "Send" to get the response.

**POST Request**:
1. Open POSTMAN.
2. Set the request type to "POST".
3. Enter the endpoint URL: `http://localhost:3000/movies/`
4. Go to the "Body" tab, select `raw` and format as `JSON (application/json)`.
5. Input the movie data in JSON format.
6. Click "Send" to add the movie.

**PUT Request**:
1. Open POSTMAN.
2. Set the request type to "PUT".
3. Enter the specific movie endpoint URL: `http://localhost:3000/movies/650e53532a5487443efb440e`
4. In the "Body" tab, select `raw` and format as `JSON (application/json)`.
5. Input the updated movie data in JSON format.
6. Click "Send" to update the movie.

**DELETE Request**:
1. Open POSTMAN.
2. Set the request type to "DELETE".
3. Enter the specific movie endpoint URL: `http://localhost:3000/movies/650e53532a5487443efb440e`
4. Click "Send" to delete the movie.
