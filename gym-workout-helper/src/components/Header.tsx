import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import NavigationMenu from "./navigationMenu";

export default function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);
  const isSearch = useMemo(() => pathname === "/search", [pathname]);
  return (
    <header
      className={`bg-center bg-cover ${
        isSearch || isHome ? "bg-[url('/bg-3.jpg')]" : "bg-gray-700"
      }`}
    >
      <NavigationMenu />
      <div className="flex  justify-center">
        {isHome}
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
    </header>
  );
}
