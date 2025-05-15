"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectController = void 0;
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
const projects_service_1 = require("./projects.service");
// create product
const createProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield projects_service_1.projectService.createProjectIntoDB(payload);
    (0, sendResponse_1.default)(res, {
        message: 'Project created successfully',
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        data: result,
    });
}));
// get single Project
const getProjectById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_service_1.projectService.getSingleProjectFromDb(req.params.id);
    (0, sendResponse_1.default)(res, {
        message: 'Single Project retrieved successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: result,
    });
}));
// delete single Project
const removeProjectById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield projects_service_1.projectService.removeSingleProjectFromDb(req.params.id);
    (0, sendResponse_1.default)(res, {
        message: 'Single Project Delete successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: {},
    });
}));
// get single Project
const getAllProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_service_1.projectService.AllProjectFromDb();
    (0, sendResponse_1.default)(res, {
        message: 'All Projects retrieved successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: result,
    });
}));
exports.projectController = {
    createProject,
    getProjectById,
    getAllProject,
    removeProjectById,
};
