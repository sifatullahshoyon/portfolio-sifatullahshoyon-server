import { Router } from 'express';
import { projectController } from './projects.controller';
import { projectValidationSchema } from './projects.validation';
import validateRequest from '../../../middlewares/validateRequest';

const projectRouter = Router();

projectRouter.post(
  '/',
  validateRequest(projectValidationSchema),
  projectController.createProject,
);

export default projectRouter;
