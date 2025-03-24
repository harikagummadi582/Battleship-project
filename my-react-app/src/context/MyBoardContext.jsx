import React from "react";

const myBoardContext = createContext();

export const useMyBoardContext = () => {
  return useContext(myBoardContext);
}

export const MyBoardProvider = ({ children }) => {
  const [board, setBoard] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(0))
  );

  return (
    <myBoardContext.Provider value={{ board, setBoard }}>
      {children}
    </myBoardContext.Provider>
  );
}