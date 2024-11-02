import { useCallback, useState } from "react";
import SearchIcon from "../../Asstets/Icons/SearchIcon";
import TablesRow from "./TablesRow";
import CustomModal from "../../Feature/Modal/CustomModal";
import AddProductForm from "../CommonComponent/CustomForm";
import { Product } from "../../DB/db";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import {
  addProduct,
  deleteProducts,
  updateProducts,
} from "../../store/slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductImage from "../../Asstets/Icons/Image.png";
import DashboardIcon from "../../Asstets/Icons/Dashboard";
import CartIcon from "../../Asstets/Icons/CartIcon";
import UpdateIcon from "../../Asstets/Icons/UpdateIcon";
import ArrowLeft from "../../Asstets/Icons/ArrowLeft";
import ArrowRight from "../../Asstets/Icons/ArrowRight";
import PlusIcon from "../../Asstets/Icons/PlusIcon";
import Chart from "../CommonComponent/Chart";
import DahsobardChart from "../CommonComponent/Chart";

const TABS = [{ label: "All", value: "all" }];

function ProductsTable() {
  const uid = uuidv4();
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("all");
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>({
    id: uid,
    image: "",
    name: "",
    description: "",
    price: "",
  });

  const [updateProduct, setUpdateProduct] = useState({
    id: "",
    image: "",
    name: "",
    description: "",
    price: "",
  });

  const allProducts: any = useSelector<{ product: Product }>(
    (state) => state.product
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      // const filterRegex = new RegExp(e.target.value, "i");
      // const resultOptions = allProducts.filter((option) =>
      //   option.name.match(filterRegex)
      // );
      // setAllProducts(resultOptions);
    },
    []
  );

  const openModalhandaler = () => {
    setIsModalOpen((prev) => !prev);
    setProduct({
      id: uid,
      image: "",
      name: "",
      description: "",
      price: "",
    });
  };

  const updateModalHandler = () => {
    setIsUpdateModalOpen((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleChangeUpdatedData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const fileToBlob = (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () =>
        resolve(new Blob([reader.result as ArrayBuffer], { type: file.type }));
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  };

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files?.[0];
    const { name } = e.target;
    if (selectedFile) {
      try {
        const blob = await fileToBlob(selectedFile);
        const url: any = URL.createObjectURL(blob);
        setProduct({
          ...product,
          [name]: url,
        });

        setUpdateProduct((prevProduct) => ({
          ...prevProduct,
          [name]: url,
        }));
      } catch (error) {
        console.error("Error converting file to blob:", error);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setIsModalOpen(false);
  };

  const handleUpdateExistingProduct = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateProducts(updateProduct));
    setIsUpdateModalOpen(false);
  };

  const handleDeleteProduct = (id: string) => {
    dispatch(deleteProducts(id));
  };

  const handleUpdateProduct = (id: string) => {
    const updatedProduct: Product = allProducts?.find(
      (item: Product) => item.id === id
    );
    setUpdateProduct({
      id: updatedProduct.id,
      image: updatedProduct.image,
      name: updatedProduct.name,
      description: updatedProduct.description,
      price: updatedProduct.price,
    });
    updateModalHandler();
  };

  return (
    <div>
      <div className="w-full mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="mb-6 flex justify-between items-center">
          <div className=" text-left">
            <h2 className="text-xl font-semibold text-blue-gray-700">
              Customize Your Products
            </h2>
            <p className="text-sm text-gray-500">
              See information about all Product
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-1 text-sm font-semibold border border-gray rounded-md">
              <Link to="/all-products-list">View All Products</Link>
            </button>
            <button
              onClick={openModalhandaler}
              className="px-4 py-1 text-sm font-semibold  bg-green text-white rounded-md flex items-center"
            >
              <PlusIcon/>
              Add Product
            </button>
          </div>
        </div>

        <div className="mb-4 rounded p-2 border border-light-gray">
          <div className="flex items-center justify-between gap-5">
            <div
              className="bg-[#d1e7dd] p-4  rounded w-[40%] border border-[#a3cfbb] "
              // style={{
              //   boxShadow:
              //     "1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, -1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, 0px -1px 0px 0px rgba(0, 0, 0, 0.17) inset, 0px 1px 0px 0px rgba(204, 204, 204, 0.50) inset, 0px 1px 0px 0px rgba(26, 26, 26, 0.07)",
              // }}
            >
              <div className="text-left flex items-center gap-3">
                {/* <img src={ProductImage} alt="" /> */}
                <DashboardIcon/>

                <div>
                <p className="font-medium text-[16px] ">Total Products</p>
                <p className="font-medium">{allProducts?.length}</p>
                </div>
              </div>
            </div>

            <div
              className="bg-[#f8d7da] p-4  rounded w-[40%] border border-[#f1aeb5] "
              // style={{
              //   boxShadow:
              //     "1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, -1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, 0px -1px 0px 0px rgba(0, 0, 0, 0.17) inset, 0px 1px 0px 0px rgba(204, 204, 204, 0.50) inset, 0px 1px 0px 0px rgba(26, 26, 26, 0.07)",
              // }}
            >
              <div className="text-left flex items-center gap-3">
                <CartIcon/>
                <div>
                <p className="font-medium text-[16px] ">Total Orders</p>
                <p className="font-medium">{allProducts?.length}</p>
                </div>
              </div>
            </div>

            <div
              className="bg-[#cff4fc] p-4  rounded w-[40%] border border-[#9eeaf9]"
              style={{
                boxShadow:
                  "1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, -1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, 0px -1px 0px 0px rgba(0, 0, 0, 0.17) inset, 0px 1px 0px 0px rgba(204, 204, 204, 0.50) inset, 0px 1px 0px 0px rgba(26, 26, 26, 0.07)",
              }}
            >
              <div className="text-left flex items-center gap-3">
                <UpdateIcon/>
                <div>
                <p className="font-medium text-[16px] ">Updated Products</p>
                <p className="font-medium">{allProducts?.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <DahsobardChart/>
        </div>

        {/* <img src={blobUrl} alt="Uploaded Preview" /> */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4 ">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedTab(tab.value)}
                className={`py-2 px-4 font-medium ${
                  selectedTab === tab.value
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
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
          {/* </div>  */}
        </div>
        <TablesRow
          allProducts={allProducts}
          handleDeleteProduct={handleDeleteProduct}
          handleUpdateProduct={handleUpdateProduct}
        />

        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">Page 1 of 1</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm border rounded-md text-gray-600">
              <ArrowLeft/>
            </button>
            <button className="px-3 py-1 text-sm border rounded-md text-gray-600">
              <ArrowRight/>
            </button>
          </div>
        </div>
      </div>
      {
        <CustomModal
          title={"Add New Product"}
          isModalOpen={isModalOpen}
          openModalhandaler={openModalhandaler}
          form={
            <AddProductForm
              handleUploadImage={handleUploadImage}
              handleSubmit={handleSubmit}
              product={product}
              handleChange={handleChange}
              title={"Add Product"}
            />
          }
        />
      }
      {
        <CustomModal
          title={"Update Existing Product"}
          isModalOpen={isUpdateModalOpen}
          openModalhandaler={updateModalHandler}
          form={
            <AddProductForm
              handleUploadImage={handleUploadImage}
              handleSubmit={handleUpdateExistingProduct}
              product={updateProduct}
              handleChange={handleChangeUpdatedData}
              title={"Update Product"}
            />
          }
        />
      }
    </div>
  );
}

export default ProductsTable;
