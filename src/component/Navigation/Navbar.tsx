import clsx from "clsx";
import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
const Index = () => {
  const location = useLocation();
  const navigate = useNavigate()
  console.log("Loacttion---", location.pathname)

  useEffect(() => {

    if(location.pathname === '/'){
      navigate('/all-products-list')
    }

  }, [location.pathname, navigate])

  return (
    <>
      <nav>
        <ul
          className={clsx(
            "flex  gap-5 p-6 text-balck",
            location.pathname !== "/admin" ? "bg-[#c530c5]" : "bg-deepGreen"
          )}
        >
          <div className="w-[100%]">
            {location.pathname !== "/admin" ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className=" cursor-pointer">
                    <Link to="/all-products-list">
                      <h4 className="text-white text-left border p-2 rounded">
                        Product Shop
                      </h4>
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <li className="cursor-pointer text-white ">
                      <Link to="/all-products-list">Home</Link>
                    </li>
                    <li className="cursor-pointer text-white ">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="cursor-pointer text-white ">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <div>
                    <li className="cursor-pointer text-white ">
                      <Link to="/admin">Admin Panel</Link>
                    </li>
                  </div>
                  <div>
                    <img
                      src={"https://picsum.photos/200"}
                      className="w-8 h-8 rounded"
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-[230px]">
                <h4 className="text-white text-left border p-2 rounded">
                  Product Management
                </h4>
              </div>
            )}
          </div>

          {/* <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'><Link to="/modal">Modal</Link></li>
                <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'><Link to="/toast">Toast</Link></li>
                <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'><Link to="/dropdown">Dropdown</Link></li>
                <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'><Link to="/selectdropdown">Select Dropdown</Link></li>
                <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'><Link to="/button">Button</Link></li>
                <li className='cursor-pointer bg-warning px-3 py-1 rounded-sm'><Link to="/form">Form</Link></li> */}
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Index;
