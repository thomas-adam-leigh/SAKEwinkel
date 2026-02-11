import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

interface SaveBarState {
  hasUnsavedChanges: boolean;
  onDiscard: () => void;
  onSave: () => void;
}

interface TopBarContextValue extends SaveBarState {
  setSaveBar: (state: Omit<SaveBarState, "hasUnsavedChanges"> & { hasUnsavedChanges: boolean }) => void;
  clearSaveBar: () => void;
}

const defaultState: SaveBarState = {
  hasUnsavedChanges: false,
  onDiscard: () => {},
  onSave: () => {},
};

const TopBarContext = createContext<TopBarContextValue | null>(null);

export function TopBarProvider({ children }: { children: ReactNode }) {
  const [saveBar, setSaveBarState] = useState<SaveBarState>(defaultState);

  const setSaveBar = useCallback(
    (state: SaveBarState) => {
      setSaveBarState(state);
    },
    [],
  );

  const clearSaveBar = useCallback(() => {
    setSaveBarState(defaultState);
  }, []);

  return (
    <TopBarContext.Provider
      value={{
        ...saveBar,
        setSaveBar,
        clearSaveBar,
      }}
    >
      {children}
    </TopBarContext.Provider>
  );
}

export function useTopBarSaveBar({
  isDirty,
  onDiscard,
  onSave,
}: {
  isDirty: boolean;
  onDiscard: () => void;
  onSave: () => void;
}) {
  const context = useContext(TopBarContext);
  if (!context) {
    throw new Error("useTopBarSaveBar must be used within a TopBarProvider");
  }

  const { setSaveBar, clearSaveBar } = context;

  useEffect(() => {
    setSaveBar({
      hasUnsavedChanges: isDirty,
      onDiscard,
      onSave,
    });
  }, [isDirty, onDiscard, onSave, setSaveBar]);

  useEffect(() => {
    return () => {
      clearSaveBar();
    };
  }, [clearSaveBar]);
}

export function useTopBarContext() {
  const context = useContext(TopBarContext);
  if (!context) {
    throw new Error("useTopBarContext must be used within a TopBarProvider");
  }
  return context;
}
