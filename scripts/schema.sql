CREATE DATABASE jober_pre_task CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE jober_pre_task;

CREATE TABLE profile_card (
    id int auto_increment primary key,
    name varchar(100) not null,
    nickname varchar(100) null,
    phoneNumber varchar(255) null,
    email varchar(255) null,
    birth varchar(255) null,
    address varchar(255) null,
    gender varchar(100) null,
    created_at timestamp default CURRENT_TIMESTAMP not null,
    updated_at timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    deleted_at timestamp null
);
