import { Outlet, Link } from "react-router-dom";
import { routesValues } from "./Router";
function Layout() {
  return (
    <div className="layout">
      <div className="layout__nav">
        <Link to="/">Grocery</Link>
        <Link to={routesValues.input}>Input</Link>
        <Link to={routesValues.movingdot}>MouseMove</Link>
        <Link to={routesValues.draggablebox}>DraggableBox</Link>
      </div>
      <span className="layout__container">
        <Outlet />
      </span>
    </div>
  );
}

export default Layout;
