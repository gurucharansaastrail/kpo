// import React from 'react'

// export default function footer() {
//   return (
//     <div style = {{marginBottom:0}}>
//     <div>
//         <h2>
//             Global Enbig ------------- Private Limited
//         </h2>
//     </div>
//   </div>
//   )
// }

import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  height: 256px;
  width: 1920px;

  & .group {
    height: 256px;
    left: 0;
    position: fixed;
    bottom: 0;
    width: 1926px;

  }

  & .overlap-group {
    background-color: #02584d;
    height: 256px;
    position: relative;
    width: 1920px;
  }

  & .text-wrapper {
    color: #ffffff;
    font-family: "Inter-Bold", Helvetica;
    font-size: 36px;
    font-weight: 700;
    left: 772px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 11px;
  }

  & .div {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 32px;
    font-weight: 600;
    left: 673px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 70px;
  }

  & .element-floor {
    color: #ffffff;
    font-family: "Inter-Medium", Helvetica;
    font-size: 25px;
    font-weight: 500;
    left: 599px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 117px;
    width: 721px;
  }

  & .rectangle {
    background-color: #02584e;
    border-color: #000000;
    border-top-style: solid;
    border-top-width: 2px;
    height: 53px;
    left: 0;
    position: absolute;
    top: 203px;
    width: 1920px;
  }
`;

export default function footer() {
  return (
    <StyledBox>
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">Contact Informations</div>
          <p className="div">Global Enbig Network Private Limited</p>
          <p className="element-floor">
            11/12, 4th Floor, Chateau D&#39;Ampa 37, Nelson Manickam RoadChennai - 600029(TN)
          </p>
          <div className="rectangle" />
        </div>
      </div>
    </StyledBox>
  );
};
