import { useCallback, useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);
  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "@#$%^&*()-_=+|[]{};:/?.>";
    if (charAllowed) str += "0123456789";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPass = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGen();
  }, [length, numberAllowed, charAllowed, passwordGen]);

  return (
    <>
      <h1 className=" text-white px-3 py-4 rounded-lg text-4xl text-center ">
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto  my-8 rounded-lg bg-slate-600 flex flex-wrap overflow-hidden text-orange-300">
        <div className="w-full max-w-md mx-auto px-3 py-3 my-2 rounded-lg flex justify-center">
          <input
            type="text"
            placeholder="Password"
            className="p-2 rounded-lg w-full outline-none"
            readOnly
            ref={passRef}
            value={password}
          />
          <button
            className="bg-orange-400 rounded-lg overflow-hidden min-w-max p-2 text-black"
            onClick={copyPass}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1 p-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1 p-1">
            <input
              type="checkbox"
              value={false}
              className="cursor-pointer defaultChecked={charAllowed}"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Number</label>
          </div>

          <div className="flex items-center gap-x-1 p-1">
            <input
              type="checkbox"
              value={false}
              className="cursor-pointer"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
