import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CarouselPage from './Carousel'

import { MDBNavbar,MDBRow,MDBIcon,MDBBtn,MDBCol,MDBNavbarNav,MDBNavbarBrand, MDBNavItem, MDBNavLink, MDBCardBody,MDBCardTitle,MDBCard,MDBCardImage,MDBCardText,MDBCardFooter,MDBTooltip } from 'mdbreact';



class Home extends React.Component {
 

  render() {
    return (
      <div className='rgba-yellow-slight'>
        
      
  
      <MDBNavbar expand='md' className='p-0 rgba-red-strong'>
      <MDBNavbarBrand>
      <MDBBtn size="sm" tag="a" floating social="fb" className='ml-3 soLink'>
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>

      <MDBBtn size="sm" tag="a" floating social="ins" className='soLink'>
        <MDBIcon fab icon="instagram" />
      </MDBBtn>
        </MDBNavbarBrand>
        <MDBNavbarNav right>
      <MDBNavItem>
        <MDBNavLink className='white-text mx-3 navLink' to="/">Log In</MDBNavLink>
      </MDBNavItem>
      
      <MDBNavItem>
        <MDBNavLink className='white-text navLink' to="/fav">Sign Up</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className='white-text mx-5 navLink' to="/add"><MDBIcon icon="shopping-cart" /></MDBNavLink>
      </MDBNavItem>
      </MDBNavbarNav>
     
      </MDBNavbar>
   
          
      <MDBRow className='rgba-yellow-slight titleBanner'>
      <MDBCol md="3">
      
          </MDBCol>
      <MDBCol md="2">
            <span className='tm1'>Accesorios</span>
          </MDBCol>
          <MDBCol md="2">
            <img src="https://i.imgur.com/DwFMuSm.png" className="img-fluid mt-n5 mb-n3" alt="" />
          </MDBCol>
          <MDBCol md="4" className='mx-n3'>
            <span className='tm2'>La Mexicana</span>
          </MDBCol>
          <MDBCol md="1">
      
          </MDBCol>
        </MDBRow>
  
        <MDBNavbar expand='md' className='mx-5 rounded rgba-red-strong z-depth-1'>
      
        <MDBNavbarNav>
      <MDBNavItem>
        <MDBNavLink className='white-text navLink' to="/">Bracelets</MDBNavLink>
      </MDBNavItem>
      
      <MDBNavItem>
        <MDBNavLink className='white-text navLink' to="/fav">Rings</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink className='white-text navLink' to="/add">Necklaces</MDBNavLink>
      </MDBNavItem>

      <MDBNavItem>
        <MDBNavLink className='white-text navLink' to="/add">Earings</MDBNavLink>
      </MDBNavItem>

      <MDBNavItem>
        <MDBNavLink className='white-text navLink' to="/add">More</MDBNavLink>
      </MDBNavItem>
      </MDBNavbarNav>
     
      </MDBNavbar>
    
          
      <CarouselPage/>

      <br/>  

 

      <div className='py-5 w-100 rgba-red-slight'>

      <MDBRow className='mx-5'>
        <MDBCol lg='4' md='12' className='mb-lg-0 mb-4'>
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src='https://i.imgur.com/C3qz3GH.jpg'
              top
              alt='sample photo'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='text-muted'>
                <h5>Camera</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>GoPro</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>1439$</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg='4' md='12' className='mb-lg-0 mb-4'>
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src='https://i.imgur.com/5ryOf0p.jpg?1'
              top
              alt='sample photo'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='text-muted'>
                <h5>Photography</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>Camera</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>1160$</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg='4' md='12' className='mb-lg-0 mb-4'>
          <MDBCard wide ecommerce>
            <MDBCardImage
              cascade
              src='https://i.imgur.com/hODwDgX.jpg?1'
              top
              alt='sample photo'
            />
            <MDBCardBody cascade className='text-center'>
              <a href='#!' className='text-muted'>
                <h5>Smartphone</h5>
              </a>
              <MDBCardTitle>
                <strong>
                  <a href='#!'>iPhone 6S</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</MDBCardText>
              <MDBCardFooter className='px-1'>
                <span className='float-left font-weight-bold'>
                  <strong>2160$</strong>
                </span>
                <span className='float-right'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3' />
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart' />
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
              </MDBCardFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </div>
      </div>
    );
  }
}
export default Home;