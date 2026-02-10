import { Outlet } from "@tanstack/react-router";
import { TopBar } from "./top-bar";
import { Sidebar } from "./sidebar";

export function AppShell() {
  return (
    <div className="min-h-screen bg-bg-topbar">
      <TopBar />
      <Sidebar />
      <main className="ml-[240px] mt-[56px] min-h-[calc(100vh-56px)] bg-bg-page p-6 rounded-tr-[10px]">
        <Outlet />
      </main>
    </div>
  );
}
