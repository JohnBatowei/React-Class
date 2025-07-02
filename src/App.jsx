import FirstComp from "./components/FirstComp.jsx"
import Navbar  from "./components/Navbar.jsx"
import './components/styles/home.scss'

function App(){

const EmbeddedStyles = {
color: 'dodgerblue',
textDecoration: 'underline'
}

  return (
    <div className="App">
      <Navbar />
      <h1>Adding styles</h1>
      <h1 style={{color:'red',fontStyle: 'italic'}} >Inline styles</h1>

      <h1 style={EmbeddedStyles}>Embedded styles</h1>
      <FirstComp />
    </div>
  )
}

export default App