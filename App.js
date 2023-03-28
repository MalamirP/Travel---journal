// import Card from "./Components/Card";
// import { useState } from "react";

// function ChildOne(props) {
//   const baseColor = 'skyblue';
//   const styling = {
//     border: '1px solid black',
//     backgroundColor: props.color || baseColor,
//     width: '380px',
//     margin: '10px',
//     cursor: 'pointer',
//     padding: '10px'
//   }

//   function onClickHandler() {
//     props.setColor(baseColor)
//   }

//   console.log('ChildOne renders now!')
//   return (
//     <div onClick={onClickHandler} style={styling}>
//       <h1>ChildOne</h1>
//     </div>
//   )
// }

// function ChildTwo(props) {
//   const baseColor = 'pink';
//   const styling = {
//     border: '1px solid black',
//     backgroundColor: props.color || baseColor,
//     width: '380px',
//     margin: '10px',
//     cursor: 'pointer',
//     padding: '10px'
//   }

//   function onClickHandler() {
//     props.setColor(baseColor);
//   }

//   console.log('ChildTwo renders now!')

//   return (
//     <div onClick={onClickHandler} style={styling}>
//       <h1 >Child2</h1>
//     </div>
//   )
// }


// function Parent() {

//   const [color, setColor] = useState('');
//   console.log('The Parent renders now!')

//   return (
//     <>
//       <ChildOne color={color} setColor={setColor} />
//       <ChildTwo color={color} setColor={setColor} />
//     </>
//   )
// }

// function App() {
//   return (

//     <Parent />
//   )
// }

// export default App;
