import React from "react";
import { GiPreviousButton } from "react-icons/gi";
import { GiNextButton } from "react-icons/gi";

function PaginationButton({ currentPage, setCurrentPage }) {
  const preArray = Array.from(
    { length: 3 },
    (_, index) => currentPage - index - 1
  )
    .filter((value) => value > 0)
    .reverse();
  const nextArray = Array.from(
    { length: 3 },
    (_, index) => currentPage + index
  );
  const paginationArray = [...preArray, ...nextArray];
  const handleButton = (value) => {
    setCurrentPage(value);
  };
  const handlepre = () => {
    setCurrentPage(currentPage - 1);
  };
  const handlenext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="paginationButton">
      {currentPage != 1 ? (
        <div
          className="btn1"
          onClick={() => {
            handlepre();
          }}
        >
          <GiPreviousButton id="prebtn" />
        </div>
      ) : (
        ""
      )}
      {paginationArray.map((value, index) => {
        return (
          <button
            id={value == currentPage ? `isActive` : ``}
            key={index}
            onClick={() => {
              handleButton(value);
            }}
          >
            {value}
          </button>
        );
      })}
      <div
        className="btn1"
        onClick={() => {
          handlenext();
        }}
      >
        <GiNextButton id="nextbtn" />
      </div>
    </div>
  );
}

export default PaginationButton;
