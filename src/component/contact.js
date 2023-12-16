import React from 'react'
import styled from "styled-components";
import img1 from '../assest/con_img.png';
import icon1 from '../assest/Vector.png'
import icon2 from '../assest/Group 2.png'
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
  SEND MESSAGE
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
  & .div-21 {
    border: 1px solid #000;
    background-color: #fff;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    padding: 29px 38px 50px;
  }
  & .div-22 {
    color: rgba(0, 0, 0, 0.62);
    align-self: stretch;
    font: 700 32px Inter, sans-serif;
  }
  & .div-23 {
    justify-content: center;
    color: rgba(0, 0, 0, 0.58);
    letter-spacing: 2px;
    border: 1px solid #000;
    align-self: stretch;
    margin-top: 33px;
    align-items: start;
    padding: 27px 60px 27px 16px;
    font: 400 25px Almarai, sans-serif;
  }
  & .div-24 {
    justify-content: center;
    color: rgba(0, 0, 0, 0.58);
    letter-spacing: 2px;
    border: 1px solid #000;
    align-self: stretch;
    margin-top: 31px;
    align-items: start;
    padding: 25px 60px 25px 16px;
    font: 400 25px Almarai, sans-serif;
  }
  & .div-25 {
    justify-content: center;
    color: rgba(0, 0, 0, 0.58);
    letter-spacing: 1.6px;
    border: 1px solid #000;
    align-self: stretch;
    margin-top: 31px;
    align-items: start;
    padding: 29px 60px 112px 16px;
    font: 400 20px Almarai, sans-serif;
  }
  & .div-26 {
    justify-content: center;
    color: #fff;
    letter-spacing: 1.6px;
    white-space: nowrap;
    border-radius: 8px;
    border: 1px solid #d30000;
    background-color: #e04b4b;
    align-self: start;
    margin: 41px 0 13px;
    padding: 20px 21px;
    font: 400 20px Almarai, sans-serif;
  }
`;
export default function contact() {
  return (
    <StyledProduct>
      <div style={{width:'100%',height:"100%"}}>
        <div style={{width:'100%',height:'80%'}}>
          <img
            style={{
              opacity: "0.3",
              width: '100%',
              height: '100%',
              left: 0,
              

              position:'absolute',
            }}
            src={img1}
          />
          <div style={{
            display:'flex',
          }}>
            <div style={{flex: 1,marginTop:"5%"}}>
              <div>
                <div style={{fontSize:'63px',fontWeight:800,textAlign:'center'}}>
                  Contact Us 
                  <hr style={{width:"35%",border: "2px #000 solid",left:7}}>
                  </hr>
                </div>
                
                <div style={{margin:'20%'}}>
                  <div style={{paddingLeft:'20%',paddingBottom:'2%'}}>
                    <img src={icon1} style={{paddingRight:'2%'}}/>
                    +91 96777 84313
                  </div>
                  <div style={{paddingLeft:'20%'}}>
                    <img src={icon2} style={{paddingRight:'2%'}}/>
                    kpopragmatic@gmail.com
                  </div>
                  
                </div>
              </div>
            </div>
            <div style={{flex: 1,textAlign:'center',margin:'5%',background:'white'}}>
              <div className="div-21">
                <div className="div-22">Ask Your Queries</div>
                <div className="div-23">Your Email</div>
                <div className="div-24">Subject</div>
                <div className="div-25"> MESSAGE</div>
                <div className="div-26">SEND MESSAGE</div>
              </div> 
            </div>
          </div>

        </div>
        <div style={{backgroundColor:"#02584E",color:"#FFFFFF",display:"flex",justifyContent:'center',position:'relative'}}>
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
  )
}
