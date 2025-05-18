import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).send({ errors: result.error.flatten() });
      return;
    }

    req.body = result.data;
    next();
  };
