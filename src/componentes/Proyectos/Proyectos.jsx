import { useEffect, useState } from "react";
import "./Proyectos.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Proyectos() {
  const [selected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="proyecto" id="proyecto">
      <h1>Proyectos</h1>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <a rel="noopener noreferrer" href={d.url} target={"_blank"}>Ir al repositorio</a>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}