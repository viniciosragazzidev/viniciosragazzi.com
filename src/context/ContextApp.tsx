import { createContext, useState, useEffect } from "react";

type DadosContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  scrollPosition: number;
  setScrollPosition: (open: number) => void;
};

export const DadosContext = createContext<DadosContextType>({
  open: false,
  setOpen: () => {},
  scrollPosition: 0,
  setScrollPosition: () => {},
});
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <DadosContext.Provider
      value={{ open, setOpen, scrollPosition, setScrollPosition }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default ContextProvider;
