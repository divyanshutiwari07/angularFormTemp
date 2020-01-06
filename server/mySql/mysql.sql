-- create table
create table angular_form(
   id INT NOT NULL AUTO_INCREMENT,
   email VARCHAR(100) NOT NULL,
   pass VARCHAR(40) NOT NULL,
   PRIMARY KEY ( id )
);

-- insert row 
insert into angular_form (
  email, pass
  ) values (
    divy@gmail.com, divyanshu
    );
    
INSERT INTO angular_form (
  email, pass
  ) VALUES (
    'divy@gmail.com', 'divyanshu'
    );