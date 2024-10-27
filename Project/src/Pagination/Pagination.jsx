import React from "react";
import { useState, useEffect } from "react";
import Image from "./Image.jsx";
import PaginationButton from "./PaginationButton.jsx";
import './Pagination.css'

function Pagination() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  console.log(data);
  const fetchData = async () => {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${currentPage}&limit=5`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, [currentPage]);
  return (
    <>
      <div className="box">
      <Image data={data} />
      <PaginationButton currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
}

export default Pagination;
