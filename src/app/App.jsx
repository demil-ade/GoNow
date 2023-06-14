import React from "react";
import Homepage from "../pages/HomePage";
import Business from "../pages/Business";
import "../styles/pages/Business.scss";
import "../styles/pages/HomePage.scss";
import "../styles/components/Input/Input.scss";
/*import "../styles/components/Input/Inputtwo.scss";*/

function App(){
  return(
    <div className="App">
      {/*<Homepage/>*/}
      <Business/>
    </div>
  );
}
export default App;