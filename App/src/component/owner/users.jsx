import { Outlet } from "react-router-dom";

export default function Users() {
  return (
    <>
      <h1 className="font-franklin text-4xl  text-[#232931] mb-9">Users</h1>
      <Outlet />
    </>
  );
}
