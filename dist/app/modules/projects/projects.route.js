"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projects_controller_1 = require("./projects.controller");
const projects_validation_1 = require("./projects.validation");
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const projectRouter = (0, express_1.Router)();
projectRouter.post('/', (0, validateRequest_1.default)(projects_validation_1.projectValidationSchema), projects_controller_1.projectController.createProject);
projectRouter.get('/:id', projects_controller_1.projectController.getProjectById);
projectRouter.delete('/:id', projects_controller_1.projectController.removeProjectById);
projectRouter.get('/', projects_controller_1.projectController.getAllProject);
exports.default = projectRouter;
