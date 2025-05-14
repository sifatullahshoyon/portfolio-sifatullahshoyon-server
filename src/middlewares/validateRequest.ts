import { AnyZodObject } from 'zod';

import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const parseBody = await schema.parseAsync(req.body);

    req.body = parseBody;

    next();
  });
};

export default validateRequest;
