import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";
import { RequestError } from "request-promise/errors";

export const checkSearchParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.q) {
    throw new HTTP400Error("Missing q parameter");
  } else {
    next();
  }
};
