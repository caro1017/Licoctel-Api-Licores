import { useState } from "react";
{/* Aqui va la importacion AppContext.jsx  */}
import { RecipeModal } from "./components/RecipeModal";
{/* Aqui va la importacion FloatingButton.jsx   */}
import { HomePage } from "./pages/HomePage";
{/* Aqui va la importacion Footer  */}
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
        {/* Aqui va el componente FloatingButton.jsx   */}
        <HomePage />
        {/* Aqui va el Footer */}
      </>}   
      {/* Aqui va el componentes AppContext.jsx  */}
    </>
  );
}

export default App;
