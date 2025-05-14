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
    message: 'Project created successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

// get single Project

const getProjectById = catchAsync(async (req: Request, res: Response) => {
  const result = await projectService.getSingleProjectFromDb(req.params.id);

  sendResponse(res, {
    message: 'Single Project retrieved successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

// delete single Project

const removeProjectById = catchAsync(async (req: Request, res: Response) => {
  await projectService.removeSingleProjectFromDb(req.params.id);

  sendResponse(res, {
    message: 'Single Project Delete successfully',
    statusCode: StatusCodes.OK,
    data: {},
  });
});

// get single Project

const getAllProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectService.AllProjectFromDb();

  sendResponse(res, {
    message: 'All Projects retrieved successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const projectController = {
  createProject,
  getProjectById,
  getAllProject,
  removeProjectById,
};
