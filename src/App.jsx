import { useState } from "react";
import AppProvider from "./context/AppContext";
import { RecipeModal } from "./components/RecipeModal";
import { FloatingButton } from "./components/FloatingButton";
import { HomePage } from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  const handleConfirm = () => {
    setIsVerified(true); // Permite el acceso si el usuario es mayor de edad
  };

  return (
    <>
      <AppProvider>
        {!isVerified && <RecipeModal onConfirm={handleConfirm} />}
        <div className={isVerified}>
          <Navbar />
          <FloatingButton />
          <HomePage />
          <Footer />
        </div>
      </AppProvider>
    </>
  );
}

export default App;
