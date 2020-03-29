import React from "react";
import Titulo from "./Titulo";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";
import ImageButton from "./ImageButton";

export default function App(props) {
  return (
    <div>
      <Titulo titulo={"Dados Pessoais"} />
      <BigCard
        nome={"Gabriela Salvo"}
        apresentacao={"Oi, me chamo Gabriela, sou aluna FullStack da Future4!"}
      />
      <SmallCard contato={"gabriela.future4@future4"} />
      <SmallCard contato={"Rio de Janeiro"} />
      <ImageButton button={"Ver Mais"} />
      <Titulo titulo={"Experiencias Profissionais"} />
      <BigCard
        nome="Future4"
        apresentacao={"Professora na escola de tecnologia Future4"}
      />
      <Titulo titulo={"Redes Sociais"} />
      <ImageButton button={"Linkedin"} />
      <ImageButton button={"Instagram"} />
    </div>
  );
}
