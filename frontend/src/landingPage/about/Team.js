import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row px-5">
        <h1 className="text-center fs-2 text-muted">People</h1>
      </div>
      <div className="row p-5">
        <div className="col text-center text-muted ps-4">
          <img
            className="founderImg"
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
          />
          <br />
          <br />
          <h5>Nithin Kamath</h5>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col text-muted fw-medium pe-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="https://nithinkamath.me" className="anchorTag">
              Homepage
            </a>{" "}
            /{" "}
            <a href="https://tradingqna.com" className="anchorTag">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="https://twitter.com/nithin0dha" className="anchorTag">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
