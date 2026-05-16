import { Router } from "express";
import healthRouter from "../../routes/health.routes.js";
import authRoutes from "../../routes/auth.routes.js";
import productRoutes from "../../routes/product.routes.js"

const router = Router();

router.use("/health",healthRouter);
router.use("/auth",authRoutes);
router.use("/products",productRoutes);

export default router;