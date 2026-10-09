import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Card,
  CardContent,
  TextField,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";

import logo from "./assets/logo.png";
import london from "./assets/london.png";
import newyork from "./assets/newyork.png";
import washington from "./assets/washington.png";
import library from "./assets/library.png";
import cafeteria from "./assets/cafeteria.png";
import background from "./assets/background.jpg"

const primaryColor = "#0b3d91";

// IMAGE WITH HOVER NAME
function ImageWithHover({ src, alt, height = 230, sx = {} }) {
  const [showName, setShowName] = useState(false);

  return (
    <Box
      onClick={() => setShowName((previous) => !previous)}
      sx={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        height,
        ...sx,

        "@media (hover: hover) and (pointer: fine)": {
          "&:hover .image-name-overlay": {
            opacity: 1,
          },
        },
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      <Box
        className="image-name-overlay"
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(4, 9, 30, 0.65)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: showName ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            fontWeight: "bold",
            textAlign: "center",
            px: 2,
          }}
        >
          {alt}
        </Typography>
      </Box>
    </Box>
  );
}

// HOME PAGE
function Home() {
  return (
    <>
      {/* HEADER: ORIGINAL BACKGROUND IMAGE PRESERVED */}
      <Box
        sx={{
          minHeight: { xs: "65vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          px: 2,
          background: `linear-gradient(
            rgba(4,9,30,0.65),
            rgba(4,9,30,0.65)
          ), url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box>
          <Box
            component="img"
            src={logo}
            alt="University logo"
            sx={{
              width: { xs: 90, md: 120 },
              mb: 2,
              borderRadius: 2,
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Welcome to Our University
          </Typography>

          <Typography
            sx={{
              maxWidth: 700,
              mx: "auto",
              mb: 4,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Discover knowledge, develop your talents, and prepare
            for a successful future with us.
          </Typography>

          <Button
            component={Link}
            to="/courses"
            variant="contained"
            sx={{
              bgcolor: "#f5a623",
              color: "#111",
              px: 4,
              py: 1.5,
              "&:hover": { bgcolor: "#ffc45c" },
            }}
          >
            Explore Courses
          </Button>

          <Button
            component={Link}
            to="/register"
            variant="outlined"
            sx={{
              ml: { xs: 0, sm: 2 },
              mt: { xs: 2, sm: 0 },
              color: "white",
              borderColor: "white",
              px: 4,
              py: 1.5,
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Box>

      {/* OUR CAMPUSES */}
      <Container sx={{ py: 7 }}>
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          Our Campuses
        </Typography>

        <Typography textAlign="center" sx={{ mb: 4 }}>
          Explore our campuses and learning environments.
        </Typography>

        <Grid container spacing={3}>
          {[
            { name: "London Campus", image: london },
            { name: "New York Campus", image: newyork },
            { name: "Washington Campus", image: washington },
          ].map((campus) => (
            <Grid item xs={12} sm={6} md={4} key={campus.name}>
              <Card sx={{ height: "100%" }}>
                <ImageWithHover
                  src={campus.image}
                  alt={campus.name}
                  height={230}
                />

                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    {campus.name}
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    A welcoming environment for learning,
                    research, and personal growth.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* LIBRARY AND STUDENT LIFE */}
      <Container sx={{ pb: 7 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <ImageWithHover
              src={library}
              alt="University Library"
              height={320}
              sx={{ borderRadius: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              A Better Learning Experience
            </Typography>

            <Typography sx={{ lineHeight: 1.9 }}>
              Our university encourages academic excellence,
              creativity, practical skills, and lifelong learning.
              Students have access to learning resources and
              facilities that support their educational journey.
            </Typography>

            <Button
              component={Link}
              to="/about"
              variant="contained"
              sx={{ mt: 3 }}
            >
              Learn More
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Student Life
            </Typography>

            <Typography sx={{ lineHeight: 1.9 }}>
              We believe that university life should combine
              classroom learning with friendship, teamwork,
              innovation, and personal development.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <ImageWithHover
              src={cafeteria}
              alt="University Cafeteria"
              height={320}
              sx={{ borderRadius: 3 }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

// ABOUT PAGE
function About() {
  return (
    <Container sx={{ py: 7 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        About Our University
      </Typography>

      <Typography sx={{ lineHeight: 2, mb: 3 }}>
        Our university is committed to providing quality education,
        encouraging research, and preparing students to contribute
        positively to society.
      </Typography>

      <Typography sx={{ lineHeight: 2, mb: 3 }}>
        We support academic excellence, innovation, integrity,
        leadership, and practical learning.
      </Typography>

      <Paper sx={{ p: 3, mt: 4, bgcolor: "#f2f6fc" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Our Mission
        </Typography>

        <Typography>
          To provide quality education and develop responsible,
          skilled, and innovative graduates.
        </Typography>
      </Paper>
    </Container>
  );
}

// COURSES PAGE
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
    <Container sx={{ py: 7 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
      >
        Our Courses
      </Typography>

      <Typography textAlign="center" sx={{ mt: 2, mb: 5 }}>
        Explore programmes designed to prepare you for the future.
      </Typography>

      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={course}>
            <Card
              sx={{
                height: "100%",
                textAlign: "center",
                p: 2,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 5,
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {course}
                </Typography>

                <Typography sx={{ mt: 2 }}>
                  Programme {index + 1}
                </Typography>

                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  sx={{ mt: 3 }}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

// CONTACT PAGE
function Contact() {
  return (
    <Container sx={{ py: 7 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Contact Us
      </Typography>

      <Typography sx={{ mb: 2 }}>
        Have questions? We would be happy to hear from you.
      </Typography>

      <Paper sx={{ p: 3, maxWidth: 650 }}>
        <Typography sx={{ mb: 2 }}>
          <strong>Email:</strong> emmanuelchibunna1234@gmail.com
        </Typography>

        <Typography sx={{ mb: 2 }}>
          <strong>Phone:</strong> +234 8163260726
        </Typography>

        <Typography>
          <strong>Address:</strong> University Campus, Nigeria
        </Typography>
      </Paper>
    </Container>
  );
}

// REGISTRATION PAGE
function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    password: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    alert(
      "Registration form completed! A real registration system requires a backend to save your details."
    );
  }

  return (
    <Container sx={{ py: 7 }}>
      <Paper
        elevation={4}
        sx={{
          maxWidth: 600,
          mx: "auto",
          p: { xs: 2, sm: 4 },
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          Student Registration
        </Typography>

        <Typography textAlign="center" sx={{ mb: 4 }}>
          Fill in your details to begin your application.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Phone Number"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Course of Study"
            name="course"
            value={form.course}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ py: 1.5 }}
          >
            Register
          </Button>

          <Typography textAlign="center">
            Already registered?{" "}
            <Link to="/login">Login here</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

// LOGIN PAGE
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert(
      "Login form submitted! Real login requires a backend to verify your account."
    );
  }

  return (
    <Container sx={{ py: 7 }}>
      <Paper
        elevation={4}
        sx={{
          maxWidth: 500,
          mx: "auto",
          p: { xs: 2, sm: 4 },
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          Student Login
        </Typography>

        <Typography textAlign="center" sx={{ mb: 4 }}>
          Welcome back! Enter your login details.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ py: 1.5 }}
          >
            Login
          </Button>

          <Typography textAlign="center">
            Don't have an account?{" "}
            <Link to="/register">Register here</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

// MAIN APP
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const mainLinks = [
    ["HOME", "/"],
    ["ABOUT", "/about"],
    ["COURSES", "/courses"],
    ["CONTACT", "/contact"],
  ];

  const accountLinks = [
    ["REGISTER", "/register"],
    ["LOGIN", "/login"],
  ];

  return (
    <BrowserRouter>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppBar position="sticky" sx={{ bgcolor: primaryColor }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 1,
              py: 1,
              flexWrap: "wrap",
            }}
          >
            {/* UNIVERSITY LOGO AND NAME */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="University logo"
                sx={{
                  width: 42,
                  height: 42,
                  objectFit: "contain",
                  bgcolor: "white",
                  borderRadius: 1,
                }}
              />

              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                My University
              </Typography>
            </Box>

            {/* DESKTOP NAVIGATION LINKS */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {mainLinks.map(([label, path]) => (
                <Button
                  key={path}
                  color="inherit"
                  component={Link}
                  to={path}
                >
                  {label}
                </Button>
              ))}
            </Box>

            {/* NAVIGATION ICON ON DESKTOP AND MOBILE */}
            <IconButton
              onClick={() => setMenuOpen((previous) => !previous)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              sx={{
                color: "white",
                ml: "auto",
                fontSize: "1.8rem",
              }}
            >
              <Box
                component="span"
                sx={{
                  fontSize: "1.8rem",
                  lineHeight: 1,
                }}
              >
                {menuOpen ? "✕" : "☰"}
              </Box>
            </IconButton>
          </Toolbar>

          {/* DROPDOWN MENU */}
          {menuOpen && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: primaryColor,
                pb: 2,
                px: 2,
              }}
            >
              {/* THESE LINKS APPEAR IN THE MENU ON MOBILE */}
              {mainLinks.map(([label, path]) => (
                <Button
                  key={path}
                  color="inherit"
                  component={Link}
                  to={path}
                  onClick={closeMenu}
                  sx={{
                    display: { xs: "flex", md: "none" },
                    justifyContent: "flex-start",
                    py: 1,
                  }}
                >
                  {label}
                </Button>
              ))}

              {/* REGISTER AND LOGIN APPEAR IN THE MENU ON ALL SCREENS */}
              {accountLinks.map(([label, path]) => (
                <Button
                  key={path}
                  color="inherit"
                  component={Link}
                  to={path}
                  onClick={closeMenu}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    py: 1,
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}
        </AppBar>

        {/* PAGE CONTENT */}
        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>

        {/* FOOTER */}
        <Box
          component="footer"
          sx={{
            bgcolor: "#071a35",
            color: "white",
            textAlign: "center",
            py: 3,
            px: 2,
          }}
        >
          <Typography>
            © {new Date().getFullYear()} My University. All rights reserved.
          </Typography>

          <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
            Knowledge • Innovation • Excellence <br>
            </br>

            Made by Emmanuel Ukachi
          </Typography>
        </Box>
      </Box>
    </BrowserRouter>
  );
}