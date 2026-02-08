import React from "react";
import "./Certificate.css";
import Card2 from "./Card2";
import { certificateData } from "../../data";

const Certificate = () => {
  return (
    <div id="certificate">
      <div className="certificate-container">
        <div className="certificate-heading">
          <p>
            Certificate <span></span>
          </p>
        </div>
        <div className="certificate-grid">
          {certificateData.map((cer, index) => {
            return (
              <Card2
                key={index}
                certificate_img={cer.certificate_img}
                certificate_title={cer.certificate_title}
                certificate_desc={cer.certificate_desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
