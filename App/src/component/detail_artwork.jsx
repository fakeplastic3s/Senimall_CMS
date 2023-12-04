import { useEffect, useState } from "react";
import axios from 'axios';

export default function DetailArtwork() {

    const [art, setArt] = useState();

    // async function getArtworkList(){
    //     try{
    //         const data = await axios.get('http://localhost:3000/artwork_list')
    //         setArt(data.data)
    //         // console.log(art[0].image)
    //         // console.log(data.data[0])
    //     }
    //     catch(error){
    //         console(error)
    //     }
    // }

    // useEffect(()=>{
    //     getArtworkList();
    // },[])

    return (
        <div className="w-full bg-[#EEEEEE] mt-6 px-14 py-5 rounded-xl">
            <h1 className="font-unica mb-5">Artwork Detail</h1>
            <div className="flex gap-3 mb-5 items-center" >
                <img src="/foto_lukisan/Hendrik_Merkus_Baron_de_Kock_by_Cornelis_Kruseman.jpg" alt="abc" className="w-1/2 max-h-[300px] object-contain" />
                <div className="font-unica">
                    <p className="font-bold">Title</p>
                    <p className="mb-2">Penangkapan Pangeran Diponegoro</p>
                    <p className="font-bold">Artist</p>
                    <p className="mb-2">Raden Saleh</p>
                    <p className="font-bold">Price</p>
                    <p className="mb-2">Rp. 1.000.000</p>
                    <p className="font-bold">Category</p>
                    <p className="mb-2">Realism</p>
                    <p className="font-bold">Material</p>
                    <p className="mb-2">Oil in Canvas</p>
                    <p className="font-bold">Size</p>
                    <p className="mb-2">120 cm x 80 cm</p>
                </div>
            </div>
            <p className="font-unica font-bold">Description</p>
            <p className="font-unica">Pada 13 Januari 1808, ia dipromosikan menjadi kolonel dan diangkat menjadi ajudan gubernur jenderal Albertus Henricus Wise. 11 April 1809 dipromosikan menjadi sersan dan diangkat menjadi komandan divisi di Semarang. 20 Januari 1810 menjadi Kepala Staf Umum Angkatan Laut Kerajaan dan Kolonial di Batavia. 1 September 1810 dipindahkan ke layanan Prancis. 10 Agustus 1811 diangkat menjadi Kepala Staf Umum Tentara Kerajaan Hindia Belanda.</p>
        </div>
    )
}