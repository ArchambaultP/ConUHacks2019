var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: ""
});

var accTable = `
CREATE TABLE Accounts (
	id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    pass varchar(255) NOT NULL,
    first_name varchar(60) NOT NULL,
	last_name varchar(60) NOT NULL,
    phone_number VARCHAR(25),
    address varchar(255),
    city varchar(255),
    postal_code varchar(8),
    PRIMARY KEY ( id )
);`

var typeTable = `CREATE TABLE ProduceType(
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
    references ProduceType(id)
);`

var listTable = `CREATE TABLE Listings(
	id INT NOT NULL AUTO_INCREMENT,
    produce_id INT NOT NULL,
    account_id INT NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (produce_id)
	REFERENCES Produce(id),
    FOREIGN KEY (account_id)
    REFERENCES Accounts(id)
);` 

var seedAccount = `
INSERT INTO Accounts (email,pass,first_name,last_name,phone_number,address,city,postal_code) VALUES ('admin','$2b$10$A7qVSDL.FrcLSnPeKJgapet8Cq24iD6c/5PZlb6Dwc3Fzuo7C5JeK','test','admin','450-531-6613','123 small street','Montreal', 'H4G 1S7')
`

var seedTypes = `
INSERT INTO ProduceType (typeName) VALUES ('Vegetables'),('Fruit');
`

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
                        con.query(seedAccount, function (err, result){
                            if(err) throw err;
                            console.log("Inserted Account !");
                            con.query(seedTypes, function (err, result){
                                if(err) throw err;
                                console.log("Inserted Types !");
                         
                            });
                        });
                    });
                    
                });
                    
             });
                    
            });
                
                
        });
            
    });
            
});
});
