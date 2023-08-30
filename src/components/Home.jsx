import * as React from "react";
import {
  Typography,
  Container,
  Grid,
  Button,
  Divider,
  CardContent,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import Box from "@mui/material/Box";


import Innovation  from '../resources/images/innovation.png'
import Logo  from '../resources/images/BYDH.png'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";

import "../style.css";

const Home = () => {
  return (
    <Container id="home" maxWidth="lg" sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", height: "40%" }}>
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        BYDH Construction Ltd
      </Typography>
      </Box>
      
      
      <CardContent>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          paragraph placeholding
        </Typography>
      </CardContent>

    </Container>
  );
};

export default Home;
