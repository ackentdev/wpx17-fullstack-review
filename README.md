# **REVIEW II:** BUT THIS TIME WITH A DATABASE!

## Ünbeméméble
<ul>
MVP
<li>login functionality</li>
<li>post memes</li>
<li>add comments to memes</li>
<li>full CRUD (delete, edit memes)</li>
<li>users can rate memes</li>
</ul>

ICEBOX
- sliding into their dm's

***Client***
<br/><br/>
*dependencies*
- axios
- react-router-dom
- redux
- react-redux
- redux-promise-middleware
- http-proxy-middleware
<br/>

*routes*
- home(/)
- profile(/profile)
- login(/login)
- account(/account)

*file structure*
- scr/
    - App.js
    - App.css
    - index.js
    - reset.css
    - redux/
        - store
        - reducer
    - components/
        - Header.js /.css
        - Login.js /.css
        - Account.js /.css
        - Main.js /.css
    - setUpProxy.js

**Server**
<br/>
*dependencies:*
- express-session
- massive
- express
- dotenv
- bcrypt

*endpoints:*
<br/>
auth:
- login: => /auth/login
- register: => /auth/register
- logout: => /auth/logout
- userSession: => /auth/user_session
<br/>

memeCtrl:
- (app.get) getAllMemes: => /api/get_memes
- (app.post) postMeme: => /api/post_meme
- (app.delete) deleteMeme: => /api/delete_meme/:id
- (app.put) addComment: => /api/add_comment/:id
- (app.put) editRating: => /api/edit_rating/:id

***Database***

#### User
```sql
CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(30) NOT NULL,
password TEXT NOT NULL,
email VARCHAR(50) NOT NULL,
profile_pic TEXT DEFAULT 'https://i.insider.com/5b169a601ae6624f008b48dd?width=1100&format=jpeg&auto=webp'
);
```

#### Meme
```sql
CREATE TABLE memes(
    meme_id SERIAL PRIMARY KEY,
    img_url TEXT NOT NULL
    rating INT DEFAULT 0,
    user_id REFERENCES users(user_id)
);
```

#### Comments
```sql
CREATE TABLE comments(
    comment_id SERIAL PRIMARY KEY,
    comment TEXT,
    user_id REFERENCES users(user_id),
    meme_id REFERENCES memes(meme_id)
);
```

<hr/>
This is a basic react app created as a review with the 17th Web Development cohort at Dev Mountain Phoenix
