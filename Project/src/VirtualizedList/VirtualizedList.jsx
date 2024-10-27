import React from "react";
import List from "./List";

function VirtualizedList() {
    const arrayList=Array.from({length:10000},(_,ind)=>ind+1)
  return (
    <>
      <h1>Virtualized List</h1>
      <List height={400} width={300} arrayList={arrayList} itemheight={35}/>
    </>
  );
}

export default VirtualizedList;
