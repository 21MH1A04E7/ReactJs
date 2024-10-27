import { useState } from "react";
import Dashboard from "../components/Dashboard";
import { DashboardContext } from "../context/context";

export interface User {
  id: number;
  name: string;
  age: number;
}

function UseContextHook() {
  const [user] = useState<User>({
    id: 1,
    name: "John Doe",
    age: 30,
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}

export default UseContextHook;
