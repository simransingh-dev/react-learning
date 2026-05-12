// function Component() {
//   return (
//     <h1> Hii I am Simran !  i am a Student.</h1>

//   );
// }

// export default Component;
// import React from "react";
// class Car extends React.Component {
//   render() {
//     return <h1> Hii I am Simran !  i am a Student.</h1>;
//   }
// }

// export default Car;

// function Car(props) {
//   return  ( 
//     <div>
//     <h2> I am a {props.brand} Car</h2>
//     <h3> I am in {props.color} color</h3>
//     <h4> My brand is {props.brand} </h4>
//     <h5> I bought the Car in the {props.year}</h5>
//     </div>
//   );
// }

// export default Car;

// import Navbar from "./components/navbar";
// import Footer from "./components/footer";
// import Sidebar from "./components/sidebar";
// import Header from "./components/header";

// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Footer/>
//       <Sidebar/>
//       <Header/>
//     </div>
//   );
// }

// export default App; 

// function Football() {
//   const shoot = () => {
//     alert("it worked");
//   }
//   return (
   
//     <button onClick={shoot}>take the shot</button>

//   );
// }
// export default Football;

// function App() {
//   function Change(){
//     console.log("typing");
    

//   } return (
//     <div>
//       <input type="text" onChange={Change}/>
//     </div>
//   )


// }

// // export default App;

// function App(){
//   let isLoggedIn = true;
//   if (isLoggedIn){
//     return<h1> welcome user</h1>
//   }
//   else{
//     return <h1>Please login</h1>
//   }
// }
// export default App;


// function Component1() {
//   return<h1> I am Simran</h1>
// }


// function Component2() {
//   return<h1>I am a Student</h1>
// }

// function Component3(props) {
//   const name=props.name;
//   if(name){
//     return<Component1 />
//   }
//   else{
//     return <Component2/>
//   }}
//   function App(){
//     return(
//       <div>
//         <Component3 name={false}></Component3>
//       </div>
//     )
  
// }
// export default App;

// function App(){
//   let isLoggedIn = false;
//   return(
//     <div>
//       {
//         isLoggedIn
//         ?<h1>welcome Simran</h1>
//         :<h2>please login simran </h2>
//       }
//     </div>
//   )
// }
// export default App;


// function App(){
//   let isLoggedIn=false;
//   return(
//     <div>
//       {isLoggedIn && <h1>hii everyone !</h1>}
//     </div>
//   )
// }

// export default App;

// function App(){
//   const fruits=["mango","Litchi","Orange"];
//   return (
//     <div>
//       {
//         fruits.map((fruit,index) => (
//           <h1>key={index}>{fruit}</h1>
//         ))
      
//       }
//     </div>
//   )
// }
// export default App;

// function App(){
//   const cars=["BMW","Toyota","Hyundai"];
//   return(
//     <>
//     <h1>My Car</h1>
//     <ul>
//       {
//         cars.map((car,index) =>
//         <li>key={index}> I am a {car}</li>) 
//       }
//     </ul>
//     </>
//   )
// }
// export default App;

// function App(){
// return(
//   <form>
//     <label>
//       Enter your name :
     
//       <input type="text">
//       </input> <br />
//       Password :
//       <input type="password"></input>
//     </label>
//   </form>
// )
// }
// export default App;


// login /logout button

// function App(){
//   const isLoggedIn =true;

//   return(
//     <div>
//       isLoggedIn ? <button> Logout

//       </button> : <button>Login</button>
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";

// function App(){
//     const [color,setColor] =useState("Red");
//     const [name,setName] =useState("Simran");
//     const [myclass,setmyClass] =useState("12th");
//     const [year,setYear] =useState(2026);
//     return(
//         <>
//         <h1> My favourite color is {color}</h1>
//         <p> This is me{name} {myclass} {year}</p>
import { useState } from "react";

export default function RandomQuoteGenerator() {
  const quotes = [
    "Keep pushing forward 🚀",
    "Consistency beats motivation 💯",
    "Code. Learn. Repeat 💻",
    "Small progress is still progress 🌱",
    "Dream big and build bigger ⚛️",
  ];

  const [quote, setQuote] = useState("");

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={styles.container}>
      <h1>Random Quote Generator ✨</h1>

      <p style={styles.quote}>{quote || "Click below to generate a quote"}</p>

      <button onClick={generateQuote} style={styles.button}>
        Generate Quote
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  },

  quote: {
    fontSize: "22px",
    margin: "30px 0",
    color: "#333",
  },

  button: {
    padding: "12px 24px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
};
