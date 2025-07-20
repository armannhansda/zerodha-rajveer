import React from "react";

function LeftSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-7 p-5">
          <img src={imgURL} style={{ width: "100%" }} alt={productName} />
        </div>
        <div className="col-1"></div>
        <div className="col-4 py-5 mt-5">
          <h1 className="fs-2 mb-4 text-muted">{productName}</h1>
          <p className="lh-lg">{productDescription}</p>
          <div className="row">
            <div className="col-6">
              <a href={tryDemo} className="anchorTag fw-semibold">
                Try demo <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
            <div className="col-6">
              <a href={learnMore} className="anchorTag fw-semibold">
                Learn more <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-6 my-4">
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="google play Logo"
                />
              </a>
            </div>
            <div className="col-6 my-4">
              <a href={appStore}>
                <img src="media/images/appstoreBadge.svg" alt="appStore Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
