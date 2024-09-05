import "./App.css";
import Nav from "./components/Nav";
import Intro1 from "./components/intro1";

// function Header() {
//   return <h1>Hello World</h1>;
// }

//     Props.childrens
// function Apples(props) {
//   return (
//     <div className="promo-section">
//       <div>
//         <h2>These apples are: {props.color}</h2>
//       </div>
//       <div>
//         <h3>There are {props.number} apples.</h3>
//       </div>
//     </div>
//   );
// }

// function Pears(props) {
//   return <h2>I don't like pears, but my friend, {props.friend}, does</h2>;
// }

// function Bag(props) {
//   const bag = {
//     padding: "20px",
//     border: "1px solid gray",
//     background: "#fff",
//     margin: "20px 0",
//   };
//   return <div style={bag}>childrens: {props.children}</div>;
// }

function App() {
  return (
    <div class="heading">
      Started working on react
      <Nav />
      <Intro1 name="Shazil Khan" />
      <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
      </Bag>
    </div>
  );
}

export default App;
