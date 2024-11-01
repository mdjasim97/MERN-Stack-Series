import { useState } from "react";
import Link from "./Component/Link/Link";
import { IoMenu, IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Routes = [
    { id: 1, path: "./", name: "Home" },
    { id: 2, path: "./about", name: "About" },
    { id: 3, path: "./service", name: "Service" },
    { id: 1, path: "./contact", name: "Contact Us" },
    { id: 1, path: "./notfound", name: "Not Found" },
  ];

  const handleMenuIcon = () => {
    const menuIcon = open;
    setOpen(!menuIcon);
  };

  console.log(open);
  return (
    <div>
      <nav className="bg-green-600 lg:flex">
        <div className="flex items-center text-white">
          <button
            onClick={handleMenuIcon}
            className="text-white text-3xl  md:hidden"
          >
            {open == true ? (
              <IoCloseOutline className="text-4xl m-2" />
            ) : (
              <IoMenu className="text-3xl m-2" />
            )}
          </button>

          <div className="flex flex-col h-full w-full justify-center lg:px-5">
            <p className="text-2xl font-bold items-center">Name</p>
          </div>
        </div>

        <div className="lg:flex lg:w-full lg:items-center lg:justify-center">
          <ul
            className={`lg:flex lg:items-center lg:justify-center md:bg-inherit duration-1000 absolute md:static text-xl my-3 p-2  mb-10 ${
              open ? "top-10" : "-top-64"
            } bg-green-700  text-white`}
          >
            {Routes.map((route) => (
              <Link key={route.id} route={route}></Link>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
