import Add_Artwork from "./add_artworks";
import ArtworkList from "./artwork_list";

export default function Artwork(props) {
    return (
        <div className='w-full py-10 px-14 flex flex-col'>
            <button className="bg-[#EEEEEE] flex items-center justify-center gap-3 py-[2px] px-4 mb-5 w-[100px] rounded-lg">
                <img src="/artwork_component/Vector (3).svg" alt="" className="h-[15px]" />
                <span className="font-unica mt-1">Back</span>
            </button>
            <h1 className="font-franklin text-4xl">Artwork</h1>
            {/* <ArtworkList/> */}
            <Add_Artwork />
        </div>
    )
}