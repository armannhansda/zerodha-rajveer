import React from "react";

function Universe() {
  return (
    <div className="container p-5">
      <div className="row text-center text-muted p-5">
        <h1 className="fs-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="https://zerodha.tech" className="anchorTag">
            Zerodha.tech
          </a>{" "}
          blog.
        </h1>
      </div>
      <div className="row text-center text-muted p-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center text-muted p-5">
        <div className="col">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="zerodha fund house"
            style={{ width: "65%" }}
          />
          <p className="universeSubPara pt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull Logo"
            style={{ width: "65%" }}
          />
          <p className="universeSubPara pt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col">
          <img
            src="media/images/tijori.svg"
            alt="tijori"
            style={{ width: "65%" }}
          />
          <p className="universeSubPara pt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
      </div>
      <div className="row text-center text-muted p-5">
        <div className="col">
          <img
            src="media/images/streakLogo.png"
            alt="Streak Logo"
            style={{ width: "65%" }}
          />
          <p className="universeSubPara pt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase Logo"
            style={{ width: "65%" }}
          />
          <p className="universeSubPara pt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto Logo"
            style={{ width: "65%" }}
          />
          <p className="universeSubPara pt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <button
          className="p-2 fs-5 mb-5 allBtn"
          onClick={() => {
            if (
              localStorage.getItem("token") ||
              sessionStorage.getItem("token")
            ) {
              alert("You are already logged in , you can eccess dashboard");
            } else {
              window.location.href = "/signup";
            }
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
