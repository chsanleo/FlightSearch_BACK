# Backend, FlightSearch
![badge](https://img.shields.io/badge/working-active-brig)

Backend proposed as an exercise to work with NodeJs and React connected together using the API of the back. Also have a database where we storage the information about the correct behaviour of the application. In this application we need to complete the necessary methods to manage the users, manage the flights and relative information and give the possibility of search different flights from different data.

The data is storage in two different databases, local SQL to manage the data of the normal use and a remote MongoDB to manage the orders of the user. This one gonna be use to storage all the information about the transactions of the user.

We wanted to go further and we installed different libraries, adding some extra features to our applications like the creation of logs. Also we use a external API to require information like the ratio exchange between different currency.


## How to Start 🚀

+ If you only want to use our Api/Backend, just clone this repository 
```
 git clone https://github.com/chsanleo/FlightSearch_BACK
```

+ and install the packages,

```
$ npm install
```

+ run the migrations to create the database

```
$ sequelize db:migrate
```

+ populate the database with basic data

```
$ sequelize db:seed:all
```
 
+ and... WORK!.

## Project status

>Is not finish and we are working adding more features and improvements on it, also fixing some small details ;).

### Current Features 📄

+ Create a User and Tokens and manage it.
+ Only one Token is valid per User.
+ The username is unic in the system because is used to login.
+ All the entities have contact Info are linked with that table.
+ Combine SQL and MongoDB for management data.
+ Different configuration files, you can personalize completely followin the example.
+ One exist one "Admin", to add new "Admin" must update manually the DB.
+ All the information about country, companies and IATA are real.

### Roadmap 📋

**About the back**
+ Improve the search of flights with a search algorithm and improve the DB for it.
+ Create a CRM using the current DB.

**About the documentation**
+ In the root folder is created a log folder.

**About features**
+ Implement new search.
+ Add new fields to database.
+ Add payment plataforms.



## Test the application ⚙️

Turn on the server.
```
$ npm start
```

you can use Postman to request from the API.


Use the browser of your choice and with the developer tools test. 


![devtools](https://www.formacionprofesional.info/wp-content/uploads/2015/09/herramientas_desarrollo_iexplorer11.png)

## Used Tools 🛠️

* [Axios](https://www.npmjs.com/package/axios) - HTTP client
* [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Cyper 
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Token
* [Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB ORM
* [Morgan](https://www.npmjs.com/package/morgan) - Logs
* [Mysql2](https://www.npmjs.com/package/mysql2) - MySQL client
* [Sequelize](https://www.npmjs.com/package/sequelize) - ORM
* [Winston] (https://www.npmjs.com/package/winston) - Logs

## Contributors ✒️

* **Christian Sanchez Leon** - [chsanleo](https://github.com/chsanleo)
* **Jesus Canovas** - [Jesus1994-7](https://github.com/Jesus1994-7)

## License 📄
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

Ask us before use and ask us for another features or documentation we didn't include.


## How to say 'thanks' to us  🎁

* Tell others about this project 📢
* Pay a beer 🍺 or coffee ☕ to us (or two, or... some ;) ). 
* Comments about always welcome!.