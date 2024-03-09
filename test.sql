create table if not exists `User` (
 `id` int(11) not null auto_increment,
 `name` varchar(256) not null,
 `first_name` varchar(256) not null,
 `last_name` varchar(256) not null,
 `email` varchar(512) not null,
 `phone_number` varchar(256) not null,
 `zipcode` varchar(100) not null,
 `state` varchar(100) not null
primary key (`id`)
);