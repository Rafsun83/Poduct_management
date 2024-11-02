import clsx from "clsx";
import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
const Index = () => {
  const location = useLocation();
  const navigate = useNavigate()


  useEffect(() => {

    if(location.pathname === '/'){
      navigate('/all-products-list')
    }

  }, [location.pathname, navigate])

  return (
    <div >
      <nav className=" fixed w-[100%] z-20">
        <ul
          className={clsx(
            "flex  gap-5 px-6 py-3 text-balck",
            location.pathname !== "/admin" ? "bg-[#cff4fc]" : "bg-deepGreen"
          )}
        >
          <div className="w-[100%]">
            {location.pathname !== "/admin" ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className=" cursor-pointer">
                    <Link to="/all-products-list">
                      <h4 className="text-[#055160] text-left border p-2 rounded">
                        Product Shop
                      </h4>
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <li className={
                      clsx('cursor-pointer text-[#055160]',  'hover:bg-aquamarine px-2 rounded' )
                    }>
                      <Link to="/all-products-list">Home</Link>
                    </li>
                    <li className={
                      clsx('cursor-pointer text-[#055160]','hover:bg-aquamarine px-2 rounded' )
                    }>
                      <Link to="/about">About</Link>
                    </li>
                    <li className={
                      clsx('cursor-pointer text-[#055160]', 'hover:bg-aquamarine px-2 rounded')
                    }>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <div>
                    <li className="cursor-pointer text-[#055160] border-b-[1px] ">
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
      <div className="bg-[#f4f4f4] pt-[60px] min-h-[100vh] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
