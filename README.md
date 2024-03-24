# Todo App Full-Stack  
  
This project is a full-stack application composed of a React frontend, a Node.js backend API, and a PostgreSQL database. The entire stack is containerized using Docker and orchestrated with Docker Compose.  
  
## Prerequisites  
  
Before you begin, ensure you have the following installed on your system:  
- Docker  
- Docker Compose  
  
## Getting Started  
  
To get the application up and running, follow these steps:  
  
1. Clone the repository to your local machine.  
  
2. Navigate to the root of the project where the `docker-compose.yml` file is located.  
  
3. Run the following command to build and start the containers:  
  
   ```sh  
   docker-compose up --build 
   ```
4. Once the containers are up and running, you can access:

    - The frontend at: http://localhost:3001
    - The backend API at: http://localhost:3000 

# Services Configuration  
  
## Backend Service (`app`)  
  
The backend service is a Node.js API that communicates with the PostgreSQL database. It is exposed on port `3000`.  
  
**Environment variables:**  
  
- `DB_HOST`: The hostname for the database service.  
- `DB_USER`: The database user.  
- `DB_PASS`: The database password.  
- `DB_NAME`: The name of the database.  
- `DB_PORT`: The port the database is running on.  
  
## Database Service (`db`)  
  
The database service uses the official `postgres:13` Docker image. It is exposed on port `5432` and uses a volume to persist data.  
  
**Environment variables:**  
  
- `POSTGRES_USER`: The database user.  
- `POSTGRES_PASSWORD`: The database password.  
- `POSTGRES_DB`: The name of the database.  
  
## Frontend Service (`frontend`)  
  
The frontend service is a React application that provides the user interface. It is exposed on port `3001`.  
  
**Environment variable:**  
  
- `REACT_APP_BACKEND_URL`: The URL to the backend API service.  
  
## Persistence  
  
A Docker volume named `postgres_data` is used to persist the PostgreSQL database data.  
  
## Stopping the Services  
  
To stop and remove all running containers from the project, you can use the following command:  
  
```bash  
docker-compose down  
```

# Contributing
 
Contributions are welcome. Please feel free to submit pull requests or create issues for bugs and feature requests.

# License
 
This project is licensed under the MIT License.
