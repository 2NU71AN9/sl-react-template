import { RouterProvider } from "react-router-dom";
import globalRouter from "./globalRouter";

export default function Routers() {
  return <RouterProvider router={globalRouter} />;
}
