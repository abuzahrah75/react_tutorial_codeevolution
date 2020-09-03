import React from 'react';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'

function App() {
  return (
    <div className="App">

      <ParentComponent />
      {/* <EventBind /> */}

      {/* <ClassClick />
    <Counter />
    <FunctionClick /> */}
     {/* <h1>Hello Abu Zahrah</h1> */}
     {/* <Greet name="Abu Zahrah" jantina="Lelaki" >

       <p>Saja nak tambah text</p>
     </Greet> */}
     {/* <Greet name="Aisyah Zahrah" jantina="Perempuan">
       <button>Action</button>
     </Greet>
     <Greet name="Ummu Zahrah" jantina="Perempuan"  /> */}

     {/* penggunaan class componets: */}
     {/* <Welcome name="Abu Zahrah" jantina="Lelaki" /> */}
     {/* <Welcome name="Aisyah Zahrah" jantina="Perempuan"/>
     <Welcome name="Ummu Zahrah" jantina="Perempuan"/>
      */}
     

     {/* <Hello /> */}

     <Message />
    </div>
  );
}

export default App;
