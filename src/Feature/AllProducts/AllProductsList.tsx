import { useCallback, useState } from "react";
import { Product } from "../../DB/db";
import SearchIcon from "../../Asstets/Icons/SearchIcon";
import clsx from "clsx";
import { useSelector } from "react-redux";
import AddCartIcon from "../../Asstets/Icons/AddCartIcon";
import Star from "../../Asstets/Icons/Star";

const AllProductsList = () => {
  const allProducts: any = useSelector<{ product: Product }>(
    (state) => state.product
  );
  const [search, setSearch] = useState("");

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // const filterRegex = new RegExp(e.target.value, "i");
      // const resultOptions = allProducts.filter((option) =>
      //   option.name.match(filterRegex)
      // );
      // setAllProducts(resultOptions);
      setSearch(e.target.value);
    },
    []
  );

  const catagory = [
    "Software",
    "Internet Service",
    "Photo Studio Accessories",
    "Computers & laptop",
    'Cloths Items',
    ''
  ];

  return (
    <div className="grid grid-cols-5 gap-4 h-full">
      <div className="col-span-1 bg-gray-200 p-4">
        <div className="bg-white p-5 text-left rounded h-full">
          <p className="text-[18px] font-semibold">Filters</p>
          <p className="text-[14px] font-semibold py-3">Catagory</p>
          <div>
            {catagory.map((item, index) => {
              return (
                <p className="cursor-pointer text-[#333333] hover:text-red leading-8" key={index}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-span-4 bg-gray-100 p-4">
        <div className="">
          {/* h-[90vh] bg-white */}
          <div className="p-3">
            <div className="flex items-center justify-between py-4">
              <h4>
                All Products{" "}
                <span className="text-[16px] font-normal ">
                  ({allProducts?.length} products available)
                </span>{" "}
              </h4>
              <div className="relative flex items-center w-72">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-72 px-4 py-1 border border-light-gray rounded-md outline-none"
                  value={search}
                  onChange={handleInputChange}
                />
                {/* <MagnifyingGlassIcon className="absolute top-3 right-3 h-5 w-5 text-gray-400" />
                 */}{" "}
                <div className="cursor-pointer absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
                  <SearchIcon />
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "flex items-center gap-5 flex-wrap",
                !allProducts?.length
                  ? "items-center justify-center h-[80vh]"
                  : ""
              )}
            >
              {allProducts?.length ? (
                allProducts?.map((item: Product, index: number) => {
                  return (
                    <div className="w-[302px] bg-white hover:bg-aquamarine-light cursor-pointer h-[462px] rounded p-2 shadow-md flex flex-col justify-between border border-light-gray ">
                      <div>
                        <div>
                          <img
                            src={item.image}
                            alt="p"
                            className="w-[100%] object-cover h-[286px] rounded"
                          />
                        </div>
                        <div className=" text-left p-2">
                          {/* <p className="my-1 leading-5 " >This products is most selling products in this year.</p> */}
                          <div className="flex items-center gap-1">
                            {Array(5)
                              .fill(0)
                              .map(() => {
                                return <Star />;
                              })}
                          </div>
                          <div className="mt-3">
                            <h5 className=" font-monospace">{item.name}</h5>
                            <p className="font-monospace text-sm font-light">
                              {item.description}
                            </p>
                            <p className="font-monospace text-[18px] font-semibold font-light">
                              ${item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className=" bg-[#f8d7da] w-full rounded hover:bg-gray-400 flex  items-center justify-center">
                          <AddCartIcon /> Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="flex items-center justify-center">
                  <p>No Product available right now</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsList;
