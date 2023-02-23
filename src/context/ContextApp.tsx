import { createContext, useState, useEffect } from "react";

type DadosContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  scrollPosition: number;
  setScrollPosition: (open: number) => void;
};

export const DadosContext = createContext<DadosContextType>({
  open: false,
  setOpen: () => {},
  modalOpen: false,
  setModalOpen: () => {},
  scrollPosition: 0,
  setScrollPosition: () => {},
});
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <DadosContext.Provider
      value={{ open, setOpen, scrollPosition, setScrollPosition,modalOpen, setModalOpen }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default ContextProvider;
