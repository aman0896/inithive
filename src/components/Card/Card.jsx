import React from "react";
import { useHistory } from "react-router-dom";
import "./Card.css";

function Card({ data }) {
  const history = useHistory();

  const onLearnMoreClick = (id) => {
    console.log(id, "idd");
    history.push({ pathname: "/service", state: id });
  };

  return (
    <div id="card" className="card_main_container">
      <div className="card_inside_container">
        <div className="card_image_thumb">
          <img className="card_image" src={data.image} alt="" />
        </div>
        <div className="card_content-section">
          <div className="card_header_section">
            <h3 className="card_heading">{data.heading}</h3>
          </div>
          <div className="card_summary">
            <p>{data.content}</p>
          </div>
        </div>
        <p className="text-center">
          <span onClick={() => onLearnMoreClick(data.id)}>
            <b>
              Learn more <i className="fas fa-chevron-right ml-2"></i>
            </b>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Card;
