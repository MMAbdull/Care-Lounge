import { Router } from "express";
import { sendResponse } from "../utils/apiResponses.js";

const router = Router();

router.post("/login", (req, res) => {
  return sendResponse(res,200,"Login route placeholder", {
    user: {
      id:1,
      name:"mohammad",
    },
    token: "Fake-jwt-token",
  });
});

router.post("/register", (req, res) => {
  return sendResponse(res,201,"Register route placeholder", {
    id:1,
    email:"testing@mail.com",
  });
});

export default router;