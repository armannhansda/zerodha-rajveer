import React from "react";

function Hero() {
  return (
    <div className="container p- mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 fs-5 mb-5 allBtn"
          onClick={() => {if(localStorage.getItem("token") || sessionStorage.getItem("token")) {
            alert("You are already logged in , you can access dashboard");
          }else {
            window.location.href = "/signup";}
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
