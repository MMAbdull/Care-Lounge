import { config } from "./env.js";

export const isDev = config.nodeEnv === "development";

export const isProd = config.nodeEnv === "production";

export const isTest = config.nodeEnv === "test";
