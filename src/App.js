import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import LoginPage from "./Components/LoginPage";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [username, setUsername] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  return (
    <div className='App'>
      <Header imgUrl={imgUrl} username={username} />
      {username && <Body username={username} imgUrl={imgUrl} />}
      {!username && (
        <LoginPage setUsername={setUsername} setImgUrl={setImgUrl} />
      )}
      <Footer />
    </div>
  );
}

export default App;
