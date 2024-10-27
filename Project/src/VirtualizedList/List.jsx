import React, { useState } from "react";

function List({ height, width, arrayList, itemheight }) {
  const [showItem, setShowItem] = useState([
    0,
    Math.floor(height / itemheight)+1,
  ]);
  const listItem = arrayList.slice(showItem[0], showItem[1]);
  // console.log(listItem)
  // console.log(showItem)
  const handleScrol = (e) => {
    const scroll = Math.floor(e.target.scrollTop);
    const startIndex = Math.floor(scroll / itemheight);
    const lastIndex = Math.floor(height / itemheight) + startIndex;
    setShowItem([startIndex, Math.floor(height / itemheight) + startIndex]);
  };
  return (
    <div style={{ height:380, overflow: "auto" }} onScroll={handleScrol}>
      <div style={{ height:arrayList.length*itemheight,width,padding:'2px' ,background:'red', position:'relative'}} >
        {listItem.map((value, ind) => {
          return (
            <div
              key={ind}
              style={{
                height: itemheight + "px",
                width: width + "px",
                backgroundColor: "red",
                marginBottom: "1px",
                border: "3px solid white",
                display: "flex",
                justifyContent: "center",
                position:'absolute',
                top:(showItem[0]+ind) * itemheight + "px",
                left: "0px",
                color: "white",
                fontSize: "18px",
                textShadow: "2px 2px 4px black",
                fontWeight: "bold",
              }}
            >
              item {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
