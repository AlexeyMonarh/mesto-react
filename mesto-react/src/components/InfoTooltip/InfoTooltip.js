import { React } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function InfoTooltip(props) {
  const img = props.infoTool.img;
  const message = props.infoTool.message;

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      selector={'form_none'}
      infoTool={props.infoTool}
      img={img}
      message={message}
      div={
        <div className="infoTool" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <img src={img} alt="Succed" />
          <h2 style={{ textAlign: "center", marginBottom: "0", marginTop: "40px" }}>{message}</h2>
        </div>
      }
    />
  )
}

export default InfoTooltip;