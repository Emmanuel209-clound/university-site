import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

import logo from "./assets/logo.png";
import london from "./assets/london.png";
import newyork from "./assets/newyork.png";
import washington from "./assets/washington.png";
import library from "./assets/library.png";
import cafeteria from "./assets/cafeteria.png";

function Home() {
  return (
    <>
      <Box
        sx={{
          minHeight: "80vh",
          background: "linear-gradient(135deg, #0d47a1, #1976d2)",
          color: "white",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Container>
          <img
            src={logo}
            alt="University Logo"
            style={{ width: "100px", marginBottom: "20px" }}
          />

          <Typography variant="h2" fontWeight="bold">
            Welcome to Our University
          </Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Excellence in Education, Innovation and Leadership
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/courses"
            sx={{ mt: 4 }}
          >
            Explore Courses
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: 7 }}>
        <Typography variant="h3" textAlign="center" fontWeight="bold">
          Our Campus
        </Typography>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={4}>
            <Card>
              <img src={london} alt="Campus" style={{ width: "100%" }} />
              <CardContent>
                <Typography variant="h5">London Campus</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <img src={newyork} alt="Campus" style={{ width: "100%" }} />
              <CardContent>
                <Typography variant="h5">New York Campus</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <img src={washington} alt="Campus" style={{ width: "100%" }} />
              <CardContent>
                <Typography variant="h5">Washington Campus</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ py: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img
              src={library}
              alt="University Library"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              World Class Library
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Our university provides modern facilities and learning
              resources to help students succeed academically.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              Modern Cafeteria
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Students can enjoy a comfortable environment with
              quality food and facilities.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src={cafeteria}
              alt="University Cafeteria"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

function About() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight="bold">
        About Our University
      </Typography>

      <Typography sx={{ mt: 3, lineHeight: 1.8 }}>
        Our university is committed to providing quality education,
        practical knowledge and an environment where students can
        develop their skills and prepare for successful careers.
      </Typography>
    </Container>
  );
}

function Courses() {
  const courses = [
    "Computer Science",
    "Biomedical Engineering",
    "Business Administration",
    "Mechanical Engineering",
    "Accounting",
    "Mass Communication",
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 5 }}
      >
        Our Courses
      </Typography>

      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {course}
                </Typography>

                <Typography sx={{ mt: 2 }}>
                  Develop professional knowledge and practical skills
                  for your future career.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function Contact() {
  return (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h3" fontWeight="bold">
        Contact Us
      </Typography>

      <Typography sx={{ mt: 4 }}>
        📧 Email: info@university.com
      </Typography>

      <Typography sx={{ mt: 2 }}>
        📞 Phone: +234 800 000 0000
      </Typography>

      <Typography sx={{ mt: 2 }}>
        📍 Address: University Road, Nigeria
      </Typography>
    </Container>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "45px",
              height: "45px",
              objectFit: "contain",
              marginRight: "15px",
            }}
          />

          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ flexGrow: 1 }}
          >
            MY UNIVERSITY
          </Typography>

          <Button color="inherit" component={Link} to="/">
            HOME
          </Button>

          <Button color="inherit" component={Link} to="/about">
            ABOUT
          </Button>

          <Button color="inherit" component={Link} to="/courses">
            COURSES
          </Button>

          <Button color="inherit" component={Link} to="/contact">
            CONTACT
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Box
        sx={{
          background: "#0d47a1",
          color: "white",
          textAlign: "center",
          py: 3,
          mt: 5,
        }}
      >
        <Typography>
          © 2026 My University. All Rights Reserved.
        </Typography>
      </Box>
    </BrowserRouter>
  );
}

export default App;