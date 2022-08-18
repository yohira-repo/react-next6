import { PrimaryButton } from "./components/atoms/buttom/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttom/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "じゃけ",
  image: "https://source.unsplash.com/mJaD10XeD7w",
  email: "example@alphacmc.co.jp",
  phone: "090-9999-8888",
  company: {
    name: "株式会社アルファ・コミュニケーションズ"
  },
  website: "https://www.alphacmc.co.jp"
};

export default function App() {
  return (
    <div>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
