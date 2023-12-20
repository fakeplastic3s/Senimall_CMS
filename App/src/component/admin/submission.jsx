import { useEffect, useState } from "react";
import Add_Submission from "./add_submission";
import SubmissionList from "./submission_list";
import DetailSubmission from "./detail_submission";
import { useNavigate, Outlet } from "react-router-dom";
import Footer from "../footer";

export default function Submission(props) {
  const navigate = useNavigate();
  const [add, setAdd] = useState("list");

  useEffect(() => {
    // receiveAdd();
    if (add === "list") {
      navigate("submission-list");
    } else {
      navigate("submission-add");
    }
  }, [add]);

  return (
    <div>
      <h1 className="font-franklin text-4xl text-[#232931] mb-9">Submission</h1>
      <Outlet />
      {/* <SubmissionList /> */}
      {/* <Add_Submission /> */}
      {/* <DetailSubmission /> */}
    </div>
  );
}
