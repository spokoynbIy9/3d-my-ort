import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import GlobalStyles from "@mui/material/GlobalStyles";
import { StyledEngineProvider } from "@mui/material/styles";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StyledEngineProvider enableCssLayer>
            <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
            <App />
        </StyledEngineProvider>
    </StrictMode>,
);
