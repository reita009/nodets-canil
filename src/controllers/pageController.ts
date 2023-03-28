import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.send("ola sou a Home!");
};

export const dogs = (req: Request, res: Response) => {
  res.send("ola sou a dogs!");
};

export const cats = (req: Request, res: Response) => {
  res.send("ola sou cats!");
};

export const fishes = (req: Request, res: Response) => {
  res.send("ola sou a fishes!");
};
