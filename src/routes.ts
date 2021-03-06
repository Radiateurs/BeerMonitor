import { Router } from "express";
import AuthRouter from "./router/Auth.router";
import UserRouter from "./router/User.router";
import BrewingRouter from "./router/Brewing.router";
import FermentorRouter from "./router/Fermentor.router";
import IngredientRouter from "./router/Ingredient.router";
import ReceipeRouter from "./router/Receipe.router";
import ReceipeIngredientRouter from "./router/ReceipeIngredient.router";

const IndexRouter = Router();

IndexRouter.use("/user", UserRouter);
IndexRouter.use("/auth", AuthRouter);
IndexRouter.use("/brewing", BrewingRouter);
IndexRouter.use("/fermentor", FermentorRouter);
IndexRouter.use("/ingredient", IngredientRouter);
IndexRouter.use("/receipe", ReceipeRouter);
IndexRouter.use("/receipeingredient", ReceipeIngredientRouter);

export default (IndexRouter);