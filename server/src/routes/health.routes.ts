import { Router } from "express";

const router = Router();

router.get("/",(req,res) => {
  res.json({
    message:"Care Lounge API is Running"
  });
});

export default router;