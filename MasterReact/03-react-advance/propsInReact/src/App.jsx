import { useState } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1726082132343-e4dc7400ee44?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Challenger",
      artist: "Shazil",
      added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1725588379392-7a56d6eff9ab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "One Day",
      artist: "Abdullah",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1725576415790-a5b4009a7952?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Shaheen",
      artist: "Iqbal",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1724002383554-990c369254f6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Nights",
      artist: "Avcnii",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) {
          return { ...item, added: !item.added };
        }
        return item;
      });
    });
  };

  return (
    <div className="w-full h-screen bg-zinc-300 ">
      <Navbar data={songData} />
      <div className="px-20 flex gap-10 mt-10 flex-wrap">
        {songData.map((obj, index) => {
          return (
            <Card
              data={obj}
              key={index}
              handleClick={handleClick}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

// const data = [
//   {
//     name: "John",
//     profession: "Painter",
//     image:
//       "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     friends: false,
//   },
//   {
//     name: "Shazil",
//     profession: "Software developer",
//     image:
//       "https://images.unsplash.com/photo-1480859786001-3f3bfdf20f2c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     friends: false,
//   },
//   {
//     name: "Abdullah",
//     profession: "Model",
//     image:
//       "https://plus.unsplash.com/premium_photo-1672239496412-ab605befa53f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     friends: false,
//   },
//   {
//     name: "Ali",
//     profession: "Scholor",
//     image:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     friends: false,
//   },
// ];

// const [realData, setRealData] = useState(data);

// const handleClick = (cardIndex) => {
//   setRealData((prev) => {
//     return prev.map((item, index) => {
//       if (index === cardIndex) {
//         return { ...item, friends: !item.friends };
//       }
//       return item;
//     });
//   });
// };
// return (
//   <>
//     <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
//       {realData.map((item, index) => (
//         <Card
//           key={index}
//           index={index}
//           handleClick={handleClick}
//           values={item}
//         />
//       ))}
//     </div>
//   </>
// );
