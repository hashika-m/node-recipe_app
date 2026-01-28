Recipe App is used to create api end points for handling req and res in mvc architecture

This app folder consists
1. models= which holds the schema of the recipe (title,instructions,ingredients,cooktime, timestamp)
2. controllers= this consists all CRUD operations to be perfomed while creation,updation,deletion, reading the record created in database.
        The following functionality:
        createRecipe: Create a new recipe.
        getAllRecipes: Retrieve all recipes.
        getRecipeById: Retrieve a single recipe by ID.
        updateRecipe: Update a recipe by ID.
        deleteRecipe: Delete a recipe by ID.
    Based on these operations the records are added,deleted, updated,viewed in mondodb database and postman    
3. routes=manages the url req to perform CRUD operation based on the route and function defined as createRecipe....
4. config= it consists the connectivity of server and database using mongoose and handles err and business logics between server and db   
5. app.js =  handles express configuration and api endpoints
6. server.js= handles server starting and its the entrypoint of the app   
7. dummydata=contains some fake data for testing

Working in postman and MongoDb:

GET : http://localhost:8000/api/recipes - at first gives an empty []. After POST,PUT,DELETE req we can gat the dynamically updated data from db.

POST: http://localhost:8000/api/recipes->body->raw: giving dummy data-> helps in creataion of record in [] using create(). after this if we use get req to fetch,the data is read and viewwed in postman and db dynamically

PUT : http://localhost:8000/api/recipes/_id- based on id we can update the record  using findByIdAndUpdate(). if found:it updates the data. if id is not match shows 404 with err message as recipe not foundand. And it gets dynamically updated in postman and db

DELETE: http://localhost:8000/api/recipes/_id- based on id it filter the data using findByIdAndDelete()  it delets the data is found and returns a msg:recipe deleted sucessfully. if id is not match shows 404 with err message as recipe not found