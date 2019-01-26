var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: ""
});

var accTable = `
CREATE TABLE Accounts (
	account_id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    pass varchar(255) NOT NULL,
    first_name varchar(60) NOT NULL,
	last_name varchar(60) NOT NULL,
    phone_Number VARCHAR(25),
    address varchar(255),
    city varchar(255),
    postal_code varchar(8),
    PRIMARY KEY ( account_id )
);`

var typeTable = `CREATE TABLE Type(
	id INT NOT NULL AUTO_INCREMENT,
    typeName varchar(255),
    primary key(id)
);`

var prodTable = `CREATE TABLE Produce(
	id INT NOT NULL AUTO_INCREMENT,
    type_id INT NOT NULL,
    image varchar(255),
    isByWeight BOOLEAN NOT NULL,
    primary key (id),
    foreign key(type_id)
    references Type(id)
);`

var listTable = `CREATE TABLE Listings(
	id INT NOT NULL AUTO_INCREMENT,
    produce_id INT NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (produce_id)
	REFERENCES Produce(id)
);`

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    con.query('DROP DATABASE IF EXISTS fruity', function(err, result){
    con.query('CREATE DATABASE fruity', function (err, result) {
        if (err) throw err;
        console.log("Database created");

        con.query('USE fruity', function (err, result){
            if(err) throw err;
            console.log("Using fruity !");
            con.query(accTable, function (err, result){
            if(err) throw err;
            console.log("Created Accounts !");
            con.query(typeTable, function (err, result){
                if(err) throw err;
                console.log("Created Types !");
                con.query(prodTable, function (err, result){
                    if(err) throw err;
                    console.log("Created Produces !");
                    con.query(listTable, function (err, result){
                        if(err) throw err;
                        console.log("Created Listings !");
                        
                    });
                    
                });
                    
             });
                    
            });
                
                
        });
            
    });
            
});
});
