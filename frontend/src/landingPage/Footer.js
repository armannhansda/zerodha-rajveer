import React from "react";

function Footer() {
  return (
    <div className="footer container-fluid border-top px-5 pt-5 bg-body-tertiary">
      <div className="row mb-5 px-4 linksInRow">
        <div className="col">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "75%" }}
          />
          <p className="my-4 text-muted fw-medium" style={{fontSize:"85%",opacity:"0.8"}}>&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          <a className="anchorTagMain fs-5 pe-4" href="https://twitter.com/zerodhaonline"><i class="fa-brands fa-x-twitter"></i></a>
          <a className="anchorTagMain fs-5 pe-4" href="https://facebook.com/zerodha.social"><i class="fa-brands fa-square-facebook"></i></a>
          <a className="anchorTagMain fs-5 pe-4" href="https://instagram.com/zerodhaonline"><i class="fa-brands fa-instagram"></i></a>
          <a className="anchorTagMain fs-5 pe-4" href="https://linkedin.com/company/zerodha"><i class="fa-brands fa-linkedin-in"></i></a>
          <hr />
          <a className="anchorTagMain fs-5 pe-4" href="https://youtube.com/user/zerodhaonline"><i class="fa-brands fa-youtube"></i></a>
          <a className="anchorTagMain fs-5 pe-4" href="https://wa.me/9164747474"><i class="fa-brands fa-whatsapp"></i></a>
          <a className="anchorTagMain fs-5 pe-4" href="https://t.me/zerodhain"><i class="fa-brands fa-telegram"></i></a>
        </div>
        <div className="col">
          <p className="text-muted fs-5 fw-medium">Account</p>
          <a className="anchorTagMain" href="/signup">Open demat account</a>
          <br />
          <a className="anchorTagMain" href="#minor-account">Minor demat account</a>
          <br />
          <a className="anchorTagMain" href="#nri-account">NRI demat account</a>
          <br />
          <a className="anchorTagMain" href="#commodity">Commodity</a>
          <br />
          <a className="anchorTagMain" href="#dematerialisation">Dematerialisation</a>
          <br />
          <a className="anchorTagMain" href="#fund-transfer">Fund transfer</a>
          <br />
          <a className="anchorTagMain" href="#mtf">MTF</a>
          <br />
          <a className="anchorTagMain" href="#referral">Referral program</a>
          <br />
        </div>
        <div className="col">
          <p className="text-muted fs-5 fw-medium">Support</p>
          <a className="anchorTagMain" href="/support">Contact us</a>
          <br />
          <a className="anchorTagMain" href="/support">Support portal</a>
          <br />
          <a className="anchorTagMain" href="#complaint">How to file a complaint?</a>
          <br />
          <a className="anchorTagMain" href="#status">Status of your complaints</a>
          <br />
          <a className="anchorTagMain" href="#bulletin">Bulletin</a>
          <br />
          <a className="anchorTagMain" href="#circular">Circular</a>
          <br />
          <a className="anchorTagMain" href="https://zerodha.com/z-connect">Z-Connect blog</a>
          <br />
          <a className="anchorTagMain" href="#downloads">Downloads</a>
          <br />
        </div>
        <div className="col">
            <p className="text-muted fs-5 fw-medium">Company</p>
          <a className="anchorTagMain" href="/about">About</a>
          <br />
          <a className="anchorTagMain" href="#philosophy">Philosophy</a>
          <br />
          <a className="anchorTagMain" href="#press">Press & media</a>
          <br />
          <a className="anchorTagMain" href="#careers">Careers</a>
          <br />
          <a className="anchorTagMain" href="#csr">Zerodha Cares (CSR)</a>
          <br />
          <a className="anchorTagMain" href="https://zerodha.tech">Zerodha.tech</a>
          <br />
          <a className="anchorTagMain" href="#opensource">Open source</a>
          <br />
        </div>
        <div className="col">
            <p className="text-muted fs-5 fw-medium">Quick links</p>
          <a className="anchorTagMain" href="#ipo">Upcoming IPOs</a>
          <br />
          <a className="anchorTagMain" href="/pricing">Brokerage charges</a>
          <br />
          <a className="anchorTagMain" href="#holidays">Market holidays</a>
          <br />
          <a className="anchorTagMain" href="#calendar">Economic calendar</a>
          <br />
          <a className="anchorTagMain" href="#calculators">Calculators</a>
          <br />
          <a className="anchorTagMain" href="#markets">Markets</a>
          <br />
          <a className="anchorTagMain" href="#sectors">Sectors</a>
          <br />
        </div>
      </div>
      <div className="row px-4">
        <p className="text-muted footerPara">Zerodha Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 - SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a className="anchorTag" href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, for DP related to <a className="anchorTag" href="mailto:dp@zerodha.com">dp@zerodha.com.</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        <p className="text-muted footerPara">Procedure to file a complaint on <a className="anchorTag" href="https://scores.sebi.gov.in">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
        <p className="text-muted footerPara"><a className="anchorTag" href="#smart-dispute">Smart Online Dispute Resolution</a> | <a className="anchorTag" href="#grievances">Grievances Redressal Mechanism</a></p>
        <p className="text-muted footerPara">Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        <p className="text-muted footerPara">Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
        <p className="text-muted footerPara">"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a className="anchorTag" href="/support">create a ticket here</a>.</p>
      </div>
      <div className="row px-4 pb-3">
        <div className="col-1"></div>
        <div className="col-10">
          <a className="anchorTagMain px-2" href="https://www.nseindia.com">NSE</a>
          <a className="anchorTagMain px-2" href="https://www.bseindia.com">BSE</a>
          <a className="anchorTagMain px-2" href="https://www.mcxindia.com">MXC</a>
          <a className="anchorTagMain px-2" href="#terms">Terms & conditions</a>
          <a className="anchorTagMain px-2" href="#policies">Policies & procedures</a>
          <a className="anchorTagMain px-2" href="#privacy">Privacy policy</a>
          <a className="anchorTagMain px-2" href="#disclosure">Disclosure</a>
          <a className="anchorTagMain px-2" href="#investor-attention">For investor's attention</a>
          <a className="anchorTagMain px-2" href="#investor-charter">Investor charter</a>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Footer;
