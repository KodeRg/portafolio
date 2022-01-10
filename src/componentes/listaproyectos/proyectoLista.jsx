import "./proyectoLista.scss";

export default function proyectoLista({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "proyectoLista active" : "proyectoLista"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}