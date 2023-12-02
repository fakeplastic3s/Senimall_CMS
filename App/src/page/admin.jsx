import Artwork from "../component/artwork";
import Sidebar from "../component/sidebar";

export default function Admin(){
    return(
        <div className="w-full min-h-screen flex justify-between">
            <Sidebar/>
            <Artwork/>
        </div>
    )
} 