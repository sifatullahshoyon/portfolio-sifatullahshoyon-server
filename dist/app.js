"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = require("./middlewares/globalErrorHandler");
const projects_route_1 = __importDefault(require("./app/modules/projects/projects.route"));
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
// app.use(cookieParser());
app.use((0, cors_1.default)({
    origin: [
        // 'https://hand-two-hand-backend.vercel.app',
        'http://localhost:3000',
        // 'https://hand-to-hand-frontend.vercel.app',
    ],
    credentials: true,
}));
//* ========================== Application Routes Start ===================
// Auth
// app.use('/api/auth', authRouter);
// Projects
app.use('/api/project', projects_route_1.default);
//* ========================== Application Routes End ===================
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'Sifat Ullah Shoyon Portfolio Server is Live⚡',
    });
});
//! Global Error Handler
app.use(globalErrorHandler_1.globalErrorHandler);
//! not found route
// app.use('*', (req: Request, res: Response) => {
//   res.status(StatusCodes.NOT_FOUND).json({
//     success: false,
//     message: 'Route is not found',
//   });
// });
exports.default = app;
