import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Rules from "./pages/Rules.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Highscore from "./pages/HighScores.jsx";
import Game from "./pages/Game.jsx";
import Easy from "./pages/Freeplay.jsx";
import Normal from "./pages/Normal.jsx";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  { path: "/rules", element: <Rules /> },
  { path: "/scores", element: <Highscore /> },
  { path: "/game", element: <Game /> },
  { path: "/game/freeplay", element: <Easy /> },
  { path: "/game/normal", element: <Normal /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={BrowserRouter} />
);
