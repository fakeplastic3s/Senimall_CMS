import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Card, Modal, Table } from "flowbite-react";
import { useNavigate, Link } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export default function ArtworkList({ sendDataAddButton }) {
  const [art, setArt] = useState([]);
  // const [id, setId] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Change this to the desired number of items per page
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [selectedArtwork, setSelectedArtwork] = useState(null); // Track the selected submission
  let number = 1;

  async function getArtworkList() {
    try {
      const data = await axios.get("http://localhost:3000/artwork_list");
      let filteredArt = data.data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

      // Sort berdasarkan option yang dipilih
      if (sortOption === "artist-asc") {
        filteredArt = filteredArt.sort((a, b) => a.Artist.localeCompare(b.Artist));
      } else if (sortOption === "artist-desc") {
        filteredArt = filteredArt.sort((a, b) => b.Artist.localeCompare(a.Artist));
      } else if (sortOption === "price-asc") {
        filteredArt = filteredArt.sort((a, b) => a.price - b.price);
      } else if (sortOption === "price-desc") {
        filteredArt = filteredArt.sort((a, b) => b.price - a.price);
      }

      setArt(filteredArt);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getArtworkList();
  }, [currentPage, searchTerm, sortOption]);

  const handleAddArtworkList = () => {
    navigate("/admin/artwork/artwork-add");
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
        deleteArtwork(id);
      }
    });
  };

  const deleteArtwork = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/artwork_list/${id}`);
      getArtworkList();
    } catch (error) {
      console.log(error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArt = art.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to open the modal and set the selected submission
  const openModal = (art) => {
    setSelectedArtwork(art);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedArtwork(null);
    setIsModalOpen(false);
  };

  return (
    <Card className="max-w ">
      <div className=" justify-between items-center md:flex ">
        <h1 className="font-semibold font-unica">Artwork List</h1>

        <div className="flex gap-3 flex-col md:flex-row">
          <input type="text" placeholder="Search by title" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="p-2 border border-gray-300 rounded" style={{ width: "200px" }} />

          {/* Dropdown for sorting */}
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="p-2 border border-gray-300 rounded" style={{ width: "120px" }}>
            <option value="">Sort by</option>
            <option value="artist-asc">Artist A-Z</option>
            <option value="artist-desc">Artist Z-A</option>
            <option value="price-asc">Low Price</option>
            <option value="price-desc">High Price</option>
          </select>

          <button title="Add Artwork" onClick={handleAddArtworkList} className="flex justify-between py-2 px-4 gap-5 items-center bg-[#4ECCA3] rounded-2xl w-24">
            <img src="/artwork_component/Vector (1).svg" alt="" className="h-4" />
            <span className="font-unica text-white mt-1">Add</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head className="">
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>Title</Table.HeadCell>
            <Table.HeadCell>Artist</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Action</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentArt.map((item) => (
              <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{number++}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.title}</Table.Cell>
                <Table.Cell>{item.Artist}</Table.Cell>
                <Table.Cell>
                  {parseInt(item.price, 10).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </Table.Cell>
                <Table.Cell>
                  <img src={item.image} alt="" width="150px" />
                </Table.Cell>
                <Table.Cell>
                  <div className="flex gap-3 items-center">
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
                    {/* Pencil Icon */}
                    <Link to={`/admin/artwork/edit-artworklist/${item.id}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                      </svg>
                    </Link>

                    {/* Trash Icon */}
                    <svg onClick={() => handleButtonDelete(item.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-4 h-4 cursor-pointer">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        <Pagination itemsPerPage={itemsPerPage} totalItems={art.length} paginate={paginate} />
        {/* Modal for viewing detailed artwork */}
        <Modal dismissible show={isModalOpen} onClose={closeModal}>
          {selectedArtwork && (
            <>
              <Modal.Header>Detail Artwork</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <div className="flex gap-3 mb-3 items-center">
                    <img
                      src={selectedArtwork.image} // Use the appropriate image URL or data
                      alt={selectedArtwork.title}
                      className="w-2/3 mb-4 rounded-lg me-4"
                    />
                    <div className="font-unica">
                      <p className="font-bold">Title</p>
                      <p className="mb-2">{selectedArtwork.title}</p>
                      <p className="font-bold">Artist</p>
                      <p className="mb-2">{selectedArtwork.Artist}</p>
                      <p className="font-bold">Price</p>
                      <p className="mb-2">
                        {parseInt(selectedArtwork.price, 10).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </p>
                      <p className="font-bold">Category</p>
                      <p className="mb-2">{selectedArtwork.category}</p>
                      <p className="font-bold">Material</p>
                      <p className="mb-2">{selectedArtwork.material}</p>
                      <p className="font-bold">Size</p>
                      <p className="mb-2">{selectedArtwork.size}</p>
                    </div>
                  </div>
                  <div className="font-unica w-full">
                    <p className="font-bold">Description</p>
                    <p className="text-gray-700 text-justify">{selectedArtwork.description}</p>
                  </div>
                </div>
              </Modal.Body>
            </>
          )}
        </Modal>
      </div>
    </Card>
  );
}

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex gap-3 p-5 justify-end items-center">
        Page
        {pageNumbers.map((number) => (
          <li key={number} className="page-item hover:bg-gray-200 p-1 rounded-md">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
