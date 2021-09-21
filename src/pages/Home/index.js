import iam from "../../imagens/eu.png";
import "./Home.css";
import React, { useState } from "react";
import { useHistory } from "react-router";

function Home() {
  const [photoState, SetPhotoState] = useState("Home-logo");
  const history = useHistory();
  const handleClick = (event) => {
    SetPhotoState("Home-logo-2");
    setTimeout(() => SetPhotoState("Home-logo-3"), 1000);
    setTimeout(() => SetPhotoState("Home-logo-4"), 2000);
    setTimeout(() => SetPhotoState("Home-logo-5"), 3000);
    setTimeout(() => history.push("/project/pwa"), 4000);
  };

  return (
    <div className="Home" onClick={handleClick}>
      <section className="Home-section">
        <img src={iam} className={photoState} alt="Foto-Adriano" />
        <p>Seja bem vindo ao meu portfólio.</p>
        <p>Aqui exibirei alguns de meus projetos.</p>
        <p>Clique em qualquer parte da pagina para continuar.</p>
      </section>
    </div>
  );
}

export default Home;
