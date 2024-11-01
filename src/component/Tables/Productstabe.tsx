import { useCallback, useEffect, useState } from "react";
import SearchIcon from "../../Asstets/Icons/SearchIcon";
import TablesRow from "./TablesRow";
import CustomModal from "../../Feature/Modal/CustomModal";
import AddProductForm from "../CommonComponent/CustomForm";
import { addData } from "../../DB/Actions/addProducts";
import { Product, Stores } from "../../DB/db";
import { v4 as uuidv4 } from "uuid";
import { getStoreData } from "../../DB/Actions/retriveProducts";
import { deleteProduct } from "../../DB/Actions/deleteProduct";
import { getDataById } from "../../DB/Actions/retriveSignleProduct";
import { updateExistingProduct } from "../../DB/Actions/updateProducts";
import { Link } from "react-router-dom";

const TABS = [
  { label: "All", value: "all" },
];

function ProductsTable() {
  const uid = uuidv4();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isProductAdded, setIsProductAdded] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedId, setSelecedId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [product, setProduct] = useState({
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

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      const filterRegex = new RegExp(e.target.value, "i");
      const resultOptions = allProducts.filter((option) =>
        option.name.match(filterRegex)
      );
      setAllProducts(resultOptions);
    },
    [allProducts]
  );

  const openModalhandaler = () => {
    setIsModalOpen((prev) => !prev);
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
    addData(Stores.Products, product);
    setIsProductAdded(true);
    // fetchData()
  };

  const handleUpdateExistingProduct = () => {
    updateExistingProduct(Stores.Products, selectedId, updateProduct)
      .then((data) => {
        setIsProductAdded(true);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleDeleteProduct = (id: string) => {
    deleteProduct(Stores.Products, id);
    setIsProductAdded(true);
  };

  const handleUpdateProduct = (id: string) => {
    setSelecedId(id);
    getDataById(Stores.Products, id)
      .then((data: any) => {
        if (data) {
          setUpdateProduct({
            id: data.id,
            image: data.image,
            name: data.name,
            description: data.description,
            price: data.price,
          });
        } else {
          console.log("No data found for the given ID.");
        }
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
    updateModalHandler();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getStoreData<Product>(Stores.Products);
        setAllProducts(products);
        setProduct({
          id: uid,
          image: "",
          name: "",
          description: "",
          price: "",
        });
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [isProductAdded]);

  setTimeout(() => {
    setIsProductAdded(false);
  }, 100);

  return (
    <div>
      <div className="w-full mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
        <div className="mb-4 flex justify-between items-center">
          <div className=" text-left">
            <h2 className="text-xl font-semibold text-blue-gray-700">
              Customize Your Products
            </h2>
            <p className="text-sm text-gray-500">
              See information about all Product
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-sm font-semibold border border-gray rounded-md">
              <Link to="/all-products-list">View All Products</Link>
            </button>
            <button
              onClick={openModalhandaler}
              className="flex items-center px-4 py-2 text-sm font-semibold  bg-green text-white rounded-md"
            >
              Add Product
            </button>
          </div>
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
              Previous
            </button>
            <button className="px-3 py-1 text-sm border rounded-md text-gray-600">
              Next
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
