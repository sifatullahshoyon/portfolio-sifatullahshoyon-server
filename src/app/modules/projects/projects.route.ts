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

projectRouter.get(
  '/:id',

  projectController.getProjectById,
);

projectRouter.delete(
  '/:id',

  projectController.removeProjectById,
);

projectRouter.get(
  '/',

  projectController.getAllProject,
);

export default projectRouter;
