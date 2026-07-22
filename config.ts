import dotenv from "dotenv";

dotenv.config();

interface Config {
  JWT_KEY: string;
}

const config: Config = {
  JWT_KEY: process.env.JWT_KEY || " ",
};

export default config;
