import * as React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Box from "@mui/material/Box";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";

import "../style.css";


const About = () => {
  return (
    <div>
      <Container id="about" maxWidth="lg">
      <Box sx={{ width: "100%", height: "40%" }}>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2 </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </Box>

        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          BYDH
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          SUNNY SUNNY SUNNY SUNNY SUNNY
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Qing Qing Qing
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Alan Alan Alan
        </Typography>
        
        <div>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Button1
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
              Button2
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default About;
