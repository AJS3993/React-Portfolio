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
  MDBNavbar
} from 'mdbreact';
import './post.css';

class LabLife extends React.Component {
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
   <a href='/myfirstpost'><p id='postLink' className='text-center'>- My First Post -</p></a> <br/> 
   <a href='/lablife' className='disabled'><p id='postLinkA' className='text-center'>- Lab Life -</p></a> <br/> 
   <a href='/generalassembly'><p id='postLink' className='text-center'>- General Assembly -</p></a> 
           </MDBCol>
          
           <MDBCol md='9' >
              <div id='blogWrapper' className='border p-4 m-n3 rgba-black-light'>
       
      
      <MDBCard className='disabled grey lighten-4 p-2'>      
          <MDBCardBody className='px-5'>
     
              <p className='text-right grey-text'>7/24/2020</p>
           
            <h1>Lab Life</h1>
            <hr />
            <p className='p-5'>
            I have both a masters and a bachelors in molecular biology. 
            After graduating, I worked in a genetic research laboratory.
            It was great ...at first

            <br/><br/>
            I quickly found that I enjoyed working with the machines more than running the tests. 
            I would often spend more than 8 hour a day around around various human biological samples including stool samples.
             As you can imagine, it got old fast.
             <br/><br/>
             I am glad there are people willing to work in places like that.
              Im really glad none of those peole are me.
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

export default LabLife;