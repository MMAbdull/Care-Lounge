import { Router } from "express";

const router = Router();

router.get("/",(req,res) => {
  res.json({
    success:true,
    message:"Api is running",
  });
});

export default router;