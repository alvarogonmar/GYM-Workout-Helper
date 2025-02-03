import { NavLink, useLocation } from "react-router-dom";
import "../css/Header.css";
import { useMemo } from "react";

export default function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);
  const isSearch = useMemo(() => pathname === "/search", [pathname]);
  return (
    <header
      className={
        isSearch ? "bg-[url('/bg-3.jpg')] bg-center bg-cover" : "bg-gray-700"
      }
    >
      <div className="mx-auto container px-5 py-16">
        <div className="flex  justify-center">
          <nav id="navbody">
            <ul className="flex gap-6">
              <label className="nav-item">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-green-500" : "text-gray-500"
                    }
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="currentColor"
                      ></path>
                    </svg>
                  </NavLink>
                </li>
              </label>
              <label className="nav-item">
                <li>
                  <NavLink
                    to="/search"
                    className={({ isActive }) =>
                      isActive ? "text-green-500" : "text-gray-500"
                    }
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        stroke="currentColor"
                      ></path>
                    </svg>
                  </NavLink>
                </li>
              </label>
              <label className="nav-item">
                <li>
                  <NavLink
                    to="/myexercises"
                    className={({ isActive }) =>
                      isActive ? "text-green-500" : "text-gray-500"
                    }
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="currentColor"
                      ></path>
                    </svg>
                  </NavLink>
                </li>
              </label>
              <label className="nav-item">
                <li>
                  <NavLink
                    to="/user"
                    className={({ isActive }) =>
                      isActive ? "text-green-500" : "text-gray-500"
                    }
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                        stroke="currentColor"
                      ></path>
                    </svg>
                  </NavLink>
                </li>
              </label>
            </ul>
          </nav>
        </div>
        <div className="flex  justify-center">
          {isSearch && (
            <form
              className="w-full md:w-1/2 2xl:w-2/3 bg-gray-500 my-32 p-10 rounded-lg shadow space-y-6"
              action=""
            >
              <div>
                <label
                  htmlFor="muscle"
                  className="block text-white uppercase font-extrabold text-lg"
                >
                  Muscle
                </label>
                <select
                  id="muscle"
                  name="muscle"
                  className="p-3 w-full rounded-lg focus:outline-none bg-amber-50"
                >
                  <option value="">-- Select --</option>
                </select>
              </div>
              <input
                type="submit"
                value={"Search Exercises"}
                className="cursor-pointer bg-gray-700 hover:bg-gray-900
              text-white font-extrabold w-full p-2 rounded-lg uppercase"
              />
            </form>
          )}
        </div>
      </div>
    </header>
  );
}
