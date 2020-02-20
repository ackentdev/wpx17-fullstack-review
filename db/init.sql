CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(30) NOT NULL,
password TEXT NOT NULL,
email VARCHAR(50) NOT NULL,
profile_pic TEXT DEFAULT 'https://i.insider.com/5b169a601ae6624f008b48dd?width=1100&format=jpeg&auto=webp'
);

CREATE TABLE memes(
    meme_id SERIAL PRIMARY KEY,
    img_url TEXT NOT NULL,
    rating INT DEFAULT 0,
    user_id INT REFERENCES users(user_id)
);

CREATE TABLE comments(
    comment_id SERIAL PRIMARY KEY,
    comment TEXT,
    user_id INT REFERENCES users(user_id),
    meme_id INT REFERENCES memes(meme_id)
);