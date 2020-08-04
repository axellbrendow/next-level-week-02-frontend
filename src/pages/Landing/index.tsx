import React from "react";
import { Link } from "react-router-dom";

import logoImg from "assets/images/logo.svg";
import landingImg from "assets/images/landing.svg";
import studyIcon from "assets/images/icons/study.svg";
import giveClassesIcon from "assets/images/icons/give-classes.svg";
import purpleHeartIcon from "assets/images/icons/purple-heart.svg";

import * as S from "./styles";

const Landing = () => {
  return (
    <S.Container id="page-landing">
      <S.Content id="page-landing-content" className="container">
        <S.LogoContainer className="logo-container">
          <img src={logoImg} alt="Proffy logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </S.LogoContainer>

        <img
          src={landingImg}
          alt="Proffy landing page"
          className="hero-image"
        />

        <S.ButtonsContainer className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </S.ButtonsContainer>

        <span className="total-connections">
          Total de 200 conexões já realizadas{" "}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </S.Content>
    </S.Container>
  );
};

export default Landing;
