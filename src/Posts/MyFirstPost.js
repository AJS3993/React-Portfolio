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

class MyFirstPost extends React.Component {
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
           <MDBNavLink id='NB' className='m-3' to="/blog">  - Blog -
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
   <a href='/myfirstpost' className='disabled'><p id='postLinkA' className='text-center'>- My First Post -</p></a> <br/> 
   <a href='/lablife'><p id='postLink' className='text-center'>- Lab Life -</p></a> <br/> 
   <a href='/generalassembly'><p id='postLink' className='text-center'>- General Assembly -</p></a> 
           </MDBCol>
          
           <MDBCol md='9' >
              <div id='blogWrapper' className='border p-4 m-n3 rgba-black-light'>
       
      
      <MDBCard className='disabled grey lighten-4 p-2'>
          <MDBCardImage
            top
            src='https://i.imgur.com/KZR2K2Q.jpg?1'
            alt='MDBCard image cap'
          />
          <MDBCardBody className='px-5'>
     
              <p className='text-right grey-text'>7/14/2020</p>
           
            <h1>My First Post</h1>
            <hr />
            <p className='p-5'>
           My first blog post! Its been a while that I wanted to start a blog. Here goes...
<br/><br/>
It took me some time to take the action and setup a blog to share my development adventures.
 Well now that I am here let me write down what interests me as a developer.
 As a programmer I am always thrilled to solve problems and build something useful.
This blog would be a medium for me to share my experiences with various technologies and my efforts to build and contribute code to the open source community. 
<br/><br/>          
I may be relatively new to the world of software but I am excited and eager to learn.    
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

export default MyFirstPost;