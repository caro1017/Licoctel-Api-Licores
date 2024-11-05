import { useState } from "react";
{/* Aqui va la importacion AppContext.jsx  */}
import { RecipeModal } from "./components/RecipeModal";
import {FloatingButton} from "./components/FloatingButton"; //Aqui va la importacion FloatingButton.jsx   
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
{/* Aqui va la importacion AppContext.jsx  */}


function App() {
  const [isVerified, setIsVerified] = useState(false);

  const handleConfirm = () => {
    setIsVerified(true); // Permite el acceso si el usuario es mayor de edad
  };

  return (
    <>
      {/* Aqui va el componentes AppContext.jsx  */}
      {!isVerified && <RecipeModal open={!isVerified} onConfirm={handleConfirm} />}
      {isVerified && <>
      <FloatingButton/>
        <HomePage />
        <Footer/>{/* Aqui va el Footer */}
      </>}   
      {/* Aqui va el componentes AppContext.jsx  */}
    </>
  );
}

export default App;
