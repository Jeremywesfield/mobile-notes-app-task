import React from "react";

const AppContext = React.createContext({
  user: "",
  setUser: "",
  notes: "",
  setNotes: "",
  location: "",
  setLocation: "",
  asyncStorage: "",
  setAsyncStorage: ""
});

export default AppContext;
