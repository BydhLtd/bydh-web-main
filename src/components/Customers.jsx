import * as React from "react";
import {Typography, Container, Grid, Button} from '@mui/material';

const Customers = () => {
    return (
        <div>
        <Container maxWidth='lg'>
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>BYDH</Typography>
            <Typography variant='h5' align='center' color="textSecondary" paragraph>Kainga Ora, Spotless, Citycare</Typography>

            <Typography variant='h5' align='center' color="textSecondary" paragraph>Kainga Ora, Spotless, Citycare</Typography>

            <Typography variant='h5' align='center' color="textSecondary" paragraph>Kainga Ora, Spotless, Citycare</Typography>
        <div>
            <Grid container spacing={3} justifyContent="center">
                <Grid item>
                    <Button variant="contained" color='primary'>BYDH</Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color='primary'>BYDH</Button>
                </Grid>
            </Grid>
        </div>
        </Container>
    </div>
    );
  };
  
  export default Customers;