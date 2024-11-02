import React from "react";
import { Product } from "../../DB/db";
// import CustomDropdown from "../../Feature/Dropdown/CustomDropdown";

interface Props {
  allProducts?: any;
  handleDeleteProduct?: (id: string) => void;
  handleUpdateProduct?: (id: string) => void;
}

export default function TablesRow({
  allProducts,
  handleDeleteProduct = (id: string) => {},
  handleUpdateProduct = (id: string) => {},
}: Props) {
  const TABLE_HEAD = ["Image", "Title", "Description", "Price", "Actions"];

  return (
    <div>
      <table className="w-full table-auto text-left border-collapse">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b p-4 text-white bg-deepGreen border border-light-gray font-medium"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {allProducts?.map(
            (
              { image, name, description, price, id }: Product,
              index: number
            ) => (
              <tr key={name} className={" border border-light-gray"}>
                {/* index % 2 === 0 ? "bg-gray-400" :  */}
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src={image || ""}
                      alt={name}
                      className="w-10 h-10  mr-3"
                    />
                  </div>
                </td>
                <td className="p-2">
                  <p className="font-medium">{name}</p>
                </td>
                <td className="p-2">
                  <p className="text-sm text-gray-500">{description}</p>
                </td>

                <td className="p-2">
                  <p className="text-sm text-gray-500">{price}</p>
                </td>
                <td className="p-2">
                  <div className="flex gap-3 items-center justify-center">
                  <button
                    className="text-white bg-deepGreen px-2  rounded text-[14px] "
                    onClick={() => handleUpdateProduct(id)}
                  >
                    Update
                  </button>
                  <button
                    className="text-white bg-red  px-2  rounded text-[14px]"
                    onClick={() => handleDeleteProduct(id)}
                  >
                    Delete
                  </button>
                  {/* <CustomDropdown/> */}
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
