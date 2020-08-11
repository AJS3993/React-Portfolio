import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBNavLink,
  MDBNavItem,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavbarToggler,
  MDBNavbar,
  MDBCardImage
} from 'mdbreact';
import './post.css';

class GeneralAssembly extends React.Component {
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
      <div id='blog1'>

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
           <MDBNavLink id='NB' className='m-3' to="/blog">
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
       <MDBNavLink to='/myfirstpost'><p id='postLink' className='text-center'>- My First Post -</p></MDBNavLink> <br/> 
       <MDBNavLink to='/lablife'><p id='postLink' className='text-center'>- Lab Life -</p></MDBNavLink> <br/> 
       <MDBNavLink to='/generalassembly' className='disabled'><p id='postLinkA' className='text-center'>- General Assembly -</p></MDBNavLink> 
               </MDBCol>
              
               <MDBCol md='9' >
                  <div id='blogWrapper' className='border p-4 m-n3 rgba-black-light'>
           
          
          <MDBCard className='disabled grey lighten-4 p-2'>      
             

   <MDBCardImage
            top
            src='https://i.imgur.com/WqRWfNJ.jpg'
            alt='MDBCard image cap'
          />
          <MDBCardBody className='px-5'>
     
              <p className='text-right grey-text'>8/2/2020</p>
           
            <h1>General Assembly</h1>
            <hr />
            <p className='p-5'>
            My first major step into the world of software engineering. I had no idea what I was getting into...
<br/><br/>
In October of 2019 I decided to enroll in General Assembly Software Engineering.
 I came in knowing almost nothing about software engineering.
  Fortunately, the atmosphere was extremely friendly and everyone (teachers/students/alumni) was almost always willing to drop what they were doing to help.
<br/><br/>          
  
</p>
          </MDBCardBody>
        </MDBCard>
  
    
    </div>
      
     
    </MDBCol>

  
</MDBRow>
      
      </div>
   
    
</section>
      
  </div>
    );
  }
}

export default GeneralAssembly;