"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_routes_1 = __importDefault(require("./product.routes"));
const routes = (0, express_1.Router)();
// define the base path and the router that's going to be called
routes.use('/products', product_routes_1.default);
// export the route
exports.default = routes;
