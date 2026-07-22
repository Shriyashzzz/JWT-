## JWT Auth

You sign a value token( normally object literal) using cryptography and saves the entire token in a cookie or a local storage and sends it back as an header every request to authenticate a user.

Cannot be revoked from the server side, get’s revokes when it expires

Less Lookup cost per request, as the token is signed cryptographically with a key, so can look up the needed token with an algorithm without having to make further API calls to the database.

Horizontally Scaleable: Any server with the secret key can verify the incoming token.

---

### ** some useful references **

- [Node.js API Authentication With JWT](https://www.youtube.com/watch?v=7nafaH9SddU).
- [Different ways in which JWTs can be useful](https://www.youtube.com/watch?v=7Q17ubqLfaM).
- [A Practical Guide for JWT Authentication Using Node.js and Express](https://web.archive.org/web/20230207144457/https://laptrinhx.com/a-practical-guide-for-jwt-authentication-using-node-js-and-express-917791379/).
- [Implement JWT autherization with EXPRESS + PassportJS Framework.](https://paulallies.medium.com/stateless-auth-with-express-passport-jwt-7a55ffae0a5c).
- [Some arguments on Why JWT SUCKS ASSS!](https://www.youtube.com/watch?v=JdGOb7AxUo0).
-
