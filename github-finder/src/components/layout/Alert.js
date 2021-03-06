import React, { useContext } from "react";

import AlertContext from "../../context/alert/alertContext";

import "@fortawesome/fontawesome-free/css/all.min.css";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
