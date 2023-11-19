import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("sign up");

  const handleDisplay = () => {
    if (display === "sign up") {
      setDisplay("log in");
    } else {
      setDisplay("sign up");
    }
  };

  return (
    <section className="flex justify-center items-center h-screen ">
      {display === "sign up" ? (
        <Signup handleDisplay={handleDisplay} />
      ) : (
        <Login handleDisplay={handleDisplay} />
      )}
    </section>
  );
}

export default App;
