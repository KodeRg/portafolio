import "./Topbar.scss"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="izquierda">
                    <a href="#intro" className="nombre">Lucas Cabral</a>      
                </div>
                <div className="derecha">
                    <div className="hamburguesa" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="linea1"></span>
                        <span className="linea2"></span>
                        <span className="linea3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
