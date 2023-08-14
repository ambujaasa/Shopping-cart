import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from "../Utility/ImagetoBase64";
import { toast } from "react-hot-toast";

const Newproduct = () => {
  const [Data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const uploadImage = async (e) => {
    const Data = await ImagetoBase64(e.target.files[0]);
    //console.log(Data);
    setData((preve) => {
      return {
        ...preve,
        image: Data,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Data);

    const { name, image, category, price } = Data;
    if (name && image && category && price) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(Data),
        }
      );
      const fetchRes = await fetchData.json();
      console.log(fetchRes);
      toast(fetchRes.message);
      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("Enter required fields");
    }
  };

  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md flex flex-col p-3 bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name="name"
          defaultValue={"Data.name"}
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
        />

        <label htmlFor="category">Category</label>

        <select
          className="bg-slate-200 p-1 my-1"
          id="category"
          defaultValue={"Data.category"}
          name="category"
          onClick={handleOnChange}
        >
          <option value={"other"}>select category</option>
          <option value={"fruits"}>Fruits</option>
          <option value={"vegetables"}>Vegetables</option>
          <option value={"rice"}>Rice</option>
          <option value={"flours"}>Flours</option>
          <option value={"seeds"}>Seeds</option>
          <option value={"soaps"}>Soaps</option>
        </select>
        <label htmlFor="image">
          Image
          <div className="h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer">
            {Data.image ? (
              <img src={"Data.image"} alt={"dataimage"} className="h-full" />
            ) : (
              <span className="text-5xl">
                <BsCloudUpload />
              </span>
            )}

            <input
              type={"file"}
              id="image"
              onChange={uploadImage}
              className="hidden"
              accept="image/*"
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type={"text"}
          className="bg-slate-200 p-1 my-1"
          defaultValue={"Data.price"}
          name="price"
          onChange={handleOnChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={2}
          className="bg-slate-200 p-1 my-1 resize-none"
          defaultValue={"Data.description"}
          onChange={handleOnChange}
          name="description"
        ></textarea>

        <button className="bg-red-500 hover:bg-red-600 text-lg text-white font-medium my-2 drop-shadow">
          Save
        </button>
      </form>
    </div>
  );
};

export default Newproduct;
