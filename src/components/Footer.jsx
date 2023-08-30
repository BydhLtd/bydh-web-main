import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Container, Component, Typography,Button, Avatar, Hidden,} from '@mui/material';
import { MDBFooter, MDBRow, MDBCol, MDBIcon, MDBContainer, MDBBtn, } from 'mdb-react-ui-kit';
import GridLayout from 'react-grid-layout';
import "../style.css";
import SvgIcon from "@mui/material/SvgIcon";







export default function Footer() {
  const [value, setValue] = React.useState(0);

  const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;



  return (
  
      

    <MDBFooter className='FooterBox'>

      
      <MDBContainer>
      <section className=''>
        <h1 style={{ color: "white", textAlign: "left" }}>
         BYDH Construction Ltd
          </h1>
          <MDBRow className='mt-3'>
            <MDBCol md='2' lg='2' xl='2'>
            <h6 className='FooterHeader2Text'>Service</h6>
            <p>
              <a href='https://www.bydh.co.nz/#/Customers' className='text-reset'>
              New Build
              </a>
            </p>
            <p>
              <a href='https://www.bydh.co.nz/#/Customers' className='text-reset'>
                Maintance
              </a>
            </p>
            
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='FooterHeader2Text'>Contact</h6>
            <p>
              <MDBIcon icon="home"  />
              Unit 9，Kenepuru Drive, Porirua, New Zealand
            </p>
            <p>
              <MDBIcon icon="envelope" />
              info@bydh.co.nz
            </p>
            
            <p>
              <MDBIcon icon="print" /> 
              + 01 234 567 89
            </p>
          </MDBCol>
            </MDBRow>
        <MDBRow className='text-center text-dark'>
        <MDBContainer className='p-4 pb-0'>
        <section className=''>
          <p>
  
            <Button>
              Contact Now!
            </Button>
            <span> via email for any inquiries. </span>
          </p>
        </section>
      </MDBContainer>
          
      </MDBRow >

        </section>
      </MDBContainer>
        
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='www.bydh.co.nz'>
           www.bydh.co.nz
        </a>
      </div>  


    

  </MDBFooter>


  );
}
