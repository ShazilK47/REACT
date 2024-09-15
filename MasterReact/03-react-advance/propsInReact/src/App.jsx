import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import "./App.css";

function App() {
  const row = [
    {
      name: "John",
      profession: "Painter",
      image:
        "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Shazil",
      profession: "Software developer",
      image:
        "https://images.unsplash.com/photo-1480859786001-3f3bfdf20f2c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Abdullah",
      profession: "Model",
      image:
        "https://plus.unsplash.com/premium_photo-1672239496412-ab605befa53f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Ali",
      profession: "Scholor",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];

  const [data, setData] = useState(row);

  const handleClick = (cardIndex) => {
    setData((prev) => {
      return prev.map((item, index) =>
        index === cardIndex ? { ...item, friends: !item.friends } : item
      );
    });
  };

  //   const handleClick = (cardIndex) => {
  //     setRealData((prev) => {
  //       return prev.map((item, index) => {
  //         if (index === cardIndex) {
  //           return { ...item, friends: !item.friends };
  //         }
  //         return item;
  //       });
  //     });
  //   };

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-3">
      {data.map((item, index) => (
        <Card
          key={index}
          values={item}
          index={index}
          handleClick={handleClick}
        />
      ))}
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
