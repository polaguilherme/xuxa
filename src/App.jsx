import { useState } from "react";
import "./App.css";
// import Carrossel from "./Components/Carrossel";
import { BsArrowLeftShort } from "react-icons/bs";
import { BiFootball } from "react-icons/bi";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex">
        <div
          className={`bg-dark-purple h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } duration-300
        relative`}
        >
          <BsArrowLeftShort
            className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border
          border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex">
            <BiFootball className="text-white text-4xl rounded cursor-pointer block float-left mr-2" />
            <h1
              className={`text-white origin-left font-medium text-2xl${
                !open && " scale-0"
              }`}
            >
              XuxaFut
            </h1>
          </div>
        </div>
        <div className="p-7">
          <h1 className="text-2xl font-semibold">Home Page</h1>
        </div>
      </div>
    </>
  );
}

export default App;
