import React from 'react'
import styled from "styled-components";
const StyledProduct = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & .div-2 {
    background-color: #ffffff;
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  & .div-wrapper {
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

  & .p {
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

  & .overlap-2 {
    background-color: #963333;
    height: 128px;
    width: 100%;
    

    
  }

  & .text-wrapper-10 {
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

  & .overlap-3 {
    background-image: url("../assest/Rectangle40.png");
    background-size: 80% 80%;
    height: 294px;
    
    
    
  }

  & .text-wrapper-11 {
    color: #896711;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 28px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    
    bottom: 0;
  }

  & .overlap-4 {
    background-image: url(./rectangle-43.png);
    background-size: 80% 80%;
    height: 294px;
    
    
    top: 2026px;
    width: 343px;
  }

  & .text-wrapper-12 {
    color: #896711;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 28px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    
  }

  & .overlap-5 {
    background-image: url(./rectangle-47.png);
    background-size: 100% 100%;
    height: 294px;
    
    
    top: 2448px;
    width: 343px;
  }

  & .text-wrapper-13 {
    color: #896711;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 28px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    
  }

  & .overlap-6 {
    background-image: url(../assest/Rectangle40.png);
    background-size: 100% 100%;
    height: 294px;
    
    
    top: 1604px;
    width: 343px;
  }

  & .overlap-7 {
    background-image: url(./rectangle-44.png);
    background-size: 100% 100%;
    height: 294px;
    
    
    top: 2026px;
    width: 343px;
  }

  & .text-wrapper-14 {
    color: #896711;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 28px;
    font-weight: 600;
    left: 16px;
    letter-spacing: 0;
    line-height: normal;
    
  }

  & .rectangle-2 {
    background-color: #d9d9d9;
    height: 294px;
    left: 573px;
    position: absolute;
    top: 2448px;
    width: 343px;
  }

  & .overlap-8 {
    background-image: url(./rectangle-41.png);
    background-size: 100% 100%;
    height: 294px;
    
    
    top: 1604px;
    width: 343px;
  }

  & .overlap-9 {
    background-image: url(./rectangle-45.png);
    background-size: 100% 100%;
    height: 294px;
    
    
    top: 2026px;
    width: 343px;
  }

  & .rectangle-3 {
    background-color: #d9d9d9;
    height: 294px;
    left: 1004px;
    position: absolute;
    top: 2448px;
    width: 343px;
  }

  & .overlap-10 {
    background-image: url(./rectangle-42.png);
    background-size: 100% 100%;
    height: 294px;
    
    
    top: 1604px;
    width: 343px;
  }

  & .overlap-11 {
    background-image: url(./rectangle-46.png);
    background-size: 100% 100%;
    height: 294px;
    
    
    top: 2026px;
    width: 343px;
  }

  & .rectangle-4 {
    background-color: #d9d9d9;
    height: 294px;
    left: 1435px;
    position: absolute;
    top: 2448px;
    width: 343px;
  }
  & .footer {
    font-family: "Inter-Bold", Helvetica;
  }
  & .footer {
    font-family: "Inter-Bold", Helvetica;
  }
  
`;
export default function blog() {
  return (
    <StyledProduct>
      <div className="div-2">
        <div >
          <div className="overlap-2"  >
            <div className="text-wrapper-10" style={{alignItems:'center'}}>Blog </div>
            
          </div>
          <div style={{height:'100%',position:'relative',lineHeight: 50,color:'#FFFFFF'}}>
              gg
          </div>
          <div style={{backgroundColor:"#02584E",color:"#FFFFFF",display:"flex",justifyContent:'center',height:'20%'}}>
            <div style={{margin:'2%'}}>
              <div  className="footer" style={{fontSize:'36px',fontWeight:700,display:"flex",justifyContent:"space-evenly"}}>Contact Informations</div>
              <p className="footer" style={{fontSize:'32px',fontWeight:600,display:"flex",justifyContent:'center'}}>Global Enbig Network Private Limited</p>
              <p  className="footer" style={{fontSize:'25px',fontWeight:500,display:"flex",justifyContent:'center'}}>
                11/12, 4th Floor, Chateau D&#39;Ampa 37, Nelson Manickam  
              </p>
              <p className="footer" style={{fontSize:'25px',fontWeight:500,display:"flex",justifyContent:'center'}}>
                RoadChennai - 600029(TN)
              </p>
              <hr style={{border:"none",borderTop: '3px solid #000'}}></hr>
            </div>
          
          </div>
        </div>
        
      </div>
    </StyledProduct>
  )
}
