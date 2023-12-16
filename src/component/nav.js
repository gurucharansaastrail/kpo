import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assest/logo.png';
import Header from '../component/header'
import Footer from '../component/footer'
const Navbar = () => {
  return (
    <div style={{overflow:'hidden',position:'relative',width:'100%'}} >
      <div style={divStyle}>
          <h1>
              Global Enbig Network Private Limited
          </h1>
      </div>

      <div style={divStyle1}>
        <div style={{ margin: 0,width:'20%'}}>
          <img src= {logo} ></img>
        </div>
        <nav style={{ backgroundColor: '#1CC6EC', color: '#fff', padding: '15px 20px', display: 'flex',alignItems: 'center' ,width:"60%"}}>
          
            
            <div>
              <ul style={{ display: 'flex', listStyleType: 'none', gap: '65px', margin: 0, padding: 0 }}>
                <li>
                  <Link to="/" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold', transition: 'color 0.3s ease',fontSize: '20px' }}>Home</Link>
                </li>
                <li>
                  <Link to="/product" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold', transition: 'color 0.3s ease',fontSize: '20px' }}>Products</Link>
                </li>
                <li>
                  <Link to="/health" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold', transition: 'color 0.3s ease',fontSize: '20px' }}>Health Tips</Link>
                </li>
                <li>
                  <Link to="/business" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold', transition: 'color 0.3s ease',fontSize: '20px' }}>Business Opportunities </Link>
                </li>
                <li>
                  <Link to="/blog" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold', transition: 'color 0.3s ease',fontSize: '20px' }}>Blog</Link>
                </li>
                <li>
                  <Link to="/contact" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold', transition: 'color 0.3s ease',fontSize: '20px' }}>Contact</Link>
                </li>
                <li>
                  <Link to="/aboutus" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold', transition: 'color 0.3s ease',fontSize: '20px' }}>About Us</Link>
                </li>
                
              </ul>
            </div>
          
          
          
          
        </nav>
      </div>
      <div>
        <Outlet />
        
      </div>
    </div>
  );
};

const divStyle = {
  backgroundColor: '#1CC6EC',
  padding: '10px',
  width: '100%',
  border: '1px solid blue',
  display: 'flex', // Adding flex display to create a flex container
  justifyContent: 'space-around', // Adjust this property as per your need
  lexDirection:'column',
};
const divStyle1 = {
  backgroundColor: '#1CC6EC',
  padding: '10px',
  width: '100%',
  border: '1px solid blue',
  display: 'flex', // Adding flex display to create a flex container
  justifyContent: 'space-between', // Adjust this property as per your need
  lexDirection:'column'
};

const ulStyle = {
  listStyleType: 'none',
  display: 'flex', // Display list items in a row
  alignItem: 'center',
  gap: '20px',
  
  
};

export default Navbar;
// import React from "react";
// import styled from "styled-components";

// const StyledHome = styled.div`
//   background-color: #ffffff;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   width: 100%;

//   & .div {
//     background-color: #ffffff;
//     height: 3844px;
//     overflow: hidden;
//     position: relative;
//     width: 1920px;
//   }

//   & .overlap {
//     background-color: #1bc6eb;
//     border-bottom-style: solid;
//     border-bottom-width: 2px;
//     border-color: #000000;
//     height: 67px;
//     left: 0;
//     position: absolute;
//     top: 0;
//     width: 1920px;
//   }

//   & .text-wrapper {
//     color: #000000;
//     font-family: "Inter-Bold", Helvetica;
//     font-size: 28px;
//     font-weight: 700;
//     left: 704px;
//     letter-spacing: 0;
//     line-height: normal;
//     position: absolute;
//     top: 13px;
//   }

//   & .overlap-group {
//     height: 301px;
//     left: 0;
//     position: absolute;
//     top: 67px;
//     width: 1920px;
//   }

//   & .rectangle {
//     background-color: #1bc6eb;
//     height: 128px;
//     left: 0;
//     position: absolute;
//     top: 0;
//     width: 1920px;
//   }

//   & .IMG {
//     height: 89px;
//     left: 32px;
//     object-fit: cover;
//     position: absolute;
//     top: 20px;
//     width: 223px;
//   }

//   & .rectangle-2 {
//     background-color: #963333;
//     height: 175px;
//     left: 0;
//     position: absolute;
//     top: 126px;
//     width: 1920px;
//   }

//   & .text-wrapper-2 {
//     color: #ffffff;
//     font-family: "Inter-SemiBold", Helvetica;
//     font-size: 72px;
//     font-weight: 600;
//     left: 858px;
//     letter-spacing: 0;
//     line-height: normal;
//     position: absolute;
//     top: 168px;
//   }

//   & .text-wrapper-3 {
//     color: #000000;
//     font-family: "Inter-SemiBold", Helvetica;
//     font-size: 30px;
//     font-weight: 600;
//     left: 563px;
//     letter-spacing: 0;
//     line-height: normal;
//     position: absolute;
//     top: 35px;
//     white-space: nowrap;
//   }

