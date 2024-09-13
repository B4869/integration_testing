import { Router } from 'express';
import productRouter from "./product.routes";
const routes = Router();
// define the base path and the router that's going to be called
routes.use('/products', productRouter);
// export the route
export default routes;