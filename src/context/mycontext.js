import { useContext } from "react";
import { MyContext } from ".";

const ContextDatas = () => {
  const { email, setEmail, isLoggedIn, setIsLoggedIn, pets, setPets } =
    useContext(MyContext);

  return { email, setEmail, isLoggedIn, setIsLoggedIn, pets, setPets };
};

export { ContextDatas };
