import { Router } from "express";
import { sendResponse } from "../utils/apiResponses.js";

const router = Router();

router.get("/", (req, res) => {
  return sendResponse(
    res,
    200,
    "Health Check Successful",
    null
  );
});
export default router;