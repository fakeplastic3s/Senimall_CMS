import React, { useEffect } from "react"
import { useState } from "react";
import axios from 'axios'

export default function ArtworkList() {

    const [art, setArt] = useState([])

    async function getArtworkList (){
        try{
            const  data  = await axios.get('http://localhost:3000/artwork_list');
            setArt(data.data)
            console.log(data.data)
            // console.log(art)
        }
        catch (error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getArtworkList()
    },[])
    // getArtworkList()

    return (
        <div className="bg-[#EEEEEE] rounded-xl mt-5 min-h-[80vh]">
            <div className="flex justify-between items-center mt-6 w-11/12 mx-auto">
                <h1 className="font-semibold font-unica">Artwork List</h1>
                <button className="flex justify-between py-2 px-4 gap-5 items-center bg-[#4ECCA3] rounded-2xl">
                    <img src="/artwork_component/Vector (1).svg" alt="" className="h-4" />
                    <span className="font-unica text-white mt-1">Add</span>
                </button>
            </div>
            <div className="w-11/12 mx-auto min-h-[350px] mt-7 mb-8 bg-[#D9D9D9]">
                <table className="w-full bg-[#D9D9D9]">
                    <thead className="bg-[#5C8374] text-center h-14">
                        <tr className="text-white">
                            <th>#</th>
                            <th>Title</th>
                            <th>Artis</th>
                            <th>Sold Out</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {art.map(items => {
                            return (
                                <tr key={items.id} className="h-1 border-b border-[#5C8374]">
                                    <td><input type="checkbox" /></td>
                                    <td className="font-franklin text-left w-[45%] px-4">{items.title}</td>
                                    <td className="text-left w-[30%]">{items.Artis}</td>
                                    <td className="flex justify-center gap-2 py-2">
                                        <img src="/artwork_component/del.svg" alt="" className="bg-[#FF4343] hover:bg-red-600 rounded-md px-2 py-2 cursor-pointer" />
                                        <img src="/artwork_component/Vector (2).svg" alt="" className="bg-[#5C8374] hover:bg-[#2d8659] rounded-md px-2 py-2 cursor-pointer" />
                                        <img src="/artwork_component/eye.svg" alt="" className="border border-[#5C8374] bg-white rounded-md px-2 py-2 cursor-pointer" />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}