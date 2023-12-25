import axios from "axios";
import { Card, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Modal from "react-modal"; // Import the Modal component
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export default function UserList() {
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
      maxWidth: "500px", // Set a maximum width
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

  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  async function getUsers() {
    try {
      const data = await axios.get("http://localhost:3000/admin");
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Function to open the modal and set the selected submission
  const openModal = (users) => {
    setSelectedUsers(users);
    setIsModalOpen(true);
  };
  console.log(selectedUsers);
  console.log(isModalOpen);

  // Function to close the modal
  const closeModal = () => {
    setSelectedUsers(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleAddUserList = () => {
    // setMode('add');
    navigate("/owner/Users/add-user");
  };

  const handleButtonDelete = (id) => {
    MySwal.fire({
      title: "Peringatan!",
      text: "Apakah Anda yakin ingin menghapus data ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "gray",
      cancelButtonText: "Batal",
      confirmButtonText: "Hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id);
      }
    });
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/admin/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card className="max-w ">
        <div className="flex justify-between items-center ">
          <h1 className="font-semibold font-unica">Users List</h1>
          <button className="flex justify-between py-2 px-4 gap-5 items-center bg-[#4ECCA3] rounded-2xl" onClick={handleAddUserList}>
            <img src="/artwork_component/Vector (1).svg" alt="" className="h-4" />
            <span className="font-unica text-white mt-1">Add</span>
          </button>
        </div>
        <div className="overflow-x-auto md:hidden ">
          {users.map((items) => {
            return (
              <>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-5">
                    <div>
                      <h1 className="font-semibold">Full Name</h1>
                      <p>{items.name}</p>
                      <h1 className="font-semibold mt-3">Role</h1>
                      <p>{items.role}</p>
                    </div>
                    <div>
                      <h1 className="font-semibold">Username</h1>
                      <p>{items.username}</p>
                      <h1 className="font-semibold mt-3">Password</h1>
                      <p>{"*".repeat(items.password.length)}</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div></div>
                    <div></div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <button onClick={() => openModal(items)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                    {/* Pencil Icon */}
                    <Link to={`/owner/Users/edit-user/${items.id}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-4 h-4 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                      </svg>
                    </Link>
                    {/* Trash Icon */}
                    <svg onClick={() => handleButtonDelete(items.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-4 h-4 cursor-pointer">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                </div>
                <hr className="pt-4 mt-8" />
              </>
            );
          })}
        </div>

        <div className="overflow-x-auto hidden md:block">
          <Table hoverable>
            <Table.Head className="">
              <Table.HeadCell>Full Name</Table.HeadCell>
              <Table.HeadCell>Username</Table.HeadCell>
              <Table.HeadCell>Role</Table.HeadCell>
              <Table.HeadCell>Password</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Action</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {users.map((items) => {
                return (
                  <Table.Row key={items.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{items.name}</Table.Cell>
                    <Table.Cell>{items.username}</Table.Cell>
                    <Table.Cell>{items.role}</Table.Cell>
                    <Table.Cell>{"*".repeat(items.password.length)}</Table.Cell>
                    <Table.Cell className="flex gap-3 items-center">
                      <button onClick={() => openModal(items)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                      {/* Pencil Icon */}
                      <Link to={`/owner/Users/edit-user/${items.id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-4 h-4 cursor-pointer">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      </Link>
                      {/* Trash Icon */}
                      <svg onClick={() => handleButtonDelete(items.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-4 h-4 cursor-pointer">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
            {/* Modal for viewing detailed users */}
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyle} contentLabel="View User">
              {selectedUsers && (
                <>
                  <div style={modalHeaderStyles}>
                    <h2 className="text-2xl font-semibold">Detail Users</h2>
                    <div style={closeButtonStyles} onClick={closeModal}>
                      <span>&times;</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-3 items-center">
                    <div className="font-unica">
                      <p className="font-bold">Full Name</p>
                      <p className="mb-2">{selectedUsers.name}</p>
                      <p className="font-bold">Username</p>
                      <p className="mb-2">{selectedUsers.username}</p>
                      <p className="font-bold">Role</p>
                      <p className="mb-2">{selectedUsers.role}</p>
                      <p className="font-bold">Password</p>
                      <p className="mb-2">{selectedUsers.password}</p>
                    </div>
                  </div>
                </>
              )}
            </Modal>
          </Table>
        </div>
      </Card>
    </>
  );
}
