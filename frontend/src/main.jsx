import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App.jsx";
import "./index.css";

const loadPage = (importPage) => {
  const Page = lazy(importPage);
  return <Page />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: loadPage(() => import("./components/home/Home.jsx")),
      },
      {
        path: "/about",
        element: loadPage(() => import("./pages/About.jsx")),
      },
      {
        path: "/services",
        element: loadPage(() => import("./pages/Services.jsx")),
      },
      {
        path: "/portfolio",
        element: loadPage(() => import("./pages/Portfolio.jsx")),
      },
      {
        path: "/contact",
        element: loadPage(() => import("./components/Contact.jsx")),
      },
      {
        path: "/pricing",
        element: loadPage(() => import("./pages/PricingPlans.jsx")),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense
      fallback={
        <main
          className="flex min-h-screen items-center justify-center"
          role="status"
          aria-label="Loading page"
        >
          Loading NovaMatrix...
        </main>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
