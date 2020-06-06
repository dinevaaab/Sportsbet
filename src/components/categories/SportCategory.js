import React from "react";


const SportCategory = (props) => {
  return (
    <div>
      <li className="d-flex  px-1 py-4 justify-content-center align-items-center">
        <a href={props.itemLink} className="">
          <div></div>
          <div className="categorySvg">
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color={props.color}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d={props.image}
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="liCategory text-center">{props.label}</div>
        </a>
      </li>
    </div>
  );
};

export default SportCategory;
