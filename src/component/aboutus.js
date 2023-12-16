import React from 'react'
import styled from "styled-components";
import img1 from '../assest/about_img.png'

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
    height: 294px;<div
    style={{
      width: '100%',
      height: 155,
      left: 0,
      top: 621,
      
    }}
  />
    
    
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
export default function aboutus() {
  return (
    <StyledProduct>
      <div className="div-2">
        <div className="overlap-2" >
          <div className="text-wrapper-10" style={{alignItems:'center'}}>About Us</div>
        </div>

        <div
          style={{
            
            width: '100%',
            height: '100%',
            position: "relative",
            background: "white",
            
          }}
        >

          <img
            style={{
              opacity: "0.3",
              width: '100%',
              height: 'auto',
              left: 0,
              

              position:'absolute',
            }}
            src={img1}
          />
          <div style={{marginLeft:'15%',marginRight:'20%'}}>

          
            <div
              style={{
                
                color: "black",
                fontSize: 36,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
                paddingTop:'5%'
              }}
            >
              About Us
            </div>
            <div>
              <div
                style={{
                  width: 1289,
                
                  color: "black",
                  fontSize: 23,
                  fontFamily: "Inter",
                  fontWeight: 400,
                  wordWrap: "break-word",
                  padding: '3%'
                }}
              >
                Global Enbig Network Private Limited is a private Limited company registered
                under the Companies Act, 2013 promoted by a group of like-minded members of
                the Nair Community, who are all also members of Global Nair Seva Samaj,
                Delhi. The basic concept and objective of the company is to bring together
                techno-business knowledge and investment potential of Nair Community in a
                platform to find out funds for charitable activities and also to provide a
                reasonable return on investment. The meaning of the coined “ENBIG” is Nairs
                Business Investment Group. This is the first deneavoure in the
                above-mentioned concept. The main business objective of the Global Enbig
                network Private Limited is to cater to the needs of day-to-day customers and
                good requirements of the Nair Community spread all over India and plough
                back the economics of consumer good requirements of Nair Community spread
                all over India and plough back the economics of consumer goods market to the
                material development of the community. Consumer goods requirements will
                either be manufactured by self-help groups among the Nair community of
                affiliated state units of Global NSS and also outsourcing of goods from
                established Nair Entrepreneurs.
              </div>
              <div
                style={{
                  width: 1289,
                  
                  color: "black",
                  fontSize: 23,
                  fontFamily: "Inter",
                  fontWeight: 400,
                  wordWrap: "break-word",
                  paddingLeft: '3%'
                }}
              >
                This initiative was discussed in a webinar conducted by Global NSS for two
                days on January 22nd and 23rd titled “Nairs Global Network – A Road Map”.
                The Board of Directors of Global Enbig Network Private Limited are the
                office bearers of various Nair organizations working in different of India
                and also affiliated units of Global Nair Seva Samaj. Those who are ready to
                co-operate with this venture can contact the concerned person for further
                details.
              </div>
              <div
                style={{
                  width: 1289,
                  
                  color: "black",
                  fontSize: 23,
                  fontFamily: "Inter",
                  fontWeight: 400,
                  wordWrap: "break-word",
                  padding:'3%'
                }}
              >
                We invite all community loving people and well-wishers to join the customer
                network of this company to ensure to get quality consumer goods at your
                doorstep and participate in contributing to the charity of the community
                while you consume your day-to-day needs.
              </div>
            </div>
          </div>
          <div
            style={{width:'100%',backgroundColor:'#DFFE24'}}
          >
            <div
              style={{
                
                color: "black",
                fontSize: 36,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
                textAlign:'center',
                padding: '.5%'
              }}
            >
              Our Mission
            </div>
            <div
              style={{
                
                
                color: "black",
                fontSize: 21,
                fontFamily: "Inter",
                fontWeight: 400,
                wordWrap: "break-word",
                textAlign:'center',
                padding: '0.5%'
              }}
            >
              Plough back the consumer goods consumption economy to the welfare of the
              community.
            </div>
          </div>
          
          <div
            style={{
              
              color: "black",
              fontSize: 36,
              fontFamily: "Inter",
              fontWeight: 700,
              wordWrap: "break-word",
              textAlign:'center',
              margin: '1.5%'
            }}
          >
            List of Directors
            <hr style={{width:"5%",border: "2px #FF0000 solid"}}>
            </hr>
          </div>
          
          
          
        </div>













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
)
}
