import React from "react";

import whatsappIcon from "assets/images/icons/whatsapp.svg";

import * as S from "./styles";

const TeacherItem = () => {
  return (
    <S.TeacherItem className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/11397715?s=460&u=150bee8d1eb7b893a1423d58383af4d2b55a1812&v=4"
          alt="Axell Brendow"
        />
        <div>
          <strong>Axell Brendow</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratórios e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </S.TeacherItem>
  );
};

export default TeacherItem;
