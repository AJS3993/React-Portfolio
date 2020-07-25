import React from 'react';
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBView,MDBCardTitle,MDBCardBody,MDBCardGroup,MDBCardFooter,MDBIcon,
  MDBMask,MDBInput,MDBAvatar,MDBBtn,MDBModal,MDBModalHeader,MDBModalBody,MDBModalFooter} from 'mdbreact';
  import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bootstrap: false,
      wordpress: false,
      angular: false,
      mdb: false,
      community: false,
      pro: false,
      send: false,
      submit: false
    };
  }

  toggle = item => {
    console.log(item);
    this.setState({
      [item]: !this.state[item]
    });
  };

  renderModal = type => {
    const string =
      type === 'bootstrap'
        ? 'Bootstrap Master'
        : type === 'wordpress'
        ? 'Wordpress Master'
        : type === 'angular'
        ? 'Angular Master'
        : type === 'mdb'
        ? 'MDB Master'
        : type === 'community'
        ? 'Community Contributor'
        : type === 'pro'
        ? 'MDB Pro User'
        : type === 'send'
        ? 'New Message'
        : type === 'submit'
        ? 'Submit new project'
        : false;
    const icon =
      type === 'send' ? 'envelope-o' : type === 'submit' ? 'file' : 'trophy';
    const lBtnTxt = type === 'send' ? 'cancel' : 'close';
    const rBtnTxt =
      type === 'send' ? 'send' : type === 'submit' ? 'submit ' : 'Go to';
    const rBtnIcon =
      type === 'send'
        ? 'paper-plane'
        : type === 'submit'
        ? 'check'
        : 'arrow-right';

    return (
      <MDBModal
        isOpen={this.state[type]}
        toggle={() => this.toggle(type)}
        cascading
      >
        <MDBModalHeader
          toggle={() => this.toggle(type)}
          className='light-blue darken-3 white-text'
        >
          <MDBIcon icon={icon} className='mr-2' /> {string}
        </MDBModalHeader>
        <MDBModalBody>
          {type === 'send' ? (
            <MDBInput type='textarea' label='Your message' rows={15} />
          ) : type === 'submit' ? (
            <div>
              <MDBInput type='text' label='Project name' />
              <MDBInput type='text' label='Project URL address' />
              <MDBInput type='text' label='Image URL' />
              <MDBInput type='textarea' label='Description' />
            </div>
          ) : (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              quibusdam modi veritatis non accusamus distinctio consequuntur
              aliquam, assumenda tempore in illum aspernatur quia, minus ex!
              Eius tenetur praesentium, consectetur quod!
            </p>
          )}
        </MDBModalBody>
        <MDBModalFooter center>
          <MDBBtn outline color='primary' onClick={() => this.toggle(type)}>
            {lBtnTxt}
          </MDBBtn>
          <MDBBtn color='primary'>
            {rBtnTxt} <MDBIcon icon={rBtnIcon} className='ml-1' />
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    );
  };
  render() {
    return (
      <div id='profile-ex' className='mb-5'>
        {this.renderModal('wordpress')}
        {this.renderModal('bootstrap')}
        {this.renderModal('angular')}
        {this.renderModal('mdb')}
        {this.renderModal('community')}
        {this.renderModal('pro')}
        {this.renderModal('send')}
        {this.renderModal('submit')}

        <MDBContainer fluid>
          <MDBRow>
            <MDBCol lg='4' md='12'>
              <MDBCard  className='testimonial-card text-center m-4 rgba-grey-light z-depth-1'>
              <div className='p-2 border border-light' style={{
            backgroundImage:
              "url('https://i.imgur.com/tAKxpRX.jpg')", backgroundSize: "cover"
          }}>
                <MDBAvatar
                  tag='img'
                  alt='THE LEGEND'
                  src='https://i.imgur.com/UcihNgj.jpg'
                  className='z-depth-1-half my-4 mx-auto w-50'
                />
                </div>
                <MDBCardBody className='rgba-white-light border-top border-light'>
                  <MDBCardTitle>
                    <strong>Andrew J Smith</strong>
                  </MDBCardTitle>
                  <h5>
                    Web designer
                  </h5>
                  <p className='black-text'>Austin, TX</p>
                  <MDBBtn floating tag='a' color=''>
                    <MDBIcon fab icon='github' className='black-text' />
                  </MDBBtn>
                  <MDBBtn floating tag='a' color=''>
                    <MDBIcon fab icon='linkedin' className='black-text' />
                  </MDBBtn>
                  <p className='card-text mt-3 black-text'>
                    Former health professional who fell in to the world of software
                  </p>
                  <MDBBtn
                    color='info'
                    size='md'
                    rounded
                    onClick={() => {
                      this.toggle('send');
                    }}
                  >
                    Contact
                    <MDBIcon icon='paper-plane' className='ml-2' />
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className='mb-4 rgba-white-light'>
                <MDBCardBody className='text-center'>
                  <h5>
                    <strong>Skills</strong>
                  </h5>

                  <hr className='my-3' />

                  <MDBBtn
                    color='light-blue'
                    size='sm'
                    rounded
                    className='px-3'
                    onClick={() => this.toggle('bootstrap')}
                  >
                    Bootstrap
                  </MDBBtn>
                  <MDBBtn
                    color='blue-grey'
                    size='sm'
                    rounded
                    className='px-3'
                    onClick={() => this.toggle('wordpress')}
                  >
                    React
                  </MDBBtn>
                  <MDBBtn
                    size='sm'
                    rounded
                    className='px-3'
                    onClick={() => this.toggle('angular')}
                  >
                    Javascript
                  </MDBBtn>
                  <MDBBtn
                    color='secondary'
                    size='sm'
                    rounded
                    className='px-3'
                    onClick={() => this.toggle('mdb')}
                  >
                    Python
                  </MDBBtn>
                  <MDBBtn
                    color='deep-purple'
                    size='sm'
                    rounded
                    className='px-3'
                    onClick={() => this.toggle('community')}
                  >
                    MongoDB
                  </MDBBtn>
                  <MDBBtn
                    color='indigo'
                    size='sm'
                    rounded
                    className='px-3'
                    onClick={() => this.toggle('pro')}
                  >
                    SQL
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>

            </MDBCol>
            <MDBCol lg='8' md='12' className='text-center'>
              <div className='text-center mt-3 mb-5'>
                <h1 className='text-white'>
                  <strong>PR<MDBIcon icon="cog" spin fixed />JECTS</strong>
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
                    <h2 className='card-title'>Pizza Time</h2>
                    <hr className='my-3' />
                    <p className='card-text black-text'>
                    Pizza Time is a tool for restaurant owners to create their menu and sell their food. Pizza Time is also for users to order food directly from the app. It was developed with Mongoose, Express, React, and Node. It is currently still a work in progress.
                    </p>
                  </MDBCardBody>
                  <hr className='m-3' />
                  <MDBCardBody className='my-n4 rgba-white-dark'>
                    <span className='float-left'>
                      <a href='#!'>
                        <MDBIcon fab size='2x' icon='js indigo-text' className='mr-2' />
                      </a>
                      <a href='#!'>
                        <MDBIcon fab size='2x' icon='react cyan-text' className='mr-0' />
                      </a>
                      <img className='img-fluid d-inline' width= "100px" src='https://i.imgur.com/PCtjYTY.png'/>
                    </span>
                    <span className='float-right'>
                      <a href='#!' className='waves-effect p-2 black-text animated pulse infinite'>
                        Live Preview <MDBIcon icon='image black-text' className='ml-1' />
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
                    <h2 className='card-title'>Groupie</h2>
                    <hr className='my-3' />
                    <p className='card-text black-text'>
                    With this app, keeping tabs on your favorite local artists just got a lot easier. Simply create an account and search events or artists in your area. Add your favorite artists and keep track of their upcoming events. Add their events to your schedule. Never miss out on you favorite events again.
                    </p>
                  </MDBCardBody>
                  <hr className='m-3' />
                  <MDBCardBody className='my-n4 rgba-white-dark'>
                    <span className='float-left pt-2'>
                      <a href='#!'>
                        <MDBIcon fab size='2x' icon='python amber-text' className='mr-2 mb-3' />
                      </a>
                    </span>
                    <span className='float-right'>
                      <a href='#!' className='waves-effect p-2 black-text animated pulse infinite'>
                        Live Preview <MDBIcon icon='image black-text' className='ml-1' />
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
                    <h2 className='card-title'>Mongoose Flights</h2>
                    <hr className='my-3' />
                    <p className='card-text black-text'>
                      A flight tracking app that uses MongoDB to hold data. I built it to practice with MongoDB so it has a bit more functionality than a real similar app would have.
                    </p>
                  </MDBCardBody>
                  <hr className='m-3' />
                  <MDBCardBody className='my-n4 rgba-white-dark'>
                    <span className='float-left'>
                      <a href='#!'>
                        <MDBIcon fab size='2x' icon='js indigo-text' className='mr-2' />
                      </a>
                      
                      <img className='img-fluid d-inline' width= "100px" src='https://i.imgur.com/PCtjYTY.png'/>
                    </span>
                    <span className='float-right'>
                      <a href='#!' className='waves-effect p-2 black-text animated pulse infinite'>
                        Live Preview <MDBIcon icon='image black-text' className='ml-1' />
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
                    <h2 className='card-title'>My Book Shelf</h2>
                    <hr className='my-3' />
                    <p className='card-text black-text'>
                    MyBookShelf is your own personal library tracker. Sort your books to help you remember which books you have read and which books you haven't.
                    </p>
                  </MDBCardBody>
                  <hr className='m-3' />
                  <MDBCardBody className='my-n4 rgba-white-dark'>
                    <span className='float-left'>
                      <a href='#!'>
                        <MDBIcon fab size='2x' icon='js indigo-text' className='mr-2' />
                      </a>
                      <img className='img-fluid d-inline' width= "100px" src='https://i.imgur.com/PCtjYTY.png'/>
                    </span>
                    <span className='float-right'>
                      <a href='#!' className='waves-effect p-2 black-text animated pulse infinite'>
                        Live Preview <MDBIcon icon='image black-text' className='ml-1' />
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