import "./OrderCompletePage.css";
import React from "react";
const OrderCompletePage = (props) => {
  const { isim } = props;
  return (
    <>
      <div className="ordercompletepage">
        <img className="imgLogo" src="./public/images/logo.svg"></img>
        <div>
          <p className="tebrikler">TEBRİKLER! {isim}</p>
          <p className="sipalindi">SİPARİSİNİZ ALINDI</p>
        </div>
      </div>
    </>
  );
};
export default OrderCompletePage;
