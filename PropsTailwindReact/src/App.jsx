import Card from "./components/Card";
import "./App.css";

function App() {
  let ob={
    userName:"hariom"
  }
  let arr=[1,2,3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-2 rounded-xl mb-2">Tailwind Css</h1>
      <Card userName="hariom" buttonText="Visited profile"/>
      <Card userName="suresh"/>
      <Card userName="sujit" buttonText="clicked here"/>
    </>
  );
}

export default App;

//by props we can pass the value only in the variable form
//we can pass object ,array in the form of variable , example =>(someObj={ob} newarray={arr})
//props is a object 
