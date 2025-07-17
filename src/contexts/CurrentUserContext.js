import { createContext } from "react";

const defaultUser = {
  name: "",
  email: "",
  avatar: "",
  _id: "",
};

const CurrentUserContext = createContext(defaultUser);

export default CurrentUserContext;
