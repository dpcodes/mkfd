import { Outlet } from "@tanstack/react-router";
import { lazy } from "react";

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null // Render nothing in production
  : lazy(() =>
      // Lazy load in development
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    );

export default function MainContent() {
  return (
    <div className="mx-auto flex-1 border-b">
      <div className="max-w-7xl">
        <main className="py-10">
          <Outlet />
          <TanStackRouterDevtools />
        </main>
      </div>
    </div>
  );
}
