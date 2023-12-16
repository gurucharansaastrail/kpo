

import React from "react";

import styled from "styled-components";
import img1 from "../assest/Rectangle 39.png";
import img2 from "../assest/Rectangle40.png"
import img3 from "../assest/Rectangle 41.png"
import img4 from "../assest/Rectangle 42.png"
import img5 from "../assest/Rectangle 43.png"
import img6 from "../assest/Rectangle 44.png"
import img7 from "../assest/Rectangle 45.png"
import img8 from "../assest/Rectangle 46.png"
import img9 from "../assest/Rectangle 47.png"
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
    height: 126px;
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
  
`;

export default function product() {
  return (
    <StyledProduct>
      <div className="div-2">
        <div className="overlap-2" >
          <div className="text-wrapper-10" style={{alignItems:'center'}}>Products</div>
        </div>
        <>
          <div style={{marginLeft:'15%',marginRight:'15%',marginTop:'3%',marginBottom:'5%'}}>
            <span
              style={{
                color: "#054E34",
                fontSize: 45,
                fontFamily: "Inter",
                fontWeight: 700,
                lineHeight: 2,
                wordWrap: "break-word"
              }}
            >
              Introductory Regular Products:
              <br />
            </span>
            <span
              style={{
                color: "black",
                fontSize: 31,
                fontFamily: "Inter",
                fontWeight: 500,
                lineHeight: 2,
                wordWrap: "break-word"
              }}
            >
              1. Coconut Oil (Sulphur &amp; Smoke free)
              <br />
              2. Virgin coconut oil (Virgin)
              <br />
              3. Tea Powder (Best quality, from Nilgiri)
              <br />
              4. Coffee Powder (Super quality from Coorg)
              <br />
              5. Chilli Powder Processed by Enbig Global from selected quality Chilli
              <br />
              6. Pappadam (Exclusively made for Global Enbig as per our quality
              standard)
              <br />
              7. Rice (Best selected quality)
              <br />
              8. Coconut Lamb Oil (Perfumed &amp; Ordinary)
              <br />
              Introductory on demand Products - 100% ശുദ്ധമായ വെളിച്ചെണ്ണയിൽ
              ഉണ്ടാക്കിയത്
              <br />
              1. പപ്പടവട (Pappadavada)
              <br />
              2. ശർക്കര വരട്ടി ഗ്ലോബൽ എൻബിഗ് നെറ്റ് വർക്ക്
              
              <div
                style={{
                 
                  color: "black",
                  fontSize: 31,
                  fontFamily: "Inter",
                  fontWeight: 500,
                  lineHeight: 2,
                  wordWrap: "break-word",
                  display:"flex",
                  justifyContent:"flex-end"
                }}
              >
                ഉണ്ണികൃഷ്ണൻ നായർ
                <br />
                എക്സിക്യുട്ടീവ് ഡയറക്ടർ
              </div>
            </span>
            <div style={{display:"flex",flexWrap:"wrap"}}>
              <div className="overlap-3" style={{width: '25%',boxSizing:"border-box",marginBottom:'5%'}}>
                <img  src={img1} style={{width:'95%'}}/>
                <div className="text-wrapper-11">FOX TAIL MILLET FLOUR</div>
              </div>
              <div className="overlap-6"style={{width: '25%',boxSizing:"border-box",marginBottom:'5%'}}>
                <img  src={img2} style={{width:'95%'}}/>
                <div className="text-wrapper-11">RAGI FLOUR</div>
              </div>
              <div className="overlap-8"style={{width: '25%',boxSizing:"border-box",marginBottom:'5%'}}>
                <img  src={img3} style={{width:'95%'}}/>
                <div className="text-wrapper-11">FILTER COFFEE POWDER</div>
              </div>
              <div className="overlap-10"style={{width: '25%',boxSizing:"border-box",marginBottom:'5%'}}>
                <img  src={img4} style={{width:'95%'}}/>
                <div className="text-wrapper-11">PURE LAMP OIL</div>
              </div>
              <div className="overlap-4"style={{width: '25%',boxSizing:"border-box",marginBottom:'5%'}}>
                <img  src={img5} style={{width:'95%'}}/>

                <div className="text-wrapper-12">PURE COCONUT OIL</div>
              </div>
              <div className="overlap-7"style={{width: '25%',boxSizing:"border-box",marginBottom:'5%'}}>
                <img  src={img6} style={{width:'95%'}}/>
                <div className="text-wrapper-14">VIRGIN COCONUT OIL</div>
              </div>
              <div className="overlap-9"style={{width: '25%',boxSizing:"border-box",marginBottom:'5%'}}>
                <img  src={img7} style={{width:'95%'}}/>
                <div className="text-wrapper-12">PURE COCONUT OIL</div>
              </div>
              <div className="overlap-11"style={{width: '25%',boxSizing:"border-box",marginBottom:'5%'}}>
                <img  src={img8} style={{width:'95%'}}/>
                <div className="text-wrapper-12">DUST TEA</div>
              </div>
              <div className="overlap-5"style={{width: '25%',boxSizing:"border-box",marginBottom:'5%'}}>
                <img  src={img9} style={{width:'95%'}}/>
                <div className="text-wrapper-13">RED CHILLI POWDER</div>
              </div>
            </div>
            
            
            
            
            
            
            
            
            
            
            
          </div>
        </>
        <div style={{backgroundColor:"#02584E",color:"#FFFFFF",display:"flex",justifyContent:'center'}}>
          <div style={{margin:'2%'}}>
            <div  className="footer" style={{fontSize:'36px',fontWeight:700,display:"flex",justifyContent:"space-evenly"}}>Contact Informations</div>
            <p className="footer" style={{fontSize:'32px',fontWeight:600,display:"flex",justifyContent:'center'}}>Global Enbig Network Private Limited</p>
            <p  className="footer" style={{fontSize:'25px',fontWeight:500,display:"flex",justifyContent:'center'}}>
              11/12, 4th Floor, Chateau D&#39;Ampa 37, Nelson Manickam  
            </p>
            <p className="footer" style={{fontSize:'25px',fontWeight:500,display:"flex",justifyContent:'center'}}>
              RoadChennai - 600029(TN)
            </p>
            <hr style={{border:"none",borderTop: '5px solid #000'}}></hr>
         </div>
         
        </div>
        
          
        
      </div>
    </StyledProduct>
  );
};

