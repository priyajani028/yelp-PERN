\d
(for displaying over-all relations/tables )

\d tableName
(for displaying field names in that table)


CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >=1 and price_range <=5)
);


INSERT INTO restaurants (name, location, price_range) values ('mc Donalds', 'Ahmedabad', 3);
INSERT INTO restaurants (name, location, price_range) values ('Yanky sizzlers', 'Ahmedabad', 4);
INSERT INTO restaurants (name, location, price_range) values ('Starbucks', 'Rajkot', 1);
INSERT INTO restaurants (name, location, price_range) values ('wendys', 'Vadodara', 2);
INSERT INTO restaurants (name, location, price_range) values ('Boba Cafe', 'Gandhinagar', 5);
INSERT INTO restaurants (name, location, price_range) values ('Tea post', 'Amreli', 3);


CREATE TABLE reviews(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGSERIAL NOT NULL references restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >=1 and rating <=5)
);

INSERT INTO reviews (restaurant_id, name, review, rating) values (9, 'John', 'What to say', 3);
INSERT INTO reviews (restaurant_id, name, review, rating) values (9, 'Millee', 'Good', 4);
