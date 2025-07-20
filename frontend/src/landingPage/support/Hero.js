import React from "react";

function Hero() {
  return (
    <div className="container-fluid pb-4" style={{ backgroundColor: "#387ed1" }}>
      <div className="row p-5 mx-3 text-white">
        <div className="col-7">
          <h1 className="fs-5 pb-5">Support Portal</h1>
          <h4 className="fs-4 pb-4">
            Search for an answer or browse help topics to create a ticket
          </h4>
          <form role="search">
            <input
              class="form-control me-2 supportSearch"
              type="search"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            />
          </form>
          <div className="my-3 lh-lg d-flex flex-wrap">
            <a className="underline-offset" href="#track-account">
              Track account opening
            </a>
            <a className="underline-offset" href="#track-segment">
              Track segment activation
            </a>
            <a className="underline-offset" href="#intraday-margins">
              Intraday margins
            </a>
            <a className="underline-offset" href="#kite-manual">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-5 text-end">
          <a className="underline-offset" href="#track-tickets">
            Track tickets
          </a>
          <h1 className="text-start fs-5 mt-5 p-3">Featured</h1>
          <ol className="text-start underline-offset ps-5">
            <li>Exclusion of F&O contracts on 8 securities from August 29, 2025</li>
            <br />
            <li>Revision in expiry day of Index and Stock derivatives contracts</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
