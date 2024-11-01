import { useCallback, useEffect, useState } from "react";
import { getStoreData } from "../../DB/Actions/retriveProducts";
import { Product, Stores } from "../../DB/db";
import SearchIcon from "../../Asstets/Icons/SearchIcon";
import clsx from "clsx";

const AllProductsList = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const filterRegex = new RegExp(e.target.value, "i");
      const resultOptions = allProducts.filter((option) =>
        option.name.match(filterRegex)
      );
      setAllProducts(resultOptions);
      setSearch(e.target.value);
    },
    [allProducts]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getStoreData<Product>(Stores.Products);
        setAllProducts(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [search === ""]);

  return (
    <div className=" bg-white p-3 h-[90vh]">
      <div className="flex items-center justify-between py-4">
        <h4>All Products</h4>
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
          !allProducts?.length ? "items-center justify-center h-[80vh]" : ""
        )}
      >
        {allProducts?.length ? (
          allProducts?.map((item, index) => {
            return (
              <div className="w-72 bg-white h-80 rounded p-2 shadow-md flex flex-col justify-between border border-light-gray ">
                <div>
                  <div>
                    <img
                      src={item.image}
                      alt="p"
                      className="w-[100%] object-fill h-[150px] rounded"
                    />
                  </div>
                  <div className=" text-left p-2">
                    <h5 className=" font-monospace">{item.name}</h5>
                    <p className="font-monospace text-sm font-light">
                      {item.description}
                    </p>
                    <p className="font-monospace text-sm font-light">
                      Price: ${item.price}
                    </p>
                  </div>
                </div>
                <div>
                  <button className=" bg-light-gray w-full rounded hover:bg-gray-400 ">
                    Add to Cart
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
  );
};

export default AllProductsList;
