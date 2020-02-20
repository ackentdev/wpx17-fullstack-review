CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(30) NOT NULL,
password TEXT NOT NULL,
email VARCHAR(50) NOT NULL,
profile_pic TEXT DEFAULT 'https://i.insider.com/5b169a601ae6624f008b48dd?width=1100&format=jpeg&auto=webp'
);

INSERT INTO users(username, password, email)
VALUES
('carlos123', '123', 'carlos@123.net'),
('frodo_b', 'dotheygandalf', 'wraithbait@onering.me');

CREATE TABLE memes(
    meme_id SERIAL PRIMARY KEY,
    img_url TEXT NOT NULL,
    rating INT DEFAULT 0,
    user_id INT REFERENCES users(user_id)
);

INSERT INTO memes(img_url, user_id)
VALUES
('https://i.redd.it/mxm3itpzl2i41.jpg', 1),
('https://images7.memedroid.com/images/UPLOADED163/558354a59c113.jpeg', 2),
('https://i.kym-cdn.com/photos/images/original/001/271/161/d9e.jpg', 1);

CREATE TABLE comments(
    comment_id SERIAL PRIMARY KEY,
    comment TEXT,
    user_id INT REFERENCES users(user_id),
    meme_id INT REFERENCES memes(meme_id)
);

INSERT INTO comments(comment, user_id, meme_id)
VALUES
('lol, my face is so jacked up', 2, 2),
('na, bruh it aint thaaaaat bad', 1, 2);


-- example of a cart JOIN
-- SELECT * FROM products
-- JOIN cart
-- ON (products.user_id = cart.user_id)
-- WHERE cart.user_id = $1;