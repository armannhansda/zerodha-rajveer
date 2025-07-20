import React from "react";

function CreateTicket() {
  return (
    <div className="container mb-5 py-5 ps-4">
      <div className="row">
        <h1 className="text-muted fs-4">
          To create a ticket, select a relevant topic
        </h1>
      </div>
      <div className="row py-5">
        <div className="col">
          <h1 className="fs-5 fw-normal pb-3"><i class="fa-regular fa-square-plus fa-sm"></i> Account Opening</h1>
          <ul className="TicketList list-unstyled">
            <li>
              <a href="">Resident individual</a>
            </li>
            <li>
              <a href="">Minor</a>
            </li>
            <li>
              <a href="">Non Resident Indian (NRI)</a>
            </li>
            <li>
              <a href="">Company, Partnership, HUF and LLP</a>
            </li>
            <li>
              <a href="">Glossary</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h1 className="fs-5 fw-normal pb-3"><i class="fa-regular fa-user fa-sm"></i> Your Zerodha Account</h1>
          <ul className="TicketList list-unstyled">
            <li>
              <a href="">Your Profile</a>
            </li>
            <li>
              <a href="">Account modification</a>
            </li>
            <li>
              <a href="">Client Master Report and Depository Participant</a>
            </li>
            <li>
              <a href="">Nomination</a>
            </li>
            <li>
              <a href="">Transfer and conversion of securities</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h1 className="fs-5 fw-normal pb-3"><i class="fa-regular fa-chart-bar fa-sm"></i> Kite</h1>
          <ul className="TicketList list-unstyled">
            <li>
              <a href="">IPO</a>
            </li>
            <li>
              <a href="">Trading FAQs</a>
            </li>
            <li>
              <a href="">Margin Trading Facility (MTF) and Margins</a>
            </li>
            <li>
              <a href="">Charts and orders</a>
            </li>
            <li>
              <a href="">Alerts and Nudges</a>
            </li>
            <li>
              <a href="">General</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="fs-5 fw-normal pb-3"><i class="fa-regular fa-envelope fa-sm"></i> Funds</h1>
          <ul className="TicketList list-unstyled">
            <li>
              <a href="">Add money</a>
            </li>
            <li>
              <a href="">Withdraw money</a>
            </li>
            <li>
              <a href="">Add bank accounts</a>
            </li>
            <li>
              <a href="">eMandates</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h1 className="fs-5 fw-normal pb-3"><i class="fa-regular fa-font-awesome fa-sm"></i> Console</h1>
          <ul className="TicketList list-unstyled">
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Corporate actions</a>
            </li>
            <li>
              <a href="">Funds statement</a>
            </li>
            <li>
              <a href="">Reports</a>
            </li>
            <li>
              <a href="">Profile</a>
            </li>
            <li>
              <a href="">Segments</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h1 className="fs-5 fw-normal pb-3"><i class="fa-brands fa-nfc-directional fa-sm"></i> Coin</h1>
          <ul className="TicketList list-unstyled">
            <li>
              <a href="">Mutual funds</a>
            </li>
            <li>
              <a href="">National Pension Scheme (NPS)</a>
            </li>
            <li>
              <a href="">Features on Coin</a>
            </li>
            <li>
              <a href="">Payments and Orders</a>
            </li>
            <li>
              <a href="">General</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
