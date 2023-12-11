import Add_Artwork from "./add_artworks";
import ArtworkList from "./artwork_list";
import DetailArtwork from "./detail_artwork";

export default function Artwork(props) {
  return (
    <>
      {/* <button className="bg-[#EEEEEE] flex items-center justify-center gap-3 py-[2px] px-4 mb-5 w-[100px] rounded-lg">
        <img src="/artwork_component/Vector (3).svg" alt="" className="h-[15px]" />
        <span className="font-unica mt-1">Back</span>
      </button> */}
      <h1 className="font-franklin text-4xl  text-[#232931] mb-9">Artwork</h1>

      <ArtworkList />
      {/* <Add_Artwork /> */}
      {/* <DetailArtwork /> */}
    </>
  );
}
