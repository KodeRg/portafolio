import "./menu.scss"

export default function Menu ({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Inicio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#acerca">Acerca de Mi</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#proyecto">Mis Proyectos</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contacto">Contacto</a>
                </li>
            </ul>
        </div>
    )
}
