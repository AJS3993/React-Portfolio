import React from 'react';
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBView,MDBCardTitle,MDBCardBody,MDBCardGroup,MDBCardFooter,MDBIcon,
  MDBMask,MDBInput,MDBAvatar,MDBBtn,MDBModal,MDBModalHeader,MDBModalBody,MDBModalFooter,MDBCardUp} from 'mdbreact';
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
              <MDBCard className='testimonial-card text-center mb-4 my-4 rgba-white-light'>
             
                <MDBAvatar
                  tag='img'
                  alt='THE LEGEND'
                  src='https://i.imgur.com/UcihNgj.jpg'
                  className='z-depth-1-half my-4 rounded-circle mx-auto w-50'
                />
                <MDBCardBody>
                  <MDBCardTitle>
                    <strong>Andrew J Smith</strong>
                  </MDBCardTitle>
                  <h5>
                    Web designer
                  </h5>
                  <p className='black-text'>Austin, TX</p>
                  <MDBBtn floating tag='a' color=''>
                    <MDBIcon fab icon='facebook' className='black-text' />
                  </MDBBtn>
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
              <MDBCard className='mb-4 rgba-white-strong'>
                <MDBCardBody className='text-center'>
                  <h5>
                    <strong>Achievements</strong>
                  </h5>

                  <hr className='my-3' />

                  <MDBBtn
                    color='light-blue'
                    size='sm'
                    rounded
                    className='px-3'
                    onClick={() => this.toggle('bootstrap')}
                  >
                    Bootstrap Master
                  </MDBBtn>
                  <MDBBtn
                    color='blue-grey'
                    size='sm'
                    rounded
                    className='px-3'
                    onClick={() => this.toggle('wordpress')}
                  >
                    WordPress Master
                  </MDBBtn>
                  <MDBBtn
                    size='sm'
                    rounded
                    className='px-3'
                    onClick={() => this.toggle('angular')}
                  >
                    Angular Master
                  </MDBBtn>
                  <MDBBtn
                    color='secondary'
                    size='sm'
                    rounded
                    className='px-3'
                    onClick={() => this.toggle('mdb')}
                  >
                    MDB Master
                  </MDBBtn>
                  <MDBBtn
                    color='deep-purple'
                    size='sm'
                    rounded
                    className='px-3'
                    onClick={() => this.toggle('community')}
                  >
                    Community contributor
                  </MDBBtn>
                  <MDBBtn
                    color='indigo'
                    size='sm'
                    rounded
                    className='px-3'
                    onClick={() => this.toggle('pro')}
                  >
                    MDB Pro User
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>

            </MDBCol>
            <MDBCol lg='8' md='12' className='text-center'>
              <div className='text-center mt-3 mb-5'>
                <h1 className='text-black'>
                  <strong>PR<MDBIcon icon="cog" spin fixed />JECTS</strong>
                </h1>
              </div>
              <MDBCardGroup deck>
                <MDBCard className='mb-5 rgba-white-light' narrow>
                  <MDBView cascade hover>
                    <img
                      src='https://i.imgur.com/Ya5rZqw.png'
                      className='img-fluid'
                      alt='project one'
                    />
                    <a href='#!'>
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                  <MDBCardBody>
                    <h4 className='card-title'>Project name</h4>
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </MDBCardBody>
                  <MDBCardFooter className='links-light'>
                    <span className='pull-left pt-2'>
                      <a href='#!'>
                        <MDBIcon icon='share-alt' className='mr-2' />
                      </a>
                      <a href='#!'>
                        <MDBIcon icon='heart' className='mr-2' />10
                      </a>
                    </span>
                    <span className='float-right'>
                      <a href='#!' className='waves-effect p-2'>
                        Live Preview <MDBIcon icon='image' className='ml-1' />
                      </a>
                    </span>
                  </MDBCardFooter>
                </MDBCard>

                <MDBCard className='mb-5 rgba-white-strong' narrow>
                  <MDBView cascade hover>
                    <img
                      src='https://i.imgur.com/FFdAPzX.png'
                      className='img-fluid'
                      alt='project one'
                    />
                    <a href='#!'>
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                  <MDBCardBody>
                    <h4 className='card-title'>Project name</h4>
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </MDBCardBody>
                  <MDBCardFooter className='links-light'>
                    <span className='pull-left pt-2'>
                      <a href='#!'>
                        <MDBIcon icon='share-alt' className='mr-2' />
                      </a>
                      <a href='#!'>
                        <MDBIcon icon='heart' className='mr-2' />15
                      </a>
                    </span>
                    <span className='float-right'>
                      <a href='#!' className='waves-effect p-2'>
                        Live Preview <MDBIcon icon='image' className='ml-1' />
                      </a>
                    </span>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCardGroup>

              <MDBCardGroup deck>
                <MDBCard className='mb-5 rgba-white-strong' narrow>
                  <MDBView cascade hover>
                    <img
                      src='https://i.imgur.com/OWmI7xu.png'
                      className='img-fluid'
                      alt='project one'
                    />
                    <a href='#!'>
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                  <MDBCardBody>
                    <h4 className='card-title'>Project name</h4>
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </MDBCardBody>
                  <MDBCardFooter className='links-light'>
                    <span className='pull-left pt-2'>
                      <a href='#!'>
                        <MDBIcon icon='share-alt' className='mr-2' />
                      </a>
                      <a href='#!'>
                        <MDBIcon icon='heart' className='mr-2' />21
                      </a>
                    </span>
                    <span className='float-right'>
                      <a href='#!' className='waves-effect p-2'>
                        Live Preview <MDBIcon icon='image' className='ml-1' />
                      </a>
                    </span>
                  </MDBCardFooter>
                </MDBCard>

                <MDBCard className='mb-5 rgba-white-strong' narrow>
                  <MDBView cascade hover>
                    <img
                      src='https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-landing.jpg'
                      className='img-fluid'
                      alt='project one'
                    />
                    <a href='#!'>
                      <MDBMask overlay='white-slight' />
                    </a>
                  </MDBView>
                  <MDBCardBody>
                    <h4 className='card-title'>Project name</h4>
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </MDBCardBody>
                  <MDBCardFooter className='links-light'>
                    <span className='pull-left pt-2'>
                      <a href='#!'>
                        <MDBIcon icon='share-alt' className='mr-2' />
                      </a>
                      <a href='#!'>
                        <MDBIcon icon='heart' className='mr-2' />36
                      </a>
                    </span>
                    <span className='float-right'>
                      <a href='#!' className='waves-effect p-2'>
                        Live Preview <MDBIcon icon='image' className='ml-1' />
                      </a>
                    </span>
                  </MDBCardFooter>
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