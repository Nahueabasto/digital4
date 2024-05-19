import React, { useEffect } from "react";
import Card from "../Blue/Card";
import { useDispatch, useSelector } from "react-redux";
import { getDolar } from "../../Redux/Actions";
import "./Oficial.css";


export default function Oficial() {
  const dispatch = useDispatch();
  const dolar = useSelector((state) => state.dolar);

  useEffect(() => {
    dispatch(getDolar());
  }, [dispatch]);

const currencies = [
    { title: "Dólar Oficial", data: dolar.official },
    { title: "Dólar Blue", data: dolar.blue },
    { title: "Euro Oficial", data: dolar.official_euro },
    { title: "Euro Blue", data: dolar.blue_euro }
  ];

  return (
    <div className="proje">
      {dolar && (
        <div className="project-container">
          {currencies.map((currency, index) => (
  currency.data && (
    <Card
      key={index}
      title={currency.title}
      value_buy={currency.data.value_buy}
      value_sell={currency.data.value_sell}
    />
  )
))}
      </div>
      )}
    </div>
  );
}