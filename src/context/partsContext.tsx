import React, { createContext, useState } from "react";

type Props = {
  children: JSX.Element
}

type PartsContext = {
  handlePart?: Function;
  parts?: Part;
}
type Part = {
  name: String;
  type: String;
  price: String;
}
const Context = createContext<PartsContext>({});

const PartsProvider: React.FC<Props> = ({ children }) => {
  const [parts, setParts] = useState({ name: '', type: '', price: '' });
  function handlePart(parts: React.SetStateAction<{ name: string; type: string; price: string; }>) {
    setParts(parts);
    return;
  }
  return (
    <Context.Provider value={{ handlePart, parts }}>
      {children}
    </Context.Provider>
  )

}

export { Context, PartsProvider }
