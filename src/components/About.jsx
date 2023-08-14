import * as React from "react";
import { Typography, Container, Grid, Button, CardContent,} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Box from "@mui/material/Box";

import aboutSwiperImage1 from '../resources/images/new bulid/44PhillipStreet-1.jpg'
import aboutSwiperImage2 from '../resources/images/new bulid/44PhillipStreet-2.JPG'
import aboutSwiperImage3 from '../resources/images/new bulid/44PhillipStreet-3.JPG'
import aboutSwiperImage4 from '../resources/images/new bulid/44PhillipStreet-4.JPG'
import aboutSwiperImage5 from '../resources/images/new bulid/44PhillipStreet- (24).jpg'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";

import "../style.css";


const About = () => {
  return (
    <div>
      <Container id="about" maxWidth="lg" sx={{ width: "100%" }} >
      <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide><img src={aboutSwiperImage2} alt="Abcover"></img> </SwiperSlide>
          <SwiperSlide><img src={aboutSwiperImage1} alt="Ab2"></img> </SwiperSlide>
          <SwiperSlide><img src={aboutSwiperImage3} alt="Ab3"></img> </SwiperSlide>
          <SwiperSlide><img src={aboutSwiperImage4} alt="Ab4"></img> </SwiperSlide>
          <SwiperSlide><img src={aboutSwiperImage5} alt="Ab5"></img> </SwiperSlide>
        </Swiper>

        <Typography
          variant={"h2"}
          align={"left"}
          color={"textPrimary"}
          gutterBottom>
          About BYDH Construction
          </Typography>

          
          <CardContent>
        <Typography variant="h6" align="left" color="textSecondary" paragraph>
          Welcome to our company&apos;s profile! We are a leading construction
          company offering a wide range of services in new house construction,
          old house renovation, and house maintenance. With a team of highly
          skilled professionals, we have the expertise to bring your vision to
          life.
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="h6" align="left" color="textSecondary" paragraph>
          Our team comprises a number of licensed building practitioners (LBPs)
          who have undergone rigorous training and hold the necessary
          certifications. This ensures that our work is carried out by qualified
          individuals who are well-versed in the latest building standards and
          practices.
        </Typography>
      </CardContent>


        <Box sx={{ width: "100%", height: "100%" }}>
        
      </Box>
        
        
      </Container>
    </div>
  );
};

export default About;
