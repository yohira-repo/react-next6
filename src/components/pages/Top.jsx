import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/buttom/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/Userprovider";

export const Top = () => {
  const hostory = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    hostory.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    hostory.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理ユーザ</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
