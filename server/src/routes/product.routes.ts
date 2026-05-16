import { Router } from "express";
import { sendResponse } from "../utils/apiResponses.js";

const router = Router();

router.get("/", (req, res) => {
  return sendResponse(res,200,"Products Fetched", [
    {id:1,name:"Shampoo"},
    {id:2,name: "Soap" },
  ]);
});

router.get("/:id",(req,res) => {
 return sendResponse(res,200,"Product Fetched", {
  id:req.params.id,
  name: "Sample Product",
 });
});

export default router;