import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけ${val}`,
    image: "https://source.unsplash.com/mJaD10XeD7w",
    email: "example@alphacmc.co.jp",
    phone: "090-9999-8888",
    company: {
      name: "株式会社アルファ・コミュニケーションズ"
    },
    website: "https://www.alphacmc.co.jp"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
