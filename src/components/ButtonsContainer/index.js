import { useHistory } from "react-router";
import "./ButtonsContainer.css";

function ButtonsContainer(props) {
  const { url, next_project } = props;
  const history = useHistory();

  const openUrl = (url) => {
    window.open(url);
  };

  const pushNext = (next_project) => {
    console.log(next_project)
    history.push(next_project);
  };

  return (
    <div className="buttons-container">
      <button onClick={() => openUrl(url)} type="button" className="buttons">
        Leve-me ao Site!
      </button>
      <button onClick={() => pushNext(next_project)} type="button" className="buttons">
        Mostre-me mais!
      </button>
    </div>
  );
}

export default ButtonsContainer;
