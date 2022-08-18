import { Router } from "./router/Router";

import { UserProvider } from "./providers/Userprovider";

import "./styles.css";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
