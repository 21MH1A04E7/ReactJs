import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdEdit, MdSave } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
function List({ item, handleDelete, handleCompleted ,handleEdit}) {
  const [text1,setText]=useState(item.text)
  const [editMode,setEditMode]=useState(false);
  useEffect(()=>{
    handleEdit(item.id,text1)
  },[text1])
  return (
    <div className="flex max-w-lg justify-between h-14 bg-red-100 border-2 rounded-md mt-2 hover:shadow-lg">
      <div className="flex">
        <input value={text1} className={`${item.isCompleted?"line-through":""} bg-red-100 border-none outline-none text-xl italic`}  readOnly={editMode} onChange={(e)=>setText(e.target.value)}/>
      </div>
      <div className="flex justify-between w-[120px] items-center gap-2">
        <FaCheck
          className="text-2xl text-blue-500"
          onClick={() => {
            handleCompleted(item.id);
          }}
        />
        <div onClick={()=>{setEditMode((pre)=>!pre)}}>
          {editMode?<MdSave className="text-2xl text-green-600"/>:<MdEdit className="text-2xl text-green-600"/>}
        </div>
        <MdDeleteForever
          className="text-2xl text-red-600"
          onClick={() => {
            handleDelete(item.id);
          }}
        />
      </div>
    </div>
  );
}

export default List;
