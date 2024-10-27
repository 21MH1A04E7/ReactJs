import React from "react";

function Image(item) {
  console.log("item", item.data);
  return (
    <div className="flex gap-1 p-1 px-12">
      {item.data.map((items) => {
        return (
          <div className="">
            <img key={items.download_url} src={items.download_url}  className="w-60 h-60" />
          </div>
        );
      })}
    </div>
  );
}

export default Image;
