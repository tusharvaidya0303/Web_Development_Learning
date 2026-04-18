import { useState } from "react";
import "./Lottry.css";
import {genNumbers,sum} from "./helper";
import Ticket from "./Ticket";

export default function Lottry({n,winningsum}) {
  let [ticket, setTicket] = useState(genNumbers(n));

  let buyTicket = () => {
  setTicket(genNumbers(n));
  };
  let isWinning = sum(ticket) === winningsum;

  return (
    <div >
      <h1>Lottery Game!!!</h1>
      <Ticket ticket={ticket}/>
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWinning && "Congurations, you won!"}</h3>
    </div>
  );
}
