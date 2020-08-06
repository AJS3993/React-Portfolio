import React, { Component } from "react";
import { MDBScrollspyBox, MDBScrollspyList, MDBScrollspyListItem, MDBScrollspyText, MDBTabContent,MDBCard,MDBView,MDBCardBody,MDBCardGroup,MDBIcon,MDBMask,MDBCardImage } from "mdbreact";
import './scrollSpy.css'

class ScrollSpy extends Component {

render() {
  return (
    
      <>

          
        <MDBCardGroup>
                
                {/* card 1 */}

                <MDBCard className='m-3 rgba-black-light border' narrow cascade>
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
                
                <MDBCard className='m-3 rgba-black-light border' narrow cascade>
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
     
          <MDBCardGroup>

              {/* card 3 */}

                <MDBCard className='m-3 rgba-black-light border' narrow cascade>
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

                <MDBCard className='m-3 rgba-black-light border' narrow cascade>
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

          
     
          <MDBCardGroup>

              {/* card 5 */}

                <MDBCard className='m-3 rgba-black-light border' narrow cascade>
                  <MDBView cascade hover>
                    <img
                      src='https://i.imgur.com/akoHktO.png?1'
                      className='img-fluid'
                      alt='project one'
                    />
                    <a href='https://ajs3993.github.io/WordGame/' target="_blank">
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                  <MDBCardBody className='pb-2'>
                    <h2 className='card-title white-text'>HangMan</h2>
                    <hr color='white'/>
                    <p className='card-text white-text'>
                      Javascript Hangman. Still a work in progress</p>
                    <hr color='white'/>
                    
                    <h5 className='d-flex justify-content-between'>

                    <div>
                      
                       
                        <MDBIcon fab icon='js yellow-text' className='mr-2' />
                     
                      
                    </div>
                    <div>
                    
                      <a href='https://ajs3993.github.io/WordGame/' className='waves-effect white-text' target="_blank">
                     
                        Live Preview <MDBIcon icon='image white-text' />
                  
                      </a>
                    </div>


                    </h5>
                  </MDBCardBody>
                </MDBCard>

                {/* card 6 */}

                <MDBCard className='m-3 rgba-black-light border' narrow cascade>
                  <MDBView cascade hover>
                    <img
                      src='https://i.imgur.com/7pmldI3.png?1'
                      className='img-fluid'
                      alt='project one'
                    />
                    <a href='https://ajs3993.github.io/React-Rolodex/' target="_blank">
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                  <MDBCardBody className='pb-2'>
                    <h2 className='card-title white-text'>React Rolodex</h2>
                    <hr color='white'/>
                    <p className='card-text white-text'>
                      A rolodex made with react components. A searchbar allows you to sort through employee id cards.
                     </p>
                    <hr color='white'/>
                    
                    <h5 className='d-flex justify-content-between'>

<div>
  
<MDBIcon fab icon='js yellow-text' className='mr-2' />
                     
                
<MDBIcon fab icon='react cyan-text' />
 
  
</div>
<div>

  <a href='https://ajs3993.github.io/React-Rolodex/' className='waves-effect white-text' target="_blank">
 
    Live Preview <MDBIcon icon='image white-text' />

  </a>
</div>


</h5>
</MDBCardBody>
</MDBCard>



              </MDBCardGroup>
 
      
 </>
    );
  }
}

export default ScrollSpy;