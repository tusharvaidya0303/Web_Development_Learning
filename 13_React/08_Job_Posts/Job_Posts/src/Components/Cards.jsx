import React from "react";
import { Bookmark } from "lucide-react";

const Cards = (props) => {
  return (
    <div>
      <div className="card">
        <div>
          <div className="header">
            <img
              src={props.logo}
              alt="img"
            />
            <button className="save-btn">
              <span>Save</span>
              <Bookmark size={10} />
            </button>
          </div>
          <div className="center">
            <h3>
              {props.company} <span>{props.date}</span>
            </h3>
            <h2>{props.post}</h2>
            <div className="tag">
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
        </div>

        <div className="footer">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
