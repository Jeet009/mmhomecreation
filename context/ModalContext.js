import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [modal, setModal] = useState(false);

  const contextProps = {
    modal,
    setModal,
  };

  return (
    <ModalContext.Provider value={contextProps}>
      {props.children}
    </ModalContext.Provider>
  );
};
