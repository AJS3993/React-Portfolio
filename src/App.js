import React from 'react';
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBView,MDBCardTitle,MDBCardBody,MDBCardGroup,MDBNavbar,MDBIcon,
  MDBMask,MDBBtn,MDBNavbarBrand,MDBNavbarNav} from 'mdbreact';
  import './App.css';

class App extends React.Component {
  

  render() {
    return (
      <div id='profile-ex' className='mb-5'>
       
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol lg='4' md='12'>
              <MDBCard  className='testimonial-card text-center m-4 mdb-color darken-3 z-depth-1' narrow>
              <MDBView cascade hover>
                <img
                  alt='THE LEGEND'
                  src='https://i.imgur.com/jWsMQyv.jpg?1'
                  className='z-depth-2 mx-auto w-100'
                />
                <a href='#!'>
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                <MDBCardBody>
                  <MDBCardTitle className='white-text'>
                    <strong>Andrew J Smith</strong>
                  </MDBCardTitle>
                  <h5 className='white-text'>
                    Software Engineer
                  </h5>
                  <p className='white-text'>Austin, TX</p>
                  <p className='card-text mt-3 white-text'>
                    Former health professional who fell in to the world of software
                  </p>
                  <hr color='white'/>
                  <MDBBtn floating tag='a' color='blue'>
                    <MDBIcon fab icon='github' className='white-text' />
                  </MDBBtn>
                  <MDBBtn floating tag='a' color='blue'>
                    <MDBIcon fab icon='linkedin' className='white-text' />
                  </MDBBtn>
                 
                  <MDBBtn color='blue'size='md'rounded>
                    Email
                    <MDBIcon icon='paper-plane' className='ml-2' />
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
              
              {/* Skills Card */}
              
              <MDBCard className='m-4 mdb-color darken-3'>
                <MDBCardBody className='text-center'>
                  <h5 className='white-text'>
                    <strong>Skills</strong>
                  </h5>

                  <hr color='white'/>

                  <MDBBtn color='blue'size='sm' rounded className='px-3'>
                    Bootstrap
                  </MDBBtn>
                  
                  <MDBBtn color='light-green'size='sm' rounded className='px-3'>
                    React
                  </MDBBtn>
                  
                  <MDBBtn color='orange'size='sm' rounded className='px-3'>
                    Javascript
                  </MDBBtn>
                 
                  <MDBBtn color='yellow'size='sm' rounded className='px-3'>
                    Python
                  </MDBBtn>
                  
                  <MDBBtn color='red'size='sm' rounded className='px-3'>
                    MongoDB
                  </MDBBtn>
                 
                  <MDBBtn color='indigo'size='sm' rounded className='px-3'>
                    SQL
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>

            </MDBCol>
            <MDBCol lg='8' md='12' className='text-center'>
              <div className='text-center mt-3 mb-5'>
                <h1 className='white-text'>
                  
                  <strong>PROJECTS</strong>
                  <hr color='white'/>
                </h1>
              </div>
              <MDBCardGroup deck>
                
                {/* card 1 */}

                <MDBCard className='mb-5 rgba-white-light' narrow>
                  <MDBView cascade hover>
                    <img
                      src='https://i.imgur.com/Ya5rZqw.png?2'
                      className='img-fluid'
                      alt='project one'
                    />
                    <a href='#!'>
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                  <MDBCardBody>
                    <h2 className='card-title white-text'>Pizza Time</h2>
                    <hr className='my-3' />
                    <p className='card-text white-text'>
                    Pizza Time is a tool for restaurant owners to create their menu and sell their food. Pizza Time is also for users to order food directly from the app. It was developed with Mongoose, Express, React, and Node. It is currently still a work in progress.
                    </p>
                  </MDBCardBody>
                  <hr className='m-3' />
                  <MDBCardBody className='my-n4 rgba-white-dark'>
                    <span className='float-left'>
                      
                        <MDBIcon fab size='2x' icon='js indigo-text' className='mr-2' />
                     
                
                        <MDBIcon fab size='2x' icon='react cyan-text' className='mr-0' />
            
                      <img className='img-fluid d-inline' width= "100px" src='https://i.imgur.com/PCtjYTY.png'/>
                    </span>
                    <span className='float-right'>
                      <a href='#!' className='waves-effect p-2 white-text animated pulse infinite'>
                        Live Preview <MDBIcon icon='image white-text' className='ml-1' />
                      </a>
                    </span>
                  </MDBCardBody>
                </MDBCard>

              {/* card 2 */}
                
                <MDBCard className='mb-5 rgba-white-light' narrow>
                  <MDBView cascade hover>
                    <img
                      src='https://i.imgur.com/QwLb70q.png?4'
                      className='img-fluid'
                      alt='project one'
                    />
                    <a href='#!'>
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                  <MDBCardBody>
                    <h2 className='card-title white-text'>Groupie</h2>
                    <hr className='my-3' />
                    <p className='card-text white-text'>
                    With this app, keeping tabs on your favorite local artists just got a lot easier. Simply create an account and search events or artists in your area. Add your favorite artists and keep track of their upcoming events. Add their events to your schedule. Never miss out on you favorite events again.
                    </p>
                  </MDBCardBody>
                  <hr className='m-3' />
                  <MDBCardBody className='my-n4 rgba-white-dark'>
                    <span className='float-left pt-2'>
        
                        <MDBIcon fab size='2x' icon='python amber-text' className='mr-2 mb-3' />
              
                    </span>
                    <span className='float-right'>
                      <a href='#!' className='waves-effect p-2 white-text animated pulse infinite'>
                        Live Preview <MDBIcon icon='image white-text' className='ml-1' />
                      </a>
                    </span>
                  </MDBCardBody>
                </MDBCard>
              
              </MDBCardGroup>



              <MDBCardGroup deck>

              {/* card 3 */}

                <MDBCard className='mb-5 rgba-white-light' narrow>
                  <MDBView cascade hover>
                    <img
                      src='https://i.imgur.com/YiT80Ww.png?1'
                      className='img-fluid'
                      alt='project one'
                    />
                    <a href='#!'>
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                  <MDBCardBody>
                    <h2 className='card-title white-text'>Mongoose Flights</h2>
                    <hr className='my-3' />
                    <p className='card-text white-text'>
                      A flight tracking app that uses MongoDB to hold data. I built it to practice with MongoDB so it has a bit more functionality than a real similar app would have.
                    </p>
                  </MDBCardBody>
                  <hr className='m-3' />
                  <MDBCardBody className='my-n4 rgba-white-dark'>
                    <span className='float-left'>
                      
                        <MDBIcon fab size='2x' icon='js indigo-text' className='mr-2' />
                      
                      
                      <img className='img-fluid d-inline' width= "100px" src='https://i.imgur.com/PCtjYTY.png'/>
                    </span>
                    <span className='float-right'>
                      <a href='#!' className='waves-effect p-2 white-text animated pulse infinite'>
                        Live Preview <MDBIcon icon='image white-text' className='ml-1' />
                      </a>
                    </span>
                  </MDBCardBody>
                </MDBCard>

                {/* card 4 */}

                <MDBCard className='mb-5 rgba-white-light' narrow>
                  <MDBView cascade hover>
                    <img
                      src='https://i.imgur.com/r414M0G.png?2'
                      className='img-fluid'
                      alt='project one'
                    />
                    <a href='#!'>
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                  <MDBCardBody>
                    <h2 className='card-title white-text'>My Book Shelf</h2>
                    <hr className='my-3' />
                    <p className='card-text white-text'>
                    MyBookShelf is your own personal library tracker. Sort your books to help you remember which books you have read and which books you haven't.
                    </p>
                  </MDBCardBody>
                  <hr className='m-3' />
                  <MDBCardBody className='my-n4 rgba-white-dark'>
                    <span className='float-left'>
                    
                        <MDBIcon fab size='2x' icon='js indigo-text' className='mr-2' />
              
                      <img className='img-fluid d-inline' width= "100px" src='https://i.imgur.com/PCtjYTY.png'/>
                    </span>
                    <span className='float-right'>
                      <a href='#!' className='waves-effect p-2 white-text animated pulse infinite'>
                        Live Preview <MDBIcon icon='image white-text' className='ml-1' />
                      </a>
                    </span>
                  </MDBCardBody>
                </MDBCard>



              </MDBCardGroup>

             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default App;