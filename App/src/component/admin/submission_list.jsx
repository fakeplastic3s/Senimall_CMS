import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Table } from "flowbite-react";
import { useNavigate, Link } from "react-router-dom";
import Modal from "react-modal"; // Import the Modal component

// Styles for the modal
const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px", // Set a maximum width
    width: "100%", // Make the modal responsive
    maxHeight: "700px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

// Modal header styles
const modalHeaderStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

// Close button styles
const closeButtonStyles = {
  cursor: "pointer",
  paddingLeft: "15px",
  borderRadius: "50px",
  width: "50px",
  height: "50px",
  fontSize: "30px",
  backgroundColor: "#F1EFEF",
  color: "gray",
};

export default function SubmissionList({ sendDataAddButton }) {
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null); // Track the selected submission
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
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

  const handleDeleteSubmission = async (id) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this Submission?");

    if (shouldDelete) {
      try {
        await axios.delete(`http://localhost:3000/submission_list/${id}`);
        getSubmissionList();
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Add these functions to your component

  const handleAcceptSubmission = async (id) => {
    const shouldAccept = window.confirm("Are you sure you want to accept this submission?");

    if (shouldAccept) {
      try {
        // Get the submission data
        const submission = submissions.find((item) => item.id === id);

        // Move the submission data to the artwork_list
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

        // Delete the submission from the submission_list
        await axios.delete(`http://localhost:3000/submission_list/${id}`);

        // Refresh the submission list
        getSubmissionList();

        // Close the modal
        closeModal();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleRejectSubmission = async (id) => {
    const shouldReject = window.confirm("Are you sure you want to reject this submission?");

    if (shouldReject) {
      try {
        // Delete the submission from the submission_list
        await axios.delete(`http://localhost:3000/submission_list/${id}`);

        // Refresh the submission list
        getSubmissionList();

        // Close the modal
        closeModal();
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Function to open the modal and set the selected submission
  const openModal = (submission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedSubmission(null);
    setIsModalOpen(false);
  };

  return (
    <Card className="max-w ">
      <h1 className="font-semibold font-unica">Submission List</h1>
      <div className="overflow-x-auto">
        {/* Jika tidak ada data maka akan muncul "No Data" */}
        {submissions.length === 0 ? (
          <>
            <h1 className="text-center italic text-gray-500">No Data</h1>
          </>
        ) : (
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
                    <button onClick={() => openModal(item)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>

                    {/* Accept Icon and Button */}
                    <button onClick={() => handleAcceptSubmission(item.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </button>

                    {/* Reject Icon and Button */}
                    <button onClick={() => handleRejectSubmission(item.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>

            {/* Modal for viewing detailed artwork */}
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyle} contentLabel="View Artwork">
              {selectedSubmission && (
                <>
                  {/* <h2 className="font-unica text-2xl font-semibold mb-2">{selectedSubmission.title}</h2>
                <p className="font-unica text-gray-600 mb-4">By {selectedSubmission.Artist}</p> */}

                  <div style={modalHeaderStyles}>
                    <h2 className="text-2xl font-semibold">Detail Artwork</h2>
                    <div style={closeButtonStyles} onClick={closeModal}>
                      <span>&times;</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-3 items-center">
                    <img
                      src={selectedSubmission.image} // Use the appropriate image URL or data
                      alt={selectedSubmission.title}
                      className="w-1/2 mb-4 rounded-lg me-4"
                    />
                    <div className="font-unica">
                        <p className="font-bold">Title</p>
                        <p className="mb-2">{selectedSubmission.title}</p>
                        <p className="font-bold">Artist</p>
                        <p className="mb-2">{selectedSubmission.Artist}</p>
                        <p className="font-bold">Price</p>
                        <p className="mb-2">{parseInt(selectedSubmission.price, 10).toLocaleString('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                        })}</p>
                        <p className="font-bold">Category</p>
                        <p className="mb-2">{selectedSubmission.category}</p>
                        <p className="font-bold">Material</p>
                        <p className="mb-2">{selectedSubmission.material}</p>
                        <p className="font-bold">Size</p>
                        <p className="mb-2">{selectedSubmission.size}</p>
                    </div>
                  </div>
                  <div className="font-unica">
                    <p className="font-bold">Description</p>
                    <p className="text-gray-700">{selectedSubmission.description}</p>
                  </div>

                  {/* Sticky buttons for Accept and Reject */}
                  <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-300">
                    <button onClick={() => handleAcceptSubmission(selectedSubmission.id)} className="bg-green-500 text-white px-6 py-2 rounded-md mr-2">
                      Accept
                    </button>
                    <button onClick={() => handleRejectSubmission(selectedSubmission.id)} className="bg-red-500 text-white px-6 py-2 rounded-md">
                      Reject
                    </button>
                  </div>
                </>
              )}
            </Modal>
          </Table>
        )}
      </div>
    </Card>
  );
}
