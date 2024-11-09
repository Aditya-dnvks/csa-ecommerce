import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { AuthProvider } from "./components/Auth/auth-context.jsx";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Theme accentColor="orange">
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </Theme>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
