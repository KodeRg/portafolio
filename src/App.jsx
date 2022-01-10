import Topbar from "./componentes/topbar/Topbar"
import Intro from "./componentes/intro/Intro"
import Acerca from "./componentes/acerca de mi/Acerca"
import Proyectos from "./componentes/Proyectos/Proyectos"
import Contacto from "./componentes/contacto/Contacto"
import "./app.scss"
import { useState } from "react"
import Menu from "./componentes/menu/Menu"


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="secciones">
        <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Acerca />
        <Proyectos />
        <Contacto />
      </div>
    </div>
  );
}

export default App;
