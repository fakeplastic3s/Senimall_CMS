import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Table } from "flowbite-react";
import { useNavigate, Link } from "react-router-dom";

export default function SubmissionList({ sendDataAddButton }) {
    const [submissions, setSubmissions] = useState([]);
    const navigate = useNavigate();

    async function getSubmissionList() {
        try {
            const data = await axios.get("http://localhost:3000/submission_list");
            setSubmissions(data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getSubmissionList();
    }, []);

    const handleAddSubmission = () => {
        navigate("/admin/submission-add");
    };

    const handleAcceptSubmission = async (id) => {
        const shouldAccept = window.confirm("Are you sure you want to accept this submission?");

        if (shouldAccept) {
            try {
                // Get submission data
                const submission = submissions.find((item) => item.id === id);

                // Pindah data submission ke artwork_list
                await axios.post("http://localhost:3000/artwork_list", {
                    title: submission.title,
                    Artist: submission.Artist,
                    price: submission.price,
                    category: submission.category,
                    material: submission.material,
                    size: submission.size,
                    description: submission.description,
                    image: submission.image,
                });

                // Delete submission from the submission_list apabila reject
                await axios.delete(`http://localhost:3000/submission_list/${id}`);

                // Refresh submission list
                getSubmissionList();
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleRejectSubmission = async (id) => {
        const shouldReject = window.confirm("Are you sure you want to reject this submission?");

        if (shouldReject) {
            try {
                // Delete submission dari submission_list
                await axios.delete(`http://localhost:3000/submission_list/${id}`);

                // Refresh submission list
                getSubmissionList();
            } catch (error) {
                console.error(error);
            }
        }
    };


    return (
        <Card className="max-w ">
            <div className="flex justify-between items-center ">
                <h1 className="font-semibold font-unica">Submission List</h1>
                <button
                    title="Add Submission"
                    onClick={handleAddSubmission}
                    className="flex justify-between py-2 px-4 gap-5 items-center bg-[#4ECCA3] rounded-2xl"
                >
                    <img src="/submission_component/Vector (1).svg" alt="" className="h-4" />
                    <span className="font-unica text-white mt-1">Add</span>
                </button>
            </div>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head className="">
                        <Table.HeadCell>Title</Table.HeadCell>
                        <Table.HeadCell>Artist</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Action</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {submissions.map((item) => (
                            <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.title}</Table.Cell>
                                <Table.Cell>{item.Artist}</Table.Cell>
                                <Table.Cell className="flex gap-3 items-center">
                                    {/* Eye Icon */}
                                    <Link to={`/admin/submission-detail/${item.id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </Link>
                                    {/* Accept Icon and Button */}
                                    <button onClick={() => handleAcceptSubmission(item.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-4 h-4">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </button>
                                    {/* Reject Icon and Button */}
                                    <button onClick={() => handleRejectSubmission(item.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-4 h-4">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </Card>
    );
}
