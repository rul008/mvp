\c travel_gallery;

DROP TABLE IF EXISTS photo;
CREATE TABLE photo (
    id serial PRIMARY KEY NOT NULL,
    _date DATE,
    photo_url TEXT,
    comment TEXT,
    album_id INT,
    FOREIGN KEY (album_id)
      REFERENCES album (id)
);

CREATE TABLE album (
    id serial PRIMARY KEY NOT NULL,
    _date DATE,
    city_id INT,
    user_id INT,
    cover TEXT,
    FOREIGN KEY (city_id)
      REFERENCES cities (index),
    FOREIGN KEY (user_id)
      REFERENCES users (id)
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id serial PRIMARY KEY NOT NULL,
    user_name VARCHAR(60),
    user_email VARCHAR(60),
    img TEXT
);
DROP TABLE IF EXISTS album;



CREATE TABLE city_user(
  city_id INTEGER REFERENCES cities (index),
  user_id INTEGER REFERENCES users (id),

CONSTRAINT city_user_pk PRIMARY KEY (city_id,user_id));





