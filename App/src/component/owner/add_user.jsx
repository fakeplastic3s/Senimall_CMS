import { Card } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Swal from "sweetalert2";

export default function add_user() {
  const navigate = useNavigate();
  const [submitStatus, setSubmitStatus] = useState(null);
  const [payload, setPayload] = useState();

  const handleOnchangeInput = (e) => {
    const { name, value } = e.target;

    setPayload({
      ...payload,
      id: uuidv4(),
      [name]: value,
    });
  };

  const handleBackButtonClick = () => {
    navigate("/owner/Users");
  };

  const postData = async () => {
    try {
      axios.post("http://localhost:3000/admin", payload);
      setSubmitStatus("success");
      console.log("berhasil");
    } catch (error) {
      setSubmitStatus("success");
      console.log("gagal" + error);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const handleModalClose = () => {
    setSubmitStatus(null);
    navigate("/owner/Users");
  };

  // Confirmation modal for form submission success
  const handleSuccessModalClose = () => {
    Swal.fire({
      text: "Form submitted successfully!",
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
            <input type="text" name="name" id="name" onChange={handleOnchangeInput} className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] `} />
          </label>
          <label htmlFor="title" className="mb-7 block">
            <p className="font-unica text-lg">Username</p>
            <input type="text" name="username" id="username" onChange={handleOnchangeInput} className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] `} />
          </label>
          <label htmlFor="title" className="mb-7 block">
            <p className="font-unica text-lg">Password</p>
            <input type="text" name="password" id="password" onChange={handleOnchangeInput} className={`w-full outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] `} />
          </label>
          <label htmlFor="title" className="mb-7 block">
            <p className="font-unica text-lg">Role</p>
            <select name="role" id="role" onChange={handleOnchangeInput} className={`outline-none border-2 rounded-lg bg-transparent px-2 py-1 border-[#393E46] `}>
              <option value="">--Pilih Role--</option>
              <option value="admin">Admin</option>
              <option value="Artist">Artist</option>
              <option value="owner">Owner</option>
            </select>
          </label>
          <button type="submit" className="bg-[#183D3D] flex justify-center items-stretch gap-3 w-full py-1 rounded-lg">
            <img src="/artwork_component/Vector (4).svg" alt="" className="w-4" />
            <span className="font-unica text-white pt-1 ">Submit</span>
          </button>
        </form>
        {submitStatus === "success" && handleSuccessModalClose()}
        {submitStatus === "error" && handleErrorModalClose()}
      </Card>
    </>
  );
}
