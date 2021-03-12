import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MDBBtn,MDBNavbar, MDBNavbarNav, MDBNavItem, MDBIcon, MDBCard, MDBCardTitle, MDBDropdownItem, MDBNavLink, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBFormInline} from "mdbreact";
import './HomePage.css';
class DoubleNavigationPage extends React.Component {
  

  render() {
    

    return (
      <Router>

        <div className="">
          

     
      
  


  <div className='midRow d-flex justify-content-center align-items-center flex-column'>



 

  <MDBRow className='w-100 d-flex'>
<MDBCol size='1' c></MDBCol>
<MDBCol size='10'>

<MDBNavbar expand='md'  className='z-depth-0 px-5 white text-nowrap'>
       <MDBNavbarNav className='m-0 p-0' left>
         <MDBNavItem className='m-0 p-0'>
         
           <img className='lemon p-3 m-0' src='https://i.imgur.com/aLgjcZq.png'/>

         </MDBNavItem>

         <MDBNavItem className='d-flex align-items-end motto m-0 px-0'>
                    Your main squeeze for roller skates
         </MDBNavItem>

       </MDBNavbarNav>

<MDBNavbarNav>
<MDBNavItem className='mx-n5'>
              <MDBFormInline waves className='w-100 px-5 mr-5 ml-n5'>
                <div className="md-form my-0 w-100 px-0">
                <MDBIcon size='lg' icon="search" />
                  <input className="form-control border border-dark topNav  w-100" type="text" placeholder="What are you looking for?" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
            </MDBNavbarNav>
           
            <MDBNavbarNav right>
           
           <MDBNavItem>
           <MDBNavLink className='topNav2' to="#!">
             <MDBIcon icon="user" />
           </MDBNavLink>
           </MDBNavItem>
           
           
            <MDBNavItem>
              <MDBNavLink className='topNav' to="#!">Sign in</MDBNavLink>
            </MDBNavItem>

                  
            <MDBNavItem>
           <MDBNavLink className='topNav2' to="#!">
         or
           </MDBNavLink>
           </MDBNavItem>


            <MDBNavItem >
              <MDBNavLink className='topNav' to="#!">Register</MDBNavLink>
            </MDBNavItem>

           
            <MDBNavItem className='topNav'>
           <MDBNavLink className='topNav2' to="#!">
       |
           </MDBNavLink>
           </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink className='topNav' to="#!">
              <MDBIcon icon="shopping-cart" />(0)
              </MDBNavLink>
            </MDBNavItem>


</MDBNavbarNav>

       </MDBNavbar>




<MDBCard className='w-100 z-depth-0'>
  <MDBNavbar expand='md'  className='z-depth-0 bt2 py-0'>
  <MDBNavItem active>
              <MDBNavLink to="#!" className='homeBtn'>Home</MDBNavLink>
            </MDBNavItem>


  <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret className='black-text'>
                  <span className="mr-2 dropDown">Skates</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                 
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>


            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret className='black-text'>
                  <span className="mr-2 dropDown">Wheels</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                 
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>


            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret className='black-text'>
                  <span className="mr-2 dropDown">Hardware</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                 
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>


            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret className='black-text'>
                  <span className="mr-2 dropDown">Protective Gear</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                 
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>


            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret className='black-text'>
                  <span className="mr-2 dropDown">Apparel</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                 
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>


            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret className='black-text'>
                  <span className="mr-2 dropDown">Accessories</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                 
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>


       </MDBNavbar>
      
          <div className='text-white text-center pt-5 px-4'>
            <div>
           
    
           
              <img className='w-100' src='https://i.imgur.com/bPPUB3c.png?1'/>
 
            </div>
          </div>
        </MDBCard>

</MDBCol>
<MDBCol size='1'></MDBCol>
 


  
    
    </MDBRow>

  </div>




 
 
 </div>

</Router>
    );
  }
}

export default DoubleNavigationPage;