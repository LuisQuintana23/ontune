# On Tune

## Dependencias
- `node`
- `mysql 8`

## Instrucciones Desarrollo (api)

1. Clonar repositorio
    ```sh
    git clone git@github.com:LuisQuintana23/ontune.git
    cd ./ontune
    ```
2. Cambiar a la rama develop y entrar a la carpeta api
    ```sh
    git switch develop
    cd ./api
    ```
3. Instalar módulos de node
    ```sh
    npm install
    ```
4. Configurar archivo `.env` en base a `.env.example` con
   las variables de la base de datos (En caso de no utilzar XAMPP
   se puede optar por utilizar [Docker](#mysql-docker))
    ```sh
    cp ./.env.example ./.env
    ```

__Nota__: Configurar .env y asignar valor a `JWT_ACCESS_SECRET` y `JWT_REFRESH_SECRET`

5. Crear base de datos
     ```sh
     npx sequelize-cli db:create
     ```
6. Crear tablas necesarias
      ```sh
      npx sequelize-cli db:migrate
      ```
7. Ejecutar seeders
      ```sh
      npx sequelize-cli db:seed:all
      ```

8. Ejecutar aplicación
      ```sh
      npm run dev
      ```

## Instrucciones Desarrollo (frontend)

1. Clonar repositorio
    ```sh
    git clone git@github.com:LuisQuintana23/ontune.git
    cd ./ontune
    ```
2. Cambiar a la rama develop y entrar a la carpeta frontend
    ```sh
    git switch develop
    cd ./frontend
    ```
3. Instalar módulos de node
    ```sh
    npm install
    ```

4. Ejecutar aplicación
   ```sh
   npm run dev
   ```

## MySQL Docker (api)
1. Instalar docker y entrar a la carpeta backend
      ```sh
      cd ./api
      ```

2. Configurar archivo `.env` en base a `.env.example` con
   ```dotenv
   DB_USER=user
   DB_PASSWORD=password
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=database-bedu
   ```

3. Ejecutar docker compose
   ```sh
   docker compose up
   ```