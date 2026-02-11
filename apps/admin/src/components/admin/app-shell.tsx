import { Outlet } from "@tanstack/react-router";
import { Sidebar } from "./sidebar";
import { TopBar } from "./top-bar";
import { TopBarProvider, useTopBarContext } from "./top-bar-context";

function AppShellInner() {
  const { hasUnsavedChanges, onDiscard, onSave } = useTopBarContext();

  return (
    <div className="bg-bg-topbar min-h-screen">
      <TopBar
        hasUnsavedChanges={hasUnsavedChanges}
        onDiscard={onDiscard}
        onSave={onSave}
      />
      <Sidebar />
      <main className="bg-bg-page mt-[56px] ml-[240px] min-h-[calc(100vh-56px)] rounded-tr-[10px] p-6">
        <Outlet />
      </main>
    </div>
  );
}

export function AppShell() {
  return (
    <TopBarProvider>
      <AppShellInner />
    </TopBarProvider>
  );
}
