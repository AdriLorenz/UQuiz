   
insert into Roles VALUES 
	(default, "Basic"),
    (default, "Admin");

select * from Roles;
  
insert into Classrooms VALUES
	(default, "2ºA"),
    (default, "1ºA"),
    (default, "3ºA");
    
select * from Classrooms;
   
insert into Users VALUES 
	(default, "Tiburcio", "Tiburcio@gmail.com", "1234", 80, 3, 1, 2),
    (default, "Pino", "Pino@gmail.com", "1234", 80, 3, 1, 2 );
    
select * from Users;

update users set role_id_fk = 2
where user_id = 1;

DELETE FROM Users
WHERE user_id = 26;
   
insert into Themes VALUES 
	(default, "Historia"),
    (default, "Geografía"),
    (default, "Informática");
    
select * from Themes;
  
insert into Topics VALUES 
	(default, "2da Guerra Mundial", 1),
    (default, "Guerra de los 100 años", 1),
    (default, "Capitales", 2),
    (default, "DAM", 3);
    
select * from Topics;
   
insert into Questions VALUES
	(default, "¿Quién ganó la batalla de Hastings?", 1),
    (default, "¿En qué año terminó la 2da Guerra Mundial?", 1),
    (default, "¿Cual es la capital de Alemania?", 2),
    (default, "¿Es Casa Blanca la capital de Marruecos?", 2),
    (default, "¿Es HTML un lenguaje de programación?", 3),
    (default, "¿Qué es un ORM?", 3);
    
select * from Questions;
           
insert into Answers VALUES
	(default, "El Rey Harold", 0, 1),
    (default, "El Rey Guillermo", 1, 1),
    (default, "Yo", 0, 1),
    (default, "1945", 1, 2),
    (default, "1939", 0, 2),
    (default, "1944", 0, 2),
    (default, "París", 0, 3),
    (default, "Munich", 0, 3),
    (default, "Berlín", 1, 3),
    (default, "No", 1, 4),
    (default, "Sí", 0, 4),
    (default, "No", 1, 5),
    (default, "Sí", 0, 5),
    (default, "Es un sistema gestor", 0, 5),
    (default, "Un lenguaje de programación", 0, 6),
    (default, "Una librería para Java", 0, 6),
    (default, "Un sistema de acceso a la base de datos", 1, 6);
    
select * from answers;