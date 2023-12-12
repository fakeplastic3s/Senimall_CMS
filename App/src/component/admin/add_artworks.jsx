import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Add_Artwork() {
  const navigate = useNavigate();

  const [payload, setPayload] = useState({
    id: uuidv4(),
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };

  // console.log(payload)

  async function handleSubmit() {
    const newPayload = {
      id: payload.id,
      title: payload.title,
      Artist: payload.Artist,
      price: payload.price,
      category: payload.category,
      material: payload.material,
      size: payload.size,
      description: payload.description,
      image: payload.image,
    };

    try {
      await axios.post("http://localhost:3000/artwork_list", newPayload);
    } catch (error) {
      console.log(error);
    }

    navigate("/admin/artwork/artwork-list");
  }

  return (
    <>
      <button className="bg-[#EEEEEE] flex items-center justify-center gap-3 py-[2px] px-4 mb-5 w-[100px] rounded-lg">
        <img src="/artwork_component/Vector (3).svg" alt="" className="h-[15px]" />
        <span className="font-unica mt-1">Back</span>
      </button>
      <form action="" className="bg-[#EEEEEE] min-h-screen mt-8 rounded-2xl py-6 px-7">
        <label htmlFor="title" className="mb-7 block">
          <p className="font-unica text-lg">Title</p>
          <input type="text" name="title" id="title" onChange={handleInput} className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
        </label>
        <label htmlFor="Artist" className="mb-7 block">
          <p className="font-unica text-lg">Artist</p>
          <input type="text" id="Artist" name="Artist" onChange={handleInput} className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
        </label>
        <div className="flex justify-between mb-7">
          <label htmlFor="price" className="block w-[35%]">
            <p className="font-unica text-lg">Price</p>
            <input type="text" id="price" name="price" onChange={handleInput} className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
          </label>
          <label htmlFor="Category" className="w-[60%] block">
            <p className="font-unica text-lg">Category</p>
            <select name="category" id="Category" onChange={handleInput} className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]">
              <option value="nature">Nature</option>
              <option value="landscape">Landscape</option>
              <option value="abstract">Abstract</option>
              <option value="portrait">Portrait</option>
              <option value="still life">Still Life</option>
              <option value="street art">Street Art</option>
              <option value="contentporary">Contentporary</option>
              <option value="surrealism">Surrealism</option>
              <option value="cubism">Cubism</option>
              <option value="impressionism">Impressionism</option>
              <option value="minimalism">minimalism</option>
              <option value="rantasy">Fantasi</option>
              <option value="realism">Realism</option>
              <option value="digital art">Digital Art</option>
              <option value="photography">Photography</option>
            </select>
          </label>
        </div>
        <div className="flex justify-between mb-7">
          <label htmlFor="material" className="block w-[35%]">
            <p className="font-unica text-lg">Material</p>
            <input type="text" id="material" name="material" onChange={handleInput} className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
          </label>
          <label htmlFor="size" className="w-[60%] block">
            <p className="font-unica text-lg">Size</p>
            <input type="text" id="size" name="size" onChange={handleInput} className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
          </label>
        </div>
        <label htmlFor="deskripsi" className="w-full block mb-7">
          <p className="font-unica text-lg">Description</p>
          <textarea type="text" id="deskripsi" name="description" onChange={handleInput} rows="10" className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
        </label>
        <label htmlFor="image" className="w-full block mb-7">
          <p className="font-unica text-lg">Image</p>
          <input type="file" id="image" name="image" onChange={handleInput} className="outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
        </label>
        <button onClick={handleSubmit} type="button" className="bg-[#183D3D] flex justify-center items-stretch gap-3 w-full py-1 rounded-lg">
          <img src="/artwork_component/Vector (4).svg" alt="" className="w-4" />
          <span className="font-unica text-white pt-1 ">Submit</span>
        </button>
      </form>
    </>
  );
}
