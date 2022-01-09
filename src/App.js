import React from 'react';
import Header from './components/Header'
import HTMLgen from './components/HTMLgen'
import PASSgen from './components/PASSgen'
import Translator from './components/Translator'

// import './public/index.css'

// this function sets up the webpage with the specific content
function App() {
  const name = 'Portfolio'
  return (
    // this is the content for a specifc project; it has a brief video to describe and showcase the specific project and a quick blurb on the side, defining it's purpose
    <header>
      <h1 classname="title">Coding Portfolio</h1>
      {/* this is a randomized password generator I created for a coding assignment*/}
      {/* this loads the data from the specifc file into my webpage */}
      <PASSgen/>
    {/* this is an HTML generator made for a coding assignment that inputs employee data and adds it to a webpage */}
    {/* this loads the data from the specifc file into my webpage */}
    <HTMLgen/> 
    {/* this is a personal project meant to convert English to the fictional Hylian language from Legend of Zelda */}
    <Translator/>
    </header>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>jello</h1>
//   }
// }

const Headers = (Header) => {
  return (
    <header>
      <h1>{Header.title}</h1>
    </header>
  )
}
Headers.defaultProps = {
  title: 'React Practice'
}

export default App;
