import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Card, Table } from "flowbite-react";
import { useNavigate, Link } from "react-router-dom";

export default function ArtworkList({ sendDataAddButton }) {
  const [art, setArt] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("title");
  const navigate = useNavigate();

  async function getArtworkList() {
    try {
      const data = await axios.get("http://localhost:3000/artwork_list");
      setArt(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getArtworkList();
  }, []);

  const handleAddArtworkList = () => {
    // setMode('add');
    navigate("/admin/artwork/artwork-add");
  };

  const handleDeleteArtwork = async (id) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this Artwork?");

    if (shouldDelete) {
      try {
        await axios.delete(`http://localhost:3000/artwork_list/${id}`);
        getArtworkList();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSort = (columnName) => {
    setSortBy(columnName);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const sortedArt = [...art].sort((a, b) => {
    const aValue = a[sortBy].toLowerCase();
    const bValue = b[sortBy].toLowerCase();

    if (sortOrder === "asc") {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  return (
    <Card className="max-w ">
      <div className="flex justify-between items-center ">
        <h1 className="font-semibold font-unica">Artwork List</h1>
        <button
          title="Add Artwork"
          onClick={handleAddArtworkList}
          className="flex justify-between py-2 px-4 gap-5 items-center bg-[#4ECCA3] rounded-2xl"
        >
          <img src="/artwork_component/Vector (1).svg" alt="" className="h-4" />
          <span className="font-unica text-white mt-1">Add</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head className="">
            <Table.HeadCell onClick={() => handleSort("title")}>
              Title {sortBy === "title" && <SortIndicator order={sortOrder} />}
            </Table.HeadCell>
            <Table.HeadCell onClick={() => handleSort("Artist")}>
              Artist {sortBy === "Artist" && <SortIndicator order={sortOrder} />}
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Action</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {sortedArt.map((item) => (
              <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.title}</Table.Cell>
                <Table.Cell>{item.Artist}</Table.Cell>
                <Table.Cell className="flex gap-3 items-center">
                  {/* Pencil Icon */}

                  <Link to={`/admin/artwork/edit-artworklist/${item.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  </Link>

                  {/* Trash Icon */}
                  <svg onClick={() => handleDeleteArtwork(item.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-4 h-4 cursor-pointer">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>

                  {/* Eye Icon */}
                  <Link to={`/admin/artwork/artwork-detail/${item.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Card>
  );
}

const SortIndicator = ({ order }) => {
  return order === "asc" ? <span>&uarr;</span> : <span>&darr;</span>;
};