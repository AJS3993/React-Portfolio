import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBRow,
  MDBCol,
  MDBMask,
  MDBView,
  MDBNavLink
} from 'mdbreact';
import './Landing.css';
import Particles from 'react-particles-js';

class Landing extends React.Component {
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
      <div id='landing'>
        <MDBNavbar dark expand='md' fixed='top' className='z-depth-0' transparent>
       
            <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse')} />
            <MDBCollapse
              id='navbarCollapse'
              isOpen={this.state.collapseID}
              navbar
            >
            
          <MDBNavbarNav left>
         
                  </MDBNavbarNav>
                <MDBNavbarNav right>

                <MDBNavItem>
                <MDBNavLink className='m-3' id='NB' to="/blog">
          - Blog -
        </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                <MDBNavLink className='m-3' id='NB' to="/projects">
         - Portfolio -
        </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                <MDBNavLink id='NBA' className='m-3' to="" disabled>
         - Home -
        </MDBNavLink>
                </MDBNavItem>
                
              </MDBNavbarNav>
              
            </MDBCollapse>
       
        </MDBNavbar>

        <section id='home'>
          <MDBView>

         


            <MDBMask
              className='d-flex justify-content-center align-items-center'
              overlay='gradient'
            >
              <MDBContainer className='h-100 justify-content-center align-items-center'>
                <MDBRow className='flex-center pt-5 mt-3'>
                  <MDBCol md='6' className='text-center text-md-right mb-5'>
                    <div  className='white-text'>
                    <h2>Andrew <span className='yellow-text font-weight-bold'>J</span> Smith </h2>
                   
                      <h6 id='glowie' className='yellow-text'>- Web Development -</h6>
                      <br />
                      
                    </div>
                  </MDBCol>

                  
                </MDBRow>
                
              </MDBContainer>
              
            </MDBMask>
           
  {/* <Particles
    params={{
      "style": {
        "height":"100%"
 },
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 2,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} /> */}
 
           
          </MDBView>
          
        </section>

       
          
      </div>
    );
  }
}

export default Landing;
