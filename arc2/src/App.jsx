import { useCallback, useRef, useState, useEffect } from 'react';

function App() {
  const [color, setColor] = useState("pink");
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, number, char]);

  useEffect(() => {
    passwordgenerator();
  }, [length, number, char, passwordgenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2 mb-4'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={number}
              id="numberInput"
              onChange={() => setNumber(prev => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={char}
              id="characterInput"
              onChange={() => setChar(prev => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>

      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-3 rounded-3xl'>
            <button
              onClick={() => setColor("red")}
              className="px-4 py-2 bg-red-500 text-white rounded-full"
            >
              RED
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="px-4 py-2 bg-yellow-500 text-white rounded-full"
            >
              YELLOW
            </button>
            <button
              onClick={() => setColor("black")}
              className="px-4 py-2 bg-black text-white rounded-full"
            >
              BLACK
            </button>
            <button
              onClick={() => setColor("green")}
              className="px-4 py-2 bg-green-500 text-white rounded-full"
            >
              GREEN
            </button>
            <button
              onClick={() => setColor("purple")}
              className="px-4 py-2 bg-purple-500 text-white rounded-full"
            >
              PURPLE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
