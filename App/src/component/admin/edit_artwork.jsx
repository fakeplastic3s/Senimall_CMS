import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditArtwork() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [artwork, setArtwork] = useState({
        title: "",
        Artist: "",
        price: "",
        category: "",
        material: "",
        size: "",
        description: "",
        image: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5173/artwork_list/${id}`);
                const artworkData = response.data;
                setArtwork(artworkData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setArtwork({
            ...artwork,
            [name]: value,
        });
    };

    const handleBackButtonClick = () => {
        navigate("/admin/artwork/artwork-list");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:5173/artwork_list/${id}`, artwork);
            navigate("/admin/artwork/artwork-list");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <button
                className="bg-[#EEEEEE] flex items-center justify-center gap-3 py-[2px] px-4 mb-5 w-[100px] rounded-lg"
                onClick={handleBackButtonClick}
            >
                <img src="/artwork_component/Vector (3).svg" alt="" className="h-[15px]" />
                <span className="font-unica mt-1">Back</span>
            </button>
            <form className="bg-[#EEEEEE] min-h-screen mt-8 rounded-2xl py-6 px-7">
                <label htmlFor="title" className="mb-7 block">
                    <p className="font-unica text-lg">Title</p>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={artwork.title}
                        onChange={handleInput}
                        className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]"
                    />
                </label>
                <label htmlFor="Artist" className="mb-7 block">
                    <p className="font-unica text-lg">Artist</p>
                    <input
                        type="text"
                        id="Artist"
                        name="Artist"
                        value={artwork.Artist}
                        onChange={handleInput}
                        className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]"
                    />
                </label>
                {/* Repeat similar blocks for other form inputs with appropriate values from the 'artwork' state */}
                <label htmlFor="price" className="block w-[35%]">
                    <p className="font-unica text-lg">Price</p>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={artwork.price}
                        onChange={handleInput}
                        className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]"
                    />
                </label>
                <label htmlFor="Category" className="w-[60%] block">
                    <p className="font-unica text-lg">Category</p>
                    <select
                        name="category"
                        id="Category"
                        value={artwork.category}
                        onChange={handleInput}
                        className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]"
                    >
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
                        <option value="minimalism">Minimalism</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="realism">Realism</option>
                        <option value="digital art">Digital Art</option>
                        <option value="photography">Photography</option>
                    </select>
                </label>
                <label htmlFor="material" className="block w-[35%]">
                    <p className="font-unica text-lg">Material</p>
                    <input
                        type="text"
                        id="material"
                        name="material"
                        value={artwork.material}
                        onChange={handleInput}
                        className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]"
                    />
                </label>
                <label htmlFor="size" className="w-[60%] block">
                    <p className="font-unica text-lg">Size</p>
                    <input
                        type="text"
                        id="size"
                        name="size"
                        value={artwork.size}
                        onChange={handleInput}
                        className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]"
                    />
                </label>
                <label htmlFor="deskripsi" className="w-full block mb-7">
                    <p className="font-unica text-lg">Description</p>
                    <textarea
                        type="text"
                        id="deskripsi"
                        name="description"
                        value={artwork.description}
                        onChange={handleInput}
                        rows="10"
                        className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]"
                    />
                </label>
                <label htmlFor="image" className="w-full block mb-7">
                    <p className="font-unica text-lg">Image (PNG, JPG)</p>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleInput}
                        className="outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]"
                    />
                </label>
                <button type="submit" className="bg-[#183D3D] flex justify-center items-stretch gap-3 w-full py-1 rounded-lg">
                    <img src="/artwork_component/Vector (4).svg" alt="" className="w-4" />
                    <span className="font-unica text-white pt-1" onClick={handleSubmit}>
                        Submit
                    </span>
                </button>
            </form>
        </>
    );
}

export default EditArtwork;
