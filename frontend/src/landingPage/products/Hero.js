import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center text-muted p-5 mb-5">
        <h1 className="fw-semibold">Zerodha Products</h1>
        <h2 className="fs-5">Sleek, modern, and intuitive trading platforms</h2>
        <h3 className="fs-6 pt-3">
          Check out our{" "}
          <a className="anchorTag" href="/pricing">
            investment offerings <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </h3>
      </div>
      <hr className="m-5" />
    </div>
  );
}

export default Hero;
