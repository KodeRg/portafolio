import "./Contacto.scss"
import emailjs from '@emailjs/browser';

export default function Contacto() {

    const sendEmail = (e) => {
         e.preventDefault();
  
      emailjs.sendForm('service_4rn3q7w', 'template_9w4h6x4', e.target, 'user_RvujaV3GfjffB8E2bppYi')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    return (
        <div className='contacto' id="contacto">
            <div className="izquierda">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="derecha">
                <h2>Contacto</h2>
                <form  onSubmit={sendEmail}>
                    <label>Nombre</label>
                    <input type="text" name="nombre" placeholder="Ingrese su Nombre"/>
                    <label>Asunto</label>
                    <input type="text" name="asunto" placeholder="Ingrese su Asunto"/>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Ingrese su Email"/>
                    <label>Mensaje</label>
                    <textarea name="mensaje" />
                    <button type="submit" value="Enviar">Enviar</button>
                </form>
            </div>
        </div>
    )
}
