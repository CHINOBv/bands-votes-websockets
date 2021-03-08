import { createContext } from "react";
import useSocket from "../hooks/useSocket";

export const SocketConext = createContext();

const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket(process.env.REACT_APP_API);

  return (
    <SocketConext.Provider
      value={{
        socket,
        online,
      }}
    >
      {children}
    </SocketConext.Provider>
  );
};

export default SocketProvider;
