import React from "react";
import { useState, useEffect } from "react";
import "./CurrencyRates.css";

function CurrencyRates() {
  const [valCAD, setValCAD] = useState();
  const [valBuyCAD, setValBuyCAD] = useState();
  const [valSellCAD, setValSellCAD] = useState();

  const [valEUR, setValEUR] = useState();
  const [valBuyEUR, setValBuyEUR] = useState();
  const [valSellEUR, setValSellEUR] = useState();

  const [valIDR, setValIDR] = useState();
  const [valBuyIDR, setValBuyIDR] = useState();
  const [valSellIDR, setValSellIDR] = useState();

  const [valJPY, setValJPY] = useState();
  const [valBuyJPY, setValBuyJPY] = useState();
  const [valSellJPY, setValSellJPY] = useState();

  const [valCHF, setValCHF] = useState();
  const [valBuyCHF, setValBuyCHF] = useState();
  const [valSellCHF, setValSellCHF] = useState();

  const [valGBP, setValGBP] = useState();
  const [valBuyGBP, setValBuyGBP] = useState();
  const [valSellGBP, setValSellGBP] = useState();

  useEffect(() => {
    fetch(
      "https://api.currencyfreaks.com/latest?apikey=8dca4c4afb2a49149d35ae69eab80aa7"
    )
      .then((response) => response.json())
      .then((json) => {
        const totalBuySellCAD = json.rates.CAD * (5 / 100);
        const totalBuySellEUR = json.rates.EUR * (5 / 100);
        const totalBuySellIDR = json.rates.IDR * (5 / 100);
        const totalBuySellJPY = json.rates.JPY * (5 / 100);
        const totalBuySellCHF = json.rates.CHF * (5 / 100);
        const totalBuySellGBP = json.rates.GBP * (5 / 100);

        setValCAD(json.rates.CAD);
        setValBuyCAD(parseFloat(json.rates.CAD) + totalBuySellCAD);
        setValSellCAD(parseFloat(json.rates.CAD) - totalBuySellCAD);

        setValEUR(json.rates.EUR);
        setValBuyEUR(parseFloat(json.rates.EUR) + totalBuySellEUR);
        setValSellEUR(parseFloat(json.rates.EUR) - totalBuySellEUR);

        setValIDR(json.rates.IDR);
        setValBuyIDR(parseFloat(json.rates.IDR) + totalBuySellIDR);
        setValSellIDR(parseFloat(json.rates.IDR) - totalBuySellIDR);

        setValJPY(json.rates.JPY);
        setValBuyJPY(parseFloat(json.rates.JPY) + totalBuySellJPY);
        setValSellJPY(parseFloat(json.rates.JPY) - totalBuySellJPY);

        setValCHF(json.rates.CHF);
        setValBuyCHF(parseFloat(json.rates.CHF) + totalBuySellCHF);
        setValSellCHF(parseFloat(json.rates.CHF) - totalBuySellCHF);

        setValGBP(json.rates.GBP);
        setValBuyGBP(parseFloat(json.rates.GBP) + totalBuySellGBP);
        setValSellGBP(parseFloat(json.rates.GBP) - totalBuySellGBP);
      });
  });

  return (
    <div className="container">
      <table className="table">
        <thead className="title">
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>

        <tbody className="content">
          <tr>
            <td>CAD</td>
            <td>{valBuyCAD}</td>
            <td>{valCAD}</td>
            <td>{valSellCAD}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{valBuyEUR}</td>
            <td>{valEUR}</td>
            <td>{valSellEUR}</td>
          </tr>
          <tr>
            <td>IDR</td>
            <td>{valBuyIDR}</td>
            <td>{valIDR}</td>
            <td>{valSellIDR}</td>
          </tr>
          <tr>
            <td>JPY</td>
            <td>{valBuyJPY}</td>
            <td>{valJPY}</td>
            <td>{valSellJPY}</td>
          </tr>
          <tr>
            <td>CHF</td>
            <td>{valBuyCHF}</td>
            <td>{valCHF}</td>
            <td>{valSellCHF}</td>
          </tr>
          <tr>
            <td>GBP</td>
            <td>{valBuyGBP}</td>
            <td>{valGBP}</td>
            <td>{valSellGBP}</td>
          </tr>
        </tbody>
      </table>
      <div className="about">
        <p>Rates are based from 1 USD</p>
        <p>This application uses API from https://api.currencyfreaks.com</p>
      </div>
    </div>
  );
}

export default CurrencyRates;
