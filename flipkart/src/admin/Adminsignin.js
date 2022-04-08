// export const Adminsignin = () => (
//   <nav className="navbar navbar-default" role="navigation">
//     <div className="container-fluid">
//       {/* Brand and toggle get grouped for better mobile display */}
//       <div className="navbar-header">
//         <button
//           type="button"
//           className="navbar-toggle"
//           data-toggle="collapse"
//           data-target="#bs-example-navbar-collapse-1"
//         >
//           <span className="sr-only">Toggle navigation</span>
//           <span className="icon-bar" />
//           <span className="icon-bar" />
//           <span className="icon-bar" />
//         </button>
//         <a className="navbar-brand" href="#">
//           Brand
//         </a>
//       </div>
//       {/* Collect the nav links, forms, and other content for toggling */}
//       <div
//         className="collapse navbar-collapse"
//         id="bs-example-navbar-collapse-1"
//       >
//         <ul className="nav navbar-nav">
//           <li className="active">
//             <a href="#">Link</a>
//           </li>
//           <li>
//             <a href="#">Link</a>
//           </li>
//           <li className="dropdown">
//             <a href="#" className="dropdown-toggle" data-toggle="dropdown">
//               Dropdown <span className="caret" />
//             </a>
//             <ul className="dropdown-menu" role="menu">
//               <li>
//                 <a href="#">Action</a>
//               </li>
//               <li>
//                 <a href="#">Another action</a>
//               </li>
//               <li>
//                 <a href="#">Something else here</a>
//               </li>
//               <li className="divider" />
//               <li>
//                 <a href="#">Separated link</a>
//               </li>
//               <li className="divider" />
//               <li>
//                 <a href="#">One more separated link</a>
//               </li>
//             </ul>
//           </li>
//         </ul>
//         {/* <form className="navbar-form navbar-left" role="search">
//           <div className="form-group">
//             <input type="text" className="form-control" placeholder="Search" />
//           </div>
//           <button type="submit" className="btn btn-default">
//             Submit
//           </button>
//         </form> */}
//         <ul className="nav navbar-nav navbar-right">
//           <li>
//             <a href="#">Link</a>
//           </li>
//           <li className="dropdown">
//             <a href="#" className="dropdown-toggle" data-toggle="dropdown">
//               Dropdown <span className="caret" />
//             </a>
//             <ul className="dropdown-menu" role="menu">
//               <li>
//                 <a href="#">Action</a>
//               </li>
//               <li>
//                 <a href="#">Another action</a>
//               </li>
//               <li>
//                 <a href="#">Something else here</a>
//               </li>
//               <li className="divider" />
//               <li>
//                 <a href="#">Separated link</a>
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//       {/* /.navbar-collapse */}
//     </div>
//     {/* /.container-fluid */}
//   </nav>
// )






import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export function Adminsignin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon fontSize='large'/>
          </Avatar>
          <Typography component="h1" variant="h2">
            Sign in
          </Typography>
          <Box  component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputProps={{style: {fontSize: 14}}}
              InputLabelProps={{style: {fontSize: 13}}}
              
            />
            <TextField 
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputProps={{style: {fontSize: 14}}}
              InputLabelProps={{style: {fontSize: 13}}}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,fontSize:14}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}