import { useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  //React hook form

  const { register, handleSubmit } = useForm();

  return (
    <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
      <input
        {...register("name")}
        type="text"
        placeholder="Enter your username"
      />
      <input
        {...register("email")}
        type="email"
        placeholder="Enter your email"
      />
      <input type="submit" />
    </form>
  );
}

export default App;

//controlled components --> to change the data in real time using use state

//make use of useRef

// const name = useRef(null);
// const email = useRef(null);

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(name.current.value, email.current.value);
// };

//controlled components

// const [val, setVal] = useState({ name: "", email: "" });

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log(val);
// };

// return (
//   <form action="" onSubmit={handleSubmit}>
//     <input
//       onChange={(event) => setVal({ ...val, name: event.target.value })}
//       type="text"
//       placeholder="Enter your username"
//     />
//     <input
//       onChange={(event) => setVal({ ...val, email: event.target.value })}
//       type="email"
//       placeholder="Enter your email"
//     />
//     <input type="submit" />
//   </form>
// );
