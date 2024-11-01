import React from "react";

interface Props {
  handleChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  product?: any;
  handleSubmit?: (value: React.FormEvent) => void;
  handleUploadImage?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string
}

function AddProductForm({
  handleChange,
  product,
  handleSubmit,
  handleUploadImage,
  title
}: Props) {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* Image URL */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
          <div className="file-upload  w-[70%] max-w-md">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left ">
              Product thumbnail
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleUploadImage}
              className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          {
            product.image ? <div>
            <img src={product.image} alt="demo" className="w-[60px] h-[60px] rounded border border-light-gray" />
            </div> : null
          }
           
          </div>
        </div>

        {/* Product Name */}
        <div className="mb-4">
          <label
            className="block text-left text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product name"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            className="block text-left text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product description"
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label
            className="block text-left text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter price (e.g., 100 Tk)"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className=" bg-deepGreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
