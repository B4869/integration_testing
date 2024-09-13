"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_routes_1 = require("./product.routes");
const routes = (0, express_1.Router)();
// define the base path and the router that's going to be called
routes.use('/products', product_routes_1.default);
// export the route
exports.default = routes;
