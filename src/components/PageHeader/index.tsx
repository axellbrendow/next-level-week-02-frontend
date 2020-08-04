import React from "react";
import { Link } from "react-router-dom";

import logoImg from "assets/images/logo.svg";
import backIcon from "assets/images/icons/back.svg";

import * as S from "./styles";

interface Props {
  title: string;
}

const PageHeader: React.FC<Props> = ({ title, children }) => {
  return (
    <S.PageHeader className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Logo proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>
    </S.PageHeader>
  );
};

export default PageHeader;