//   & .text-wrapper-4 {
//     color: #000000;
//     font-family: "Inter-SemiBold", Helvetica;
//     font-size: 28px;
//     font-weight: 600;
//     left: 702px;
//     letter-spacing: 0;
//     line-height: normal;
//     position: absolute;
//     top: 37px;
//   }

//   & .text-wrapper-5 {
//     color: #000000;
//     font-family: "Inter-SemiBold", Helvetica;
//     font-size: 28px;
//     font-weight: 600;
//     left: 878px;
//     letter-spacing: 0;
//     line-height: normal;
//     position: absolute;
//     top: 37px;
//   }

//   & .text-wrapper-6 {
//     color: #000000;
//     font-family: "Inter-SemiBold", Helvetica;
//     font-size: 28px;
//     font-weight: 600;
//     left: 1078px;
//     letter-spacing: 0;
//     line-height: normal;
//     position: absolute;
//     top: 37px;
//   }

//   & .text-wrapper-7 {
//     color: #000000;
//     font-family: "Inter-SemiBold", Helvetica;
//     font-size: 28px;
//     font-weight: 600;
//     left: 1444px;
//     letter-spacing: 0;
//     line-height: normal;
//     position: absolute;
//     top: 37px;
//   }

//   & .text-wrapper-8 {
//     color: #000000;
//     font-family: "Inter-SemiBold", Helvetica;
//     font-size: 28px;
//     font-weight: 600;
//     left: 1558px;
//     letter-spacing: 0;
//     line-height: normal;
//     position: absolute;
//     top: 37px;
//   }

//   & .text-wrapper-9 {
//     color: #000000;
//     font-family: "Inter-SemiBold", Helvetica;
//     font-size: 28px;
//     font-weight: 600;
//     left: 1720px;
//     letter-spacing: 0;
//     line-height: normal;
//     position: absolute;
//     top: 37px;
//   }

//   & .img {
//     height: 1523px;
//     left: 355px;
//     object-fit: cover;
//     position: absolute;
//     top: 368px;
//     width: 1168px;
//   }

//   & .rectangle-3 {
//     height: 1574px;
//     left: 355px;
//     object-fit: cover;
//     position: absolute;
//     top: 1891px;
//     width: 1168px;
//   }

//   & .group {
//     height: 256px;
//     left: 0;
//     position: absolute;
//     top: 3588px;
//     width: 1926px;
//   }

//   & .overlap-group-2 {
//     background-color: #02584d;
//     height: 256px;
//     position: relative;
//     width: 1920px;
//   }

//   & .text-wrapper-10 {
//     color: #ffffff;
//     font-family: "Inter-Bold", Helvetica;
//     font-size: 36px;
//     font-weight: 700;
//     left: 772px;
//     letter-spacing: 0;
//     line-height: normal;
//     position: absolute;
//     top: 11px;
//   }

//   & .p {
//     color: #ffffff;
//     font-family: "Inter-SemiBold", Helvetica;
//     font-size: 32px;
//     font-weight: 600;
//     left: 673px;
//     letter-spacing: 0;
//     line-height: normal;
//     position: absolute;
//     top: 70px;
//   }

//   & .element-floor {
//     color: #ffffff;
//     font-family: "Inter-Medium", Helvetica;
//     font-size: 25px;
//     font-weight: 500;
//     left: 599px;
//     letter-spacing: 0;
//     line-height: normal;
//     position: absolute;
//     text-align: center;
//     top: 117px;
//     width: 721px;
//   }

//   & .rectangle-4 {
//     background-color: #02584e;
//     border-color: #000000;
//     border-top-style: solid;
//     border-top-width: 2px;
//     height: 53px;
//     left: 0;
//     position: absolute;
//     top: 203px;
//     width: 1920px;
//   }
// `;

// export default function nav() {
//   return (
//     <StyledHome>
//       <div className="div">
//         <div className="overlap">
//           <p className="text-wrapper">Global Enbig Network Private Limited</p>
//         </div>
//         <div className="overlap-group">
//           <div className="rectangle" />
//           <img className="IMG" alt="Img" src="IMG-20220904-wa0006-removebg-preview-140x56-1.png" />
//           <div className="rectangle-2" />
//           <div className="text-wrapper-2">Home</div>
//           <div className="text-wrapper-3">Home</div>
//           <div className="text-wrapper-4">Products</div>
//           <div className="text-wrapper-5">Health tips</div>
//           <div className="text-wrapper-6">Business opportunities</div>
//           <div className="text-wrapper-7">Blog</div>
//           <div className="text-wrapper-8">Contact</div>
//           <div className="text-wrapper-9">About Us</div>
//         </div>
//         <img className="img" alt="Rectangle" src="rectangle-51.png" />
//         <img className="rectangle-3" alt="Rectangle" src="rectangle-52.png" />
//         <div className="group">
//           <div className="overlap-group-2">
//             <div className="text-wrapper-10">Contact Informations</div>
//             <p className="p">Global Enbig Network Private Limited</p>
//             <p className="element-floor">
//               11/12, 4th Floor, Chateau D&#39;Ampa 37, Nelson Manickam RoadChennai - 600029(TN)
//             </p>
//             <div className="rectangle-4" />
//           </div>
//         </div>
//       </div>
//     </StyledHome>
//   );
// };