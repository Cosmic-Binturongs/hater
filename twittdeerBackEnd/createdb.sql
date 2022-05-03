create database twittdeer;

create user twittdeer_admin with password 'password';

grant all privileges on database twittdeer to twittdeer_admin;
