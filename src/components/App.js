// import React from "react";
// import BotsPage from "./BotsPage";

// function App() {
//   return (
//     <div className="App">
//       <BotsPage />AWe4
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BotsPage from "./BotsPage";
import BotSpecs from "./BotSpecs";

function App() {
  const [botArmy, setBotArmy] = useState([]);

  // Function to handle adding a bot to the army
  const addToArmy = (bot) => {
    if (!botArmy.some((armyBot) => armyBot.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<BotsPage />} />
      <Route path="/bot/:id" element={<BotSpecs addToArmy={addToArmy} />} />
    </Routes>
  );
}

export default App;
