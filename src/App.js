import './App.css';
import { useState } from 'react';
import Counter from "./components/Counter";
function App() {
  const [countList, setCountList] = useState([<Counter key={0} />]);

  const handleAddCount = () => {
    setCountList([...countList, <Counter key={countList.length} />]);
    console.log(countList);
  };
  

  return (
    <>
      <div className="p-5 mx-auto max-w-4xl md:grid grid-cols-2 ">
        {countList}
        <button
          className="mt-4  h-64 mx-auto block"
          onClick={handleAddCount}
        >
          <svg
            className="h-20 w-20 text-gray-400"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="12" r="9" />{" "}
            <line x1="9" y1="12" x2="15" y2="12" />{" "}
            <line x1="12" y1="9" x2="12" y2="15" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
