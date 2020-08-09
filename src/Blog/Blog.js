import React from 'react';
import {
  MDBContainer,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBIcon,
  MDBBtn,
  MDBCardBody,
  MDBNavLink,
  MDBNavItem,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavbarToggler,
  MDBNavbar,
  MDBCardImage,
  MDBCardText
} from 'mdbreact';
import './Blog.css';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ''
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  render() {
    return (
      <div id='projects'>

<MDBNavbar dark expand='md' fixed='top' className='z-depth-0'>
       
       <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse')} />
       <MDBCollapse
         id='navbarCollapse'
         isOpen={this.state.collapseID}
         navbar
       >
       
     <MDBNavbarNav left>
     <h3 className='white-text'>Andrew <span id='glowie' className='font-weight-bold yellow-text'>J</span> Smith </h3>
             </MDBNavbarNav>
           <MDBNavbarNav right>
         
           <MDBNavItem>
           <MDBNavLink id='NBA' className='m-3' to="" disabled>
          - Blog -
        </MDBNavLink>
                </MDBNavItem> 

           <MDBNavItem>
           <MDBNavLink className='m-3' id='NB' to="/projects">
         - Portfolio -
        </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
           <MDBNavLink className='m-3' id='NB' to="/">
     - Home -
   </MDBNavLink>
           </MDBNavItem>
           
         </MDBNavbarNav>
         
       </MDBCollapse>
  
   </MDBNavbar>

   <section>
       
       
        <MDBContainer className='justify-content-around align-items-center pt-5'>
          
          
          <MDBRow className='justify-content-around pt-5 mt-3 w-100'>
           
            <MDBCol md='12' >
              <div className='border p-4 m-n3 rgba-black-light'>
         <MDBRow>
      <MDBCol md='4' className='p-2 '>
      
      <MDBCard>
          <MDBCardImage
            top
            src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon icon='share-alt' className='black-text' />
            </a>
            <MDBCardTitle>Card Title</MDBCardTitle>
            <hr />
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <a href='#!' className='black-text d-flex justify-content-end'>
              <h5>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
  
      </MDBCol>

      <MDBCol md='4' className='p-2 '>
      
      <MDBCard>
          <MDBCardImage
            top
            src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon icon='share-alt' className='black-text' />
            </a>
            <MDBCardTitle>Card Title</MDBCardTitle>
            <hr />
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <a href='#!' className='black-text d-flex justify-content-end'>
              <h5>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>

      </MDBCol>

   
      <MDBCol md='4' className='p-2 '>
      
      <MDBCard>
          <MDBCardImage
            top
            src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon icon='share-alt' className='black-text' />
            </a>
            <MDBCardTitle>Card Title</MDBCardTitle>
            <hr />
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <a href='#!' className='black-text d-flex justify-content-end'>
              <h5>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
     
      </MDBCol>
    
      
     


        <MDBCol md='4' className='p-2'>
      
      </MDBCol>
    </MDBRow>
    </div>
            </MDBCol>
          </MDBRow>
          
          </MDBContainer>
       
        
 </section>
          
      </div>
    );
  }
}

export default Blog;


