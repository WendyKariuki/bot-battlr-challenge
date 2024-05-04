import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";
// import BotSpecs from "./BotSpecs";


function BotsPage() {
  const  [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  // Function to handle adding a bot to the army
  const addToArmy = (bot) => {
    if (!botArmy.some((armyBot) => armyBot.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  // Function to handle removing a bot from the army
  const removeFromArmy = (botId) => {
    const updatedBotArmy = botArmy.filter((bot) => bot.id !== botId);
    setBotArmy(updatedBotArmy);
  };

  useEffect (() => {
    fetch("http://localhost:8002/bots")
    .then(response => response.json())
    .then(data => setBots(data));
  },[]);

  return (
    <div>
      <YourBotArmy bots = {botArmy}/>
      <BotCollection bots = {bots} addToArmy = {()=>addToArmy} removeFromArmy={removeFromArmy}/>
   

      

    </div>
  )
}

export default BotsPage;