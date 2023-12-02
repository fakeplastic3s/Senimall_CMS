export default function Add_Artwork() {
    return (
        <div>
            <form action="" className="bg-[#EEEEEE] min-h-screen mt-8 rounded-2xl py-6 px-8">
                <label htmlFor="title" className="mb-7 block">
                    <p className="font-unica text-lg">Title</p>
                    <input type="text" id="title" className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
                </label>
                <label htmlFor="Artist" className="mb-7 block">
                    <p className="font-unica text-lg">Artist</p>
                    <input type="text" id="Artist" className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
                </label>
                <div className="flex justify-between mb-7">
                    <label htmlFor="Artist" className="block w-[35%]">
                        <p className="font-unica text-lg">Price</p>
                        <input type="text" id="Artist" className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
                    </label>
                    <label htmlFor="Category" className="w-[60%] block">
                        <p className="font-unica text-lg">Category</p>
                        <select name="" id="Category" className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]">
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
                        <input type="text" id="material" className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
                    </label>
                    <label htmlFor="size" className="w-[60%] block">
                        <p className="font-unica text-lg">Size</p>
                        <input type="text" id="size" className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
                    </label>
                </div>
                <label htmlFor="deskripsi" className="w-full block mb-7">
                    <p className="font-unica text-lg">Description</p>
                    <textarea type="text" id="deskripsi" rows='10' className="w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
                </label>
                <label htmlFor="image" className="w-full block mb-7">
                    <p className="font-unica text-lg">Image</p>
                    <input type="file" id="image" className="outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46]" />
                </label>
                <button className="bg-[#183D3D] flex justify-center items-stretch gap-3 w-full py-1 rounded-lg">
                     <img src="/artwork_component/Vector (4).svg" alt="" className="w-4" />
                     <span className="font-unica text-white pt-1 ">Submit</span>
                </button>
            </form>
        </div>
    )
}