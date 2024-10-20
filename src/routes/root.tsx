import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="container mx-auto text-base ">
        <div
          id="sidebar"
          className={`fixed top-0 left-0 bottom-0 w-[320px] bg-green-600 p-4`}
        >
          <h1 className="text-3xl text-white pb-6 font-bold">
            Todo Application
          </h1>

          <nav>
            <ul className="text-center">
              <li className="leading-6  hover:bg-blue-300 cursor-pointer hover:text-white py-2 z-1 relative text-xl font-medium">
                Home
                <Link
                  to={`/`}
                  className="absolute top-0 bottom-0 left-0 right-0"
                ></Link>
              </li>
              <li className="leading-6  hover:bg-blue-300 cursor-pointer hover:text-white py-2 z-1 relative text-xl font-medium">
                Contacts
                <Link
                  to={`/contacts`}
                  className="absolute top-0 bottom-0 left-0 right-0"
                ></Link>
              </li>
            </ul>
          </nav>
        </div>
        <div
          id="detail"
          className={`ml-[330px] py-10 border rounded-md px-10 h-screen`}
        >
          {<Outlet />}
        </div>
      </div>
    </>
  );
}
