To build and run the Docker containers, follow these steps:


1. Make sure you have Docker installed and running on your machine.

2. Open a terminal and navigate to the root directory of your project.

3. Make sure to run 

```chmod +x setup.sh```

4. Run the setup script by executing

```./setup.sh```


5. Access the frontend application in your browser by visiting http://localhost:5000.

6. The backend API endpoints will be available at http://localhost:3000.

The Task Endpoints include: -

### Create a Task

- **URL:** `/createTask`
- **Method:** `POST`
- **Description:** Creates a new task.
- **Request Body:**
  - `title` (string): The title of the task.
  - `description` (string): The description of the task.

### Get Tasks

- **URL:** `/getTasks`
- **Method:** `GET`
- **Description:** Retrieves all tasks.
- **Response Body:**
  - `tasks` (array of objects): An array of tasks.
    - `id` (string): The unique identifier of the task.
    - `title` (string): The title of the task.
    - `description` (string): The description of the task.

### Update a Task

- **URL:** `/updateTask/:id`
- **Method:** `PUT`
- **Description:** Updates an existing task.
- **Request Parameters:**
  - `id` (string): The unique identifier of the task to update.
- **Request Body (at least one of the following):**
  - `title` (string): The new title of the task.
  - `description` (string): The new description of the task.

### Delete a Task

- **URL:** `/deleteTask/:id`
- **Method:** `DELETE`
- **Description:** Deletes an existing task.
- **Request Parameters:**
  - `id` (string): The unique identifier of the task to delete.


### Login Endpoint

### Authenticate User

- **URL:** `/login`
- **Method:** `POST`
- **Description:** Authenticates a user and generates an authentication token.
- **Request Body:**
  - `username` (string): The email of the user.
  - `password` (string): The password of the user.
- **Response Body:**
  - `token` (string): The authentication token for the user.