import express, { type NextFunction } from "express";
import jwt from "jsonwebtoken";
import { type Response, type Request } from "express";
import config from "./config /config.js";
const app = express();

app.get("/api", (req: Request, res: Response) => {
  res.json({
    message: "Hello from your api server",
  });
});

//FORMAT OF TOKEN
//AUTHORIZATION : Bearer <access_token>

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  //getting the auth header  value
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    // further token check
    const bearerToken = bearerHeader.split(" ")[1];
    if (typeof bearerToken === "string") {
      req.token = bearerToken;
      next();
    } else {
      return res.sendStatus(401); // if not string send 401
    }
  } else {
    return res.sendStatus(403); // forbidden response
  }
};

app.post("/api/posts", verifyToken, (req: Request, res: Response) => {
  if (!req.token) return res.sendStatus(403);
  jwt.verify(req.token, config.JWT_KEY, (err, authData) => {
    if (err) {
      return res.sendStatus(403);
    } else {
      return res.json({
        message: "Post created successfully",
        authData,
      });
    }
  });
});

app.post("/api/login", (req: Request, res: Response) => {
  // Mock user
  const user = {
    id: 1,
    username: "John",
    email: "johncnea@gmail.com",
  };

  jwt.sign(
    { user },
    config.JWT_KEY,
    (err: Error | null, token: string | undefined) => {
      if (err) {
        console.log("error: ", err);
      } else {
        res.json({
          token,
        });
      }
    },
  );
});

app.listen(8080, () => {
  console.log(`Server started at http://localhost:8080/api`);
});
