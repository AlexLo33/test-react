import { NavLink, Outlet } from "react-router-dom";
import { Header, IconQuestion, IconStop } from "@omng/storybook";

export default function Layout() {
  return (
    <>
      <Header projectName="Test React">
        <NavLink to="/exercices">
          <IconQuestion size="small" />
          <span>Exercices</span>
        </NavLink>
        <NavLink to="/bugs">
          <IconStop size="small" />
          <span>Bugs</span>
        </NavLink>
      </Header>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
