import { createContext, useContext } from "react";
import Roit from "../api/roit";

const RoitApiContext = createContext();
const roit = new Roit();

export function RoitApiProvider({ children }) {
  return (
    <RoitApiContext.Provider value={{ roit }}>
      {children}
    </RoitApiContext.Provider>
  );
}

export function useRoitApi() {
  return useContext(RoitApiContext);
}
