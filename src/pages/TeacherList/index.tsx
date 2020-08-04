import React from "react";

import PageHeader from "components/PageHeader";
import TeacherItem from "components/TeacherItem";
import SearchForm from "./SearchForm";

import * as S from "./styles";

const TeacherList = () => {
  return (
    <S.Container id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis:">
        <SearchForm />
      </PageHeader>

      <S.Main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </S.Main>
    </S.Container>
  );
};

export default TeacherList;
