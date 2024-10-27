import React, { useCallback,useState } from "react";
import Search from "../components/Search";

export type user = string;
const allUsers: user[] = [
  "hariom",
  "sujit",
  "srivalli",
  "raju",
  "suraj",
  "boy",
];

const UseCallbackHook: React.FC = () => {
  const [users, setUsers] = useState(allUsers);

  const shuffle = (allUsers: user[]) => {
    console.log("shffle");
    const shuffleUser: user[] = [...allUsers].reverse();
    return shuffleUser;
  };

  //function
  //function is diffent for every render components
  //   const handleSerach = (text: string) => {
  //     const filteredUsers = allUsers.filter((user) => user.includes(text));
  //     setUsers(filteredUsers);
  //   };

  const handleSerach = useCallback((text: string) => {//this funtion is identical 
    console.log('first users ',users[0])
    const filteredUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  },[users])
  // useCallback is used for memoization, it will only recompute the function if one of the dependencies changes
  //it will freez everything which is present inside the funtion
  //useCallback will make sure that the function is not created every time the component renders

  return (
    <div className="">
      <div>
        <button
          className="bg-blue-400 p-2 px-4 rounded-lg active:opacity-80"
          onClick={() => setUsers(shuffle(users))}
        >
          Shuffle
        </button>
        <Search onChange={handleSerach} />
      </div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseCallbackHook;
