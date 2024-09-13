// import React from "react";

// function Card() {
//   const details = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1512446816042-444d641267d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Amazon",
//       description: "this is just amazing",
//       instock: true,
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1681313824743-7b5a2a635938?q=80&w=1616&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "iPhone",
//       description: "it could be a great i phone",
//       instock: false,
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Watch",
//       description: "let's go with the watch. a long life timing",
//       instock: false,
//     },
//   ];

//   return (
//     <>

//     </>
//   );
// }

// export default Card;

import React from "react";

function Card() {
  const data = [
    {
      name: "Mahiye Ve",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum ducimus, dicta asperiores, eius mollitia tenetur eum rem sequi veniam quidem. Reiciendis quidem deleniti qui, aliquam mollitia a odit magnam?",
    },
    {
      name: "Junoon",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum ducimus, dicta asperiores, eius mollitia tenetur eum rem sequi veniam quidem. Reiciendis quidem deleniti qui, aliquam mollitia a odit magnam?",
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center">
      {data.map((item, index) => (
        <div className="w-96 px-3 py-2 bg-zinc-100 rounded-md">
          <h3 className="font-semibold text-xl">{item.name}</h3>
          <p className="text-xs mt-2">{item.description}</p>
          <button
            onClick={() => {
              alert("Hey");
            }}
            className="px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3"
          >
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
