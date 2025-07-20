import React from "react";

function Hero() {
  return (
    <div className="container p-5 m-5">
      <div className="row text-center pb-5 border-bottom">
        <h1 className="text-muted">Pricing</h1>
        <h2 className="text-muted fs-5 mt-3">
          Free equity investments and flat ₹20 traday and F&O trades
        </h2>
      </div>
      <div className="row text-center pt-5 mt-5">
        <div className="col text-muted p-3">
            <div className="row">
                <img src="media/images/pricingEquity.svg" style={{width:"85%"}} alt="Pricing Equity" />
                <h1 className="fs-2 my-3">Free equity delivery</h1>
                <p className="lh-lg">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
        </div>
        <div className="col text-muted p-3">
            <div className="row">
                <img src="media/images/intradayTrades.svg" style={{width:"85%"}} alt="Intraday Trades" />
                <h1 className="fs-2 my-3">Intraday and F&O trades</h1>
                <p className="lh-lg">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
        </div>
        <div className="col text-muted p-3">
            <div className="row">
                <img src="media/images/pricingEquity.svg" style={{width:"85%"}} alt="Mutual Funds" />
                <h1 className="fs-2 my-3">Free direct MF</h1>
                <p className="lh-lg">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
