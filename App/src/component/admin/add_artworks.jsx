import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Add_Artwork() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  // Validate input
  const validateForm = () => {
    const newErrors = {};

    if (!payload.title) {
      newErrors.title = 'Title is required';
    }

    if (!payload.Artist) {
      newErrors.Artist = 'Artist is required';
    }
  
    if (!payload.price) {
      newErrors.price = 'Price is required';
    }
  
    if (!payload.material) {
      newErrors.material = 'Material is required';
    }
  
    if (!payload.size) {
      newErrors.size = 'Size is required';
    }
    
    if (!payload.description) {
      newErrors.description = 'Description is required';
    }
    
    if (!payload.image) {
      newErrors.image = 'Image is required';
    }
    
    // Validate other fields as needed

    setErrors(newErrors);

    // Return true if there are no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  const [payload, setPayload] = useState({ id: uuidv4() });

  const generateNewId = () => {
    setPayload({ ...payload, id: uuidv4() });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };

  const handleBackButtonClick = () => {
    navigate("/admin/artwork/artwork-list");
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    if (!validateForm()) {
      // Form validation failed
      return;
    }

    generateNewId();

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
      navigate("/admin/artwork/artwork-list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className="bg-[#EEEEEE] flex items-center justify-center gap-3 py-[2px] px-4 mb-5 w-[100px] rounded-lg" onClick={handleBackButtonClick}>
        <img src="/artwork_component/Vector (3).svg" alt="" className="h-[15px]" />
        <span className="font-unica mt-1">Back</span>
      </button>
      <form action="" className="bg-[#EEEEEE] min-h-screen mt-8 rounded-2xl py-6 px-7">
        <label htmlFor="title" className="mb-7 block">
          <p className="font-unica text-lg">Title</p>
          <input type="text" name="title" id="title" onChange={handleInput} className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] ${errors.title && 'border-red-500'}`} />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </label>
        <label htmlFor="Artist" className="mb-7 block">
          <p className="font-unica text-lg">Artist</p>
          <input type="text" id="Artist" name="Artist" onChange={handleInput} className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] ${errors.Artist && 'border-red-500'}`} />
          {errors.Artist && <p className="text-red-500">{errors.Artist}</p>}
        </label>
        <div className="flex justify-between mb-7">
          <label htmlFor="price" className="block w-[35%]">
            <p className="font-unica text-lg">Price</p>
            <input type="text" id="price" name="price" onChange={handleInput} className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] ${errors.price && 'border-red-500'}`} />
            {errors.price && <p className="text-red-500">{errors.price}</p>}
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
            <input type="text" id="material" name="material" className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] ${errors.material && 'border-red-500'}`} />
            {errors.material && <p className="text-red-500">{errors.material}</p>}
          </label>
          <label htmlFor="size" className="w-[60%] block">
            <p className="font-unica text-lg">Size</p>
            <input type="text" id="size" name="size" className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] ${errors.size && 'border-red-500'}`} />
            {errors.size && <p className="text-red-500">{errors.size}</p>}
          </label>
        </div>
        <label htmlFor="deskripsi" className="w-full block mb-7">
          <p className="font-unica text-lg">Description</p>
          <textarea type="text" id="deskripsi" name="description" onChange={handleInput} rows="10" className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] ${errors.description && 'border-red-500'}`} />
          {errors.description && <p className="text-red-500">{errors.description}</p>}
        </label>
        <label htmlFor="image" className="w-full block mb-7">
          <p className="font-unica text-lg">Image (PNG, JPG)</p>
          <input type="file" id="image" name="image" accept=".png, .jpg, .jpeg" onChange={handleInput} className="outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
        </label>
        <button type="button" className="bg-[#183D3D] flex justify-center items-stretch gap-3 w-full py-1 rounded-lg" onClick={handleSubmit}>
          <img src="/artwork_component/Vector (4).svg" alt="" className="w-4" />
          <span className="font-unica text-white pt-1 ">Submit</span>
        </button>
      </form>
    </>
  );
}
