import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState([
    { name: "shazil Khan", age: 21 },
    { name: "Ali Khan", age: 25 },
    { name: "Abdullah Khan", age: 16 },
  ]);

  return (
    <div className="p-12">
      {val.map((item) => (
        <div>
          <h1>Name: {item.name}</h1>
          <h1>Age: {item.age}</h1>
        </div>
      ))}

      <button
        onClick={() =>
          setVal(() =>
            val.map((elem) =>
              elem.name === "Ali Khan" ? { name: "Ali Khan", age: 28 } : elem
            )
          )
        }
        className="px-3 py-1 rounded-full bg-blue-500 text-white"
      >
        Click
      </button>
    </div>
  );
}

export default App;

// const [val, setVal] = useState({ name: "Shazil Khan", isBanned: false });

{
  /* <>
      <div className="m-4  text-2xl px-5">
        Name : {val.name} <br />
        isBanned : {val.isBanned.toString().toUpperCase()}
      </div>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-6 py-1 ${
          val.isBanned ? "bg-sky-400" : "bg-red-500"
        } mx-8  rounded-full text-sm font-semibold text-white`}
      >
        {val.isBanned ? "UNBAN" : "BAN"}
      </button>
    </> */
}

//remove the value on click

// const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

//   const handleClick = () => {
//     setVal(() => val.filter((item, index) => index !== val.length - 1));
//   };

{
  /* <div className="p-12">
{val.map((item) => (
  <h1>{item}</h1>
))}
<button
  onClick={handleClick}
  className="px-3 py-1 rounded-full bg-blue-500 text-white"
>
  Remove
</button>
</div> */
}
