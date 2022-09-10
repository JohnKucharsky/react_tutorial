import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import DraggableBox from "./pages/DraggableBox/DraggableBox";
import GroceryList from "./pages/GroceryList";
import Input from "./pages/Input";
import MovingDot from "./pages/MovingDot";

export const routesValues = {
  input: "/input",
  movingdot: "/movingdot",
  draggablebox: "/draggablebox",
} as const;

function Router() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GroceryList />} />
          <Route path={routesValues.input} element={<Input />} />
          <Route path={routesValues.movingdot} element={<MovingDot />} />
          <Route path={routesValues.draggablebox} element={<DraggableBox />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default Router;
