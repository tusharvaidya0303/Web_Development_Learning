import TicketNum from "./TicketNum";
import "./Ticket.css"
export default function Ticket({ticket}) {
    return(
        <div className="ticket">
            <h3>Ticket</h3>
            <span>
                {ticket.map((num,idx) => (
                <TicketNum num={num} key={idx}/>
                ))}
            </span>
        </div>
    )
}