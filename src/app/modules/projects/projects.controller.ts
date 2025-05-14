import { Request, Response } from 'express';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { projectService } from './projects.service';

// create product
const createProject = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await projectService.createProjectIntoDB(payload);

  sendResponse(res, {
    message: 'Product created successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

export const projectController = {
  createProject,
};
