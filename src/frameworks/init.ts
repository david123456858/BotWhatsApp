import express, { Response, Request, json } from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

const port = process.env.PORT ?? 3001;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(morgan("dev"));

app.use(json());

app.disable("x-powered-by");

app.get("/", (_req: Request, res: Response) => {
  res.send("El bot esta levantado");
});

app.listen(port, () => {
  console.log(`Se esta escuhando en http://localhost:${port}`);
});
