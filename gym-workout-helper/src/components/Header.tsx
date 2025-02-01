import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-gray-700 ">
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/arm.png" alt="logo" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/myexercises"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              My Exercises
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
