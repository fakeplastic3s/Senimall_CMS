import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Edit_user = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [submitStatus, setSubmitStatus] = useState(null);
    const [loadData, setLoadData] = useState({
        id: id,
        name: '',
        username: '',
        password: '',
        role: ''
    });

    const load = async () => {
        try {
            const data = await axios.get(`http://localhost:3000/admin?id=${id}`)
            console.log(data.data[0].name)
            setLoadData({
                ...loadData,
                name: data.data[0].name,
                username: data.data[0].username,
                password: data.data[0].password,
                role: data.data[0].role
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        load()
    }, [])

    const handleOnchangeInput = (e) => {
        const { name, value } = e.target;
        setLoadData(
            {
                ...loadData,
                id: id,
                [name]: value
            }
        )
    };

    const handleBackButtonClick = () => {
        navigate("/owner/Users");
    };

    const putData = async () =>{
        try {
            axios.put(`http://localhost:3000/admin/${id}`, loadData);
            setSubmitStatus('success')
        } catch (error) {
            console.log(`ada error ${error}`)
            setSubmitStatus('error')
        }
    }

    const handleOnSubmit = (e) => {

        e.preventDefault()
        // console.log(data.data[0].id)
        // console.log(loadData);

        putData()

    };

    const handleModalClose = () => {
        setSubmitStatus(null);
        navigate("/owner/Users");
      };
    
      // Confirmation modal for form submission success
      const handleSuccessModalClose = () => {
        Swal.fire({
          text: "Edit Data successfully!",
          icon: "success",
          confirmButtonColor: "#183D3D",
          confirmButtonText: "OK",
        }).then(() => {
          handleModalClose();
        });
      };
    
      // Confirmation modal for form submission error
      const handleErrorModalClose = () => {
        Swal.fire({
          text: "An error occurred. Please try again later.",
          icon: "error",
          confirmButtonColor: "#183D3D",
          confirmButtonText: "OK",
        }).then(() => {
          handleModalClose();
        });
      };

    return (
        <>
            <button onClick={handleBackButtonClick} className="bg-[#EEEEEE] flex items-center justify-center gap-3 py-[2px] px-4 mb-5 w-[100px] rounded-lg">
                <img src="/artwork_component/Vector (3).svg" alt="" className="h-[15px]" />
                <span className="font-unica mt-1">Back</span>
            </button>
            <Card className="max-w ">
                <div className="flex justify-between items-center ">
                    <h1 className="font-semibold font-unica">Form add user</h1>
                </div>
                <form action="" onSubmit={handleOnSubmit}>
                    <label htmlFor="title" className="mb-7 block">
                        <p className="font-unica text-lg">Full Name</p>
                        <input type="text" name="name" id="name" value={loadData.name} onChange={handleOnchangeInput} className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] `} />
                    </label>
                    <label htmlFor="title" className="mb-7 block">
                        <p className="font-unica text-lg">Username</p>
                        <input type="text" name="username" id="username" value={loadData.username} onChange={handleOnchangeInput} className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] `} />
                    </label>
                    <label htmlFor="title" className="mb-7 block">
                        <p className="font-unica text-lg">Password</p>
                        <input type="text" name="password" id="password" value={loadData.password} onChange={handleOnchangeInput} className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] `} />
                    </label>
                    <label htmlFor="title" className="mb-7 block">
                        <p className="font-unica text-lg">Role</p>
                        <select name="role" id="role" onChange={handleOnchangeInput} value={loadData.role} className={`outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] `}>
                            <option value="admin">Admin</option>
                            <option value="Artist">Artist</option>
                            <option value="owner">Owner</option>
                        </select>
                    </label>
                    <button type="submit" className="bg-[#183D3D] flex justify-center items-stretch gap-3 w-full py-1 rounded-lg">
                        <img src="/artwork_component/Vector (4).svg" alt="" className="w-4" />
                        <span className="font-unica text-white pt-1 ">Edit</span>
                    </button>
                </form>
                {submitStatus === "success" && handleSuccessModalClose()}
                {submitStatus === "error" && handleErrorModalClose()}
            </Card>
        </>
    )
}

export default Edit_user