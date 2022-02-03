import "./Acerca.scss"
import pdf from './LucasCabral-cv.pdf'

export default function Acerca() {
    return (
        <div className='acerca' id="acerca">
            <div className="derecha">
                <div className="textoAcerca">
                <h1>Acerca de Mi</h1>
                <p> Hola soy Lucas Cabral, Front End Developer. 
                    Me intereso en el desarrollo personal y estoy buscando mi primer empleo en el mundo de la programacion, 
                    aspiro a poder trabajar de lo que tanto amo hacer💖.
                    Me gusta compartir con personas y tengo muchas ganas de unirme a un grupo de trabajo para poder aportar valor, y seguir aprendiendo.
                    Soy ansioso y entusiasta. Asi que, probablemente, en este momento esté esperando tu propuesta!
                </p>
                <a className="btn-cv" href={pdf} target="_blank" rel="noopener noreferrer">Mirá mi CV!</a>
                </div>
            </div>
        </div>
    )
}
