import React from "react";

function RightSection({
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
        <div className="col-4 p-5 mt-5">
          <h1 className="fs-2 mb-4 text-muted">{productName}</h1>
          <p className="lh-lg">{productDescription}</p>
          <a href={learnMore} className="anchorTag fw-semibold">
            Learn more <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-7 px-5">
          <img src={imgURL} style={{ width: "100%" }} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
