import axios from "axios";
import { Card, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Users() {
  return (
    <>
      <h1 className="font-franklin text-4xl  text-[#232931] mb-9">Users</h1>
      {/* <div className="bg-[#EEEEEE] rounded-xl mt-5 min-h-[80vh]"></div> */}
      <Outlet />
    </>
  );
}
