import React from "react";

const Promotion = (props) => {
  return (
    // <section>
      <div className="container py-3 row">
        {/* <li className=""> */}
          <a href={props.itemLink} className="card-link">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                {/* <div className="card-block px-3"> */}
                  <h2 className="mb-0">{props.title}</h2>
                  <p className="mb-auto">{props.description}</p>
                {/* </div> */}
              </div>
              <div className="col-auto d-none d-lg-block">
                <div className="col">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color={props.color}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d={props.imageSvg}
                      fill="currentColor"
                    ></path>
                  </svg>
                  <img src={props.imageUrl} alt="" sizes="272px" className="bd-placeholder-img"></img>
                </div>
              </div>
            </div>
          </a>
        {/* </li> */}
      </div>
    // </section>
  );
};
export default Promotion;
