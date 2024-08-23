import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const NavigationStore = createContext<{
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  setOpen: () => {},
});

function NavigationContext({ children }: PropsWithChildren) {
  const [isOpened, setOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) body.style.overflow = isOpened ? "hidden" : "auto";
  }, [isOpened]);

  return (
    <NavigationStore.Provider value={{ isOpen: isOpened, setOpen }}>
      {children}
    </NavigationStore.Provider>
  );
}

export { NavigationStore };
export default NavigationContext;
