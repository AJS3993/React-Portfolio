import React from 'react';
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBView,MDBCardTitle,MDBCardBody,MDBCardGroup,MDBIcon,MDBMask,MDBBtn,MDBCardImage} from 'mdbreact';
import './HomePage.css';
  // import ScrollSpy from './scrollSpy';

class HomePage extends React.Component {
  

  render() {
    return (
      <div id='profile-ex' className='my-3'>
       
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
                  
                  <a href='https://github.com/AJS3993'>
                  <MDBBtn social="git" size="sm" className='px-2'>
                    <MDBIcon fab icon="github" className="pr-1" /> Github
                  </MDBBtn>
                  </a>

                <a href='https://www.linkedin.com/in/ajs3993/'>
                  <MDBBtn social="li" size="sm" className='px-2'>
                    <MDBIcon fab icon="linkedin-in" className="pr-1" /> Linkedin
                  </MDBBtn>
                </a>

                 <a href='https://i.imgur.com/lx1QKqW.png'>
                  <MDBBtn social="gplus" size="sm" className='px-2'> 
                  <MDBIcon far icon="file-alt" /> Resume
                  </MDBBtn>
                  </a>
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
            
            
            
            <MDBCol lg='8' md='12' className='text-center' >
              <div className='text-center mb-4'>
                <h1 className='white-text'>
                  
                  Projects
                 
                </h1>
              </div>
          
            {/* <ScrollSpy/> */}

            <MDBCardGroup deck>
                
                {/* card 1 */}

                <MDBCard className=' mb-5 m-4 mdb-color darken-3' narrow cascade>
                  <MDBView cascade hover>
                    <MDBCardImage
                      src='https://i.imgur.com/Ya5rZqw.png?2'
                      className='card-img-top'
                      alt='project one'
                    />
                    <a href='https://pizzatime465.herokuapp.com/' target="_blank">
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                  <MDBCardBody className='pb-2'>
                    <h2 className='card-title white-text'>Pizza Time</h2>
                    <hr color='white'/>
                    <p className='card-text white-text'>
                    Pizza Time is a tool for restaurant owners to create their menu and sell their food. Pizza Time is also for users to order food directly from the app. It was developed with Mongoose, Express and React.
                    </p>
                  
                  <hr color='white'/>
           
<h5 className='d-flex justify-content-between'>

                    <div>
                      
                       
                        <MDBIcon fab icon='js yellow-text' className='mr-2' />
                     
                
                        <MDBIcon fab icon='react cyan-text' />
                      
                    </div>
                    <div>
                    
                      <a href='https://pizzatime465.herokuapp.com/' className='waves-effect white-text' target="_blank">
                     
                        Live Preview <MDBIcon icon='image white-text' />
                  
                      </a>
                    </div>


                    </h5>
                  </MDBCardBody>
                </MDBCard>

                

              {/* card 2 */}
                
                <MDBCard className='mb-5 m-4 mdb-color darken-3' narrow cascade>
                  <MDBView cascade hover>
                    <img
                      src='https://i.imgur.com/QwLb70q.png?4'
                      className='img-fluid'
                      alt='project one'
                    />
                    <a href='https://groupie3993.herokuapp.com/' target="_blank">
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                  <MDBCardBody className='pb-2'>
                    <h2 className='card-title white-text'>Groupie</h2>
                    <hr color='white'/>
                    <p className='card-text white-text'>
                    keeping tabs on your favorite local artists just got a lot easier. Simply create an account and search events or artists in your area. Add your favorite artists and keep track of their upcoming events.
                    </p>
                    <hr color='white'/>
                    <h5 className='d-flex justify-content-between'>

<div>
  
   
    <MDBIcon fab  icon='python yellow-text md' />
 

  
</div>
<div>

  <a href='https://groupie3993.herokuapp.com/' className='waves-effect white-text' target="_blank">
  
    Live Preview <MDBIcon icon='image white-text' />

  </a>
</div>


</h5>
</MDBCardBody>
                </MDBCard>
              
              </MDBCardGroup>
     
          <MDBCardGroup deck>

              {/* card 3 */}

                <MDBCard className='mb-5 m-4 mdb-color darken-3' narrow cascade>
                  <MDBView cascade hover>
                    <img
                      src='https://i.imgur.com/YiT80Ww.png?1'
                      className='img-fluid'
                      alt='project one'
                    />
                    <a href='https://mongoose-flights3890654.herokuapp.com/' target="_blank">
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                  <MDBCardBody className='pb-2'>
                    <h2 className='card-title white-text'>Mongoose Flights</h2>
                    <hr color='white'/>
                    <p className='card-text white-text'>
                      A flight tracking app that uses MongoDB to hold data. I built it to practice so it has a bit more functionality than a real app would have.</p>
                    <hr color='white'/>
                    
                    <h5 className='d-flex justify-content-between'>

                    <div>
                      
                       
                        <MDBIcon fab icon='js yellow-text' className='mr-2' />
                     
                      
                    </div>
                    <div>
                    
                      <a href='https://mongoose-flights3890654.herokuapp.com/' className='waves-effect white-text' target="_blank">
                     
                        Live Preview <MDBIcon icon='image white-text' />
                  
                      </a>
                    </div>


                    </h5>
                  </MDBCardBody>
                </MDBCard>

                {/* card 4 */}

                <MDBCard className='mb-5 m-4 mdb-color darken-3' narrow cascade>
                  <MDBView cascade hover>
                    <img
                      src='https://i.imgur.com/r414M0G.png?2'
                      className='img-fluid'
                      alt='project one'
                    />
                    <a href='https://my-book-shelf789.herokuapp.com/' target="_blank">
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                  <MDBCardBody className='pb-2'>
                    <h2 className='card-title white-text'>My Book Shelf</h2>
                    <hr color='white'/>
                    <p className='card-text white-text'>
                    MyBookShelf is your own personal library tracker. Sort your books to help you remember which books you have read and which books you havent. </p>
                    <hr color='white'/>
                    
                    <h5 className='d-flex justify-content-between'>

<div>
  
   
    <MDBIcon fab icon='js yellow-text' className='mr-2' />
 
  
</div>
<div>

  <a href='https://my-book-shelf789.herokuapp.com/' className='waves-effect white-text' target="_blank">
 
    Live Preview <MDBIcon icon='image white-text' />

  </a>
</div>


</h5>
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

export default HomePage;