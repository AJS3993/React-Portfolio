import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBIcon,
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
      <div id='blog'>

<MDBNavbar dark expand='md' fixed='top' className='z-depth-0' scrolling>
       
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
       
       
        <div className='pt-5'>
          
          
          <MDBRow className='pt-5 mt-3'>
          <MDBCol md='2' className='mx-2'><br/>
   <a href='/myfirstpost'><p id='postLink' className='text-center'>- My First Post -</p></a> <br/> 
   <a href='/lablife'><p id='postLink' className='text-center'>- Lab Life -</p></a> <br/> 
   <a href='/generalassembly'><p id='postLink' className='text-center'>- General Assembly -</p></a> 
           </MDBCol>
          
            <MDBCol md='9' >
              <div id='blogWrapper' className='border p-4 m-n3 rgba-black-light'>
         <MDBRow>
      <MDBCol md='4' className='p-2 '>
      
      <MDBCard className='border rgba-green-light white-text'>
          
      <a href='/myfirstpost'>
              
          <MDBCardImage
            top
            src='https://i.imgur.com/JK4H6wB.jpg'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          </a>
          <MDBCardBody>
     
              <p id='date' className='text-right white-text'>7/14/2020</p>
           
            <h5>My First Post</h5>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
           My first blog post! Its been a while that I wanted to start a blog. Here goes...
            </MDBCardText>
            <a href='/myfirstpost' className='white-text d-flex justify-content-end'>
              <h5 id='readMore'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
  
      </MDBCol>

      <MDBCol md='4' className='p-2 '>
      
      <MDBCard className='rgba-blue-light border'>
      <a href='/lablife'>
          <MDBCardImage
            top
            src='https://media.gettyimages.com/photos/woman-with-pcr-tubes-picture-id697550241'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          </a>
          <MDBCardBody>
          <p id='date' className='text-right white-text'>7/24/2020</p>
           
            <h5 className='white-text'>Lab Life</h5>
            <hr className="hr-light"/>
            <MDBCardText className='white-text'>
              Once upon a time a wanted to spend my whole life in the lab. Then I got there...
            </MDBCardText>
            <a href='/lablife' className='white-text d-flex justify-content-end'>
              <h5 id='readMore'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>

      </MDBCol>

   
      <MDBCol md='4' className='p-2'>
      
      <MDBCard className='rgba-red-light border white-text'>
          <a href='/generalassembly'>
          <MDBCardImage
            top
            src='https://i.imgur.com/WqRWfNJ.jpg'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          /></a>
          <MDBCardBody>
          <p id='date' className='text-right white-text'>8/2/2020</p>
           
            <h5>General Assembly</h5>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
              My first major step into the world of software engineering. I had no idea what I was getting into...
            </MDBCardText>
            <a href='/generalassembly' className='white-text d-flex justify-content-end'>
              <h5 id='readMore'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
     
      </MDBCol>
    
      
     


        <MDBCol md='1' className='p-2'>
      
      </MDBCol>
    </MDBRow>
    </div>
            </MDBCol>
          </MDBRow>
          
          </div>
       
        
 </section>
          
      </div>
    );
  }
}

export default Blog;


