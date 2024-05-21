
# Nodejs postgreSQL

Learn how to create a Simple Application by Connecting PostgreSQL with NodeJs, While you are using PostgreSQL as database and NodeJs as backend, you need PostgreSQL database packages to connect with nodejs. There are various packages available but most popular and well documented is node-postgres pg. Let’s start.




## what's needed

- Make sure you have [postgresql](https://www.postgresql.org/) installed on machine and [pgAdmin](https://www.pgadmin.org/) - postgresql management tool
- Make sure you have [node.js](https://nodejs.org/en) installed


## Getting started

- Download the project’s zip
- After Creating Database, Check your Connection Strings and Create new table in PostgreSQL


```bash
 CREATE TABLE customer2
(
    id serial NOT NULL,
    first_name character varying(200) NOT NULL,
    last_name text NOT NULL,
    location character varying(200) NOT NULL,
   
)
```
- Type npm install in terminal/console in the source folder where package.json is located
- Type node app.js in terminal/console in the source folder where api.js is located

