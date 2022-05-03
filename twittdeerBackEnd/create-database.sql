CREATE DATABASE hater;

-- CREATE USER ht_admin WITH PASSWORD 'password';

-- GRANT ALL PRIVILEGES ON DATABASE hater TO ht_admin;

\c hater

CREATE TABLE "haters"(
    "id" INTEGER NOT NULL,
    "name" CHAR(50) NOT NULL,
    "login_name" CHAR(50) NOT NULL,
    "tag" CHAR(50) NOT NULL,
    "password" CHAR(50) NOT NULL
);
ALTER TABLE
    "haters" ADD PRIMARY KEY("id");
CREATE TABLE "hates"(
    "id" INTEGER NOT NULL,
    "hater_id" INTEGER NOT NULL,
    "h_body" CHAR(140) NOT NULL
);
ALTER TABLE
    "hates" ADD PRIMARY KEY("id");
CREATE TABLE "criticism"(
    "id" INTEGER NOT NULL,
    "hater_id" INTEGER NOT NULL,
    "c_body" CHAR(140) NOT NULL,
    "hates_id" INTEGER NOT NULL
);
ALTER TABLE
    "criticism" ADD PRIMARY KEY("id");
CREATE TABLE "followers"(
    "id" INTEGER NOT NULL,
    "hater_being_followed_id" INTEGER NOT NULL,
    "hater_following_id" INTEGER NOT NULL
);
ALTER TABLE
    "followers" ADD PRIMARY KEY("id");
CREATE TABLE "dislikes"(
    "id" INTEGER NOT NULL,
    "haters_id" INTEGER NOT NULL,
    "hates_id" INTEGER NOT NULL,
    "criticism_id" INTEGER NOT NULL
);
ALTER TABLE
    "dislikes" ADD PRIMARY KEY("id");


ALTER TABLE
    "hates" ADD CONSTRAINT "hates_hater_id_foreign" FOREIGN KEY("hater_id") REFERENCES "haters"("id");
ALTER TABLE
    "criticism" ADD CONSTRAINT "criticism_hater_id_foreign" FOREIGN KEY("hater_id") REFERENCES "haters"("id");
ALTER TABLE
    "followers" ADD CONSTRAINT "followers_hater_being_followed_id_foreign" FOREIGN KEY("hater_being_followed_id") REFERENCES "haters"("id");
ALTER TABLE
    "dislikes" ADD CONSTRAINT "dislikes_haters_id_foreign" FOREIGN KEY("haters_id") REFERENCES "haters"("id");
ALTER TABLE
    "dislikes" ADD CONSTRAINT "dislikes_hates_id_foreign" FOREIGN KEY("hates_id") REFERENCES "hates"("id");
ALTER TABLE
    "dislikes" ADD CONSTRAINT "dislikes_criticism_id_foreign" FOREIGN KEY("criticism_id") REFERENCES "criticism"("id");
ALTER TABLE
    "criticism" ADD CONSTRAINT "criticism_hates_id_foreign" FOREIGN KEY("hates_id") REFERENCES "hates"("id");
ALTER TABLE
    "followers" ADD CONSTRAINT "followers_hater_following_id_foreign" FOREIGN KEY("hater_following_id") REFERENCES "haters"("id");
