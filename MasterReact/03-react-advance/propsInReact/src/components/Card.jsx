import React from "react";

function Card({ values, index, handleClick }) {
  const { name, image, profession, friends } = values;

  return (
    <>
      <div className="w-60  bg-white rounded-md overflow-hidden pb-3">
        <div className="w-full h-40 bg-sky-500">
          <img
            className="w-full h-full object-cover object-[center_top]"
            src={image}
            alt="img"
          />
        </div>
        <div className="px-3">
          <h1 className="font-semibold text-lg ">{name}</h1>
          <h5 className="text-xs">{profession}</h5>
        </div>
        <button
          onClick={() => handleClick(index)}
          className={`px-3 py-1 ${
            friends ? "bg-green-500" : "bg-blue-500"
          } rounded-md font-semibold text-white text-xs mt-2 mx-3`}
        >
          {friends ? "Friends" : "Add Friend"}
        </button>
      </div>
    </>
  );
}

export default Card;

//.

//

//.

//.

//.

//.

//.

//.

//.

//.

//.....................................

// function Card({ values, index, handleClick }) {
//     const { name, profession, image, friends } = values;
//     return (
//       <div className="w-52 bg-white rounded-md overflow-hidden ">
//         <div className="w-full h-40 bg-sky-200">
//           <img
//             className="w-full h-full object-cover object-[center_top]"
//             src={image}
//             alt="img"
//           />
//         </div>
//         <div className="w-full p-3">
//           <h3 className="text-xl font-semibold">{name}</h3>
//           <h5 className="text-xs">{profession}</h5>
//           <button
//             onClick={() => handleClick(index)}
//             className={`mt-3 px-3 py-1 text-xs text-white ${
//               friends ? "bg-green-600" : "bg-blue-500"
//             } font-semibold rounded-md`}
//           >
//             {friends ? "Friends" : "Add Friend"}
//           </button>
//         </div>
//       </div>
//     );
//   }
