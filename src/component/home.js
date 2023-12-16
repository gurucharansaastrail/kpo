import React from 'react'
import styled from "styled-components";
import img1 from '../assest/Rectangle 51.png'
import img2 from '../assest/Rectangle 52.png'
const StyledHome = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & .div {
    background-color: #ffffff;
    height: 3844px;
    overflow: hidden;
    position: relative;
    width: 1920px;
  }

  & .overlap {
    background-color: #1bc6eb;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-color: #000000;
    height: 67px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1920px;
  }

  & .text-wrapper {
    color: #000000;
    font-family: "Inter-Bold", Helvetica;
    font-size: 28px;
    font-weight: 700;
    left: 704px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 13px;
  }

  & .overlap-group {
    height: 301px;
    left: 0;
    position: absolute;
    top: 67px;
    width: 1920px;
  }

  & .rectangle {
    background-color: #1bc6eb;
    height: 128px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1920px;
  }

  & .IMG {
    height: 89px;
    left: 32px;
    object-fit: cover;
    position: absolute;
    top: 20px;
    width: 223px;
  }

  & .rectangle-2 {
    background-color: #963333;
    height: 175px;
    left: 0;
    position: absolute;
    top: 126px;
    width: 1920px;
  }

  & .text-wrapper-2 {
    color: #fff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 52px;
    font-weight: 600;
    align-item: center;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    display: flex;
    justify-content: center;
    background-color: #973434;
    width: 100%;
    height: 125px;
    
  }

  & .text-wrapper-3 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 30px;
    font-weight: 600;
    left: 563px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 35px;
    white-space: nowrap;
  }

  & .text-wrapper-4 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 28px;
    font-weight: 600;
    left: 702px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 37px;
  }

  & .text-wrapper-5 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 28px;
    font-weight: 600;
    left: 878px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 37px;
  }

  & .text-wrapper-6 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 28px;
    font-weight: 600;
    left: 1078px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 37px;
  }

  & .text-wrapper-7 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 28px;
    font-weight: 600;
    left: 1444px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 37px;
  }

  & .text-wrapper-8 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 28px;
    font-weight: 600;
    left: 1558px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 37px;
  }

  & .text-wrapper-9 {
    color: #000000;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 28px;
    font-weight: 600;
    left: 1720px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 37px;
  }

  & .img {
    height: 1523px;
    left: 355px;
    object-fit: cover;
    position: absolute;
    top: 128px;
    width: 1168px;
  }

  & .rectangle-3 {
    height: 1574px;
    left: 355px;
    object-fit: cover;
    position: absolute;
    top: 1891px;
    width: 1168px;
  }

  & .group {
    height: 256px;
    left: 0;
    position: absolute;
    top: 3588px;
    width: 1926px;
  }

  & .overlap-group-2 {
    background-color: #02584d;
    height: 256px;
    position: relative;
    width: 1920px;
  }

  & .text-wrapper-10 {
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

  & .p {
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

  & .rectangle-4 {
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
  & .home{
    background-color: #973434;
  }
`;

export default function home() {
  return (
    <StyledHome>
      <div className="div">
        <div className='home'>
          <div className="text-wrapper-2" style={{alignItems:'center'}}>Home</div>
        </div>
        
        
        <img className="img" alt="Rectangle" src={img1} />
        <img className="rectangle-3" alt="Rectangle" src={img2} />
        <div className="group">
          <div className="overlap-group-2">
            <div className="text-wrapper-10">Contact Informations</div>
            <p className="p">Global Enbig Network Private Limited</p>
            <p className="element-floor">
              11/12, 4th Floor, Chateau D&#39;Ampa 37, Nelson Manickam RoadChennai - 600029(TN)
            </p>
           <div className="rectangle-4" />
         </div>
        </div>
      </div>
    </StyledHome>
  )
}
