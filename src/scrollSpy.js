import React, { Component } from "react";
import { MDBScrollspyBox, MDBScrollspyList, MDBScrollspyListItem, MDBScrollspyText, MDBTabContent,MDBCard,MDBView,MDBCardBody,MDBCardGroup,MDBIcon,MDBMask,MDBCardImage } from "mdbreact";
import './scrollSpy.css'

class ScrollSpy extends Component {
constructor(props) {
super(props);
this.state = {
active: 0,
sections: []
};

this.scrollSpyText = React.createRef();
}

componentDidMount() {
let sections = this.scrollSpyText.current.getElementsByTagName("h4");
this.setState({ sections });
}

handleScroll = e => {
const scrollTop = e.target.scrollTop;
const sections = this.state.sections;
const lastIndex = sections.length - 1;

for (let i = 0; i < lastIndex; i++) { if ((scrollTop> sections[i].offsetTop - 20) && (scrollTop < sections[i +
    1].offsetTop - 20)) { this.setState({ active: i }); } }; if (scrollTop> sections[lastIndex].offsetTop - 20)
    this.setState({ active: lastIndex });
    }

render() {
  return (
    <MDBScrollspyBox>
      <MDBScrollspyList className="d-flex justify-content-start mdb-color darken-3">
        <MDBScrollspyListItem href="#Javascript" active={this.state.active===0}>
          Javascript
        </MDBScrollspyListItem>
        <MDBScrollspyListItem href="#React" active={this.state.active===1}>
          React
        </MDBScrollspyListItem>
        <MDBScrollspyListItem href="#Python" active={this.state.active===2}>
          Python
        </MDBScrollspyListItem>
      </MDBScrollspyList>

      <MDBTabContent >
        <MDBScrollspyText onScroll={this.handleScroll} scrollSpyRef={this.scrollSpyText} className=' border white-text rgba-blue-grey-light' style={{"height" : "600px"}}>
          
          <h4 id="Javascript">Javascript</h4>
          <MDBCardGroup deck>
                
                {/* card 1 */}

                <MDBCard className=' mb-5 mdb-color darken-3' cascade>
                  <MDBView cascade hover>
                    <MDBCardImage
                      src='https://i.imgur.com/Ya5rZqw.png?2'
                      className='card-img-top'
                      alt='project one'
                    />
                    <a href='#!'>
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
                    
                      <a href='#!' className='waves-effect white-text'>
                     
                        Live Preview <MDBIcon icon='image white-text' />
                  
                      </a>
                    </div>


                    </h5>
                  </MDBCardBody>
                </MDBCard>

                

              {/* card 2 */}
                
                <MDBCard className='mb-5 mdb-color darken-3' cascade>
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

  <a href='#!' className='waves-effect white-text'>
  
    Live Preview <MDBIcon icon='image white-text' />

  </a>
</div>


</h5>
</MDBCardBody>
                </MDBCard>
              
              </MDBCardGroup>
          <h4 id="React">React</h4>
          <MDBCardGroup deck>

              {/* card 3 */}

                <MDBCard className='mb-5 mdb-color darken-3' cascade>
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
                    
                      <a href='#!' className='waves-effect white-text'>
                     
                        Live Preview <MDBIcon icon='image white-text' />
                  
                      </a>
                    </div>


                    </h5>
                  </MDBCardBody>
                </MDBCard>

                {/* card 4 */}

                <MDBCard className='mb-5 mdb-color darken-3' cascade>
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

  <a href='#!' className='waves-effect white-text'>
 
    Live Preview <MDBIcon icon='image white-text' />

  </a>
</div>


</h5>
</MDBCardBody>
</MDBCard>



              </MDBCardGroup>
          <h4 id="Python">Python</h4>
          <p>
            Section 3
          </p>
          
        </MDBScrollspyText>
      </MDBTabContent>
    </MDBScrollspyBox>
    );
  }
}

export default ScrollSpy;