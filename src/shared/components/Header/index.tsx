import { Typography } from '@mui/material'
import { FC } from 'react'

import { Grid, Container, Button, Switch } from '@mui/material'

import { Link } from 'react-router-dom'

interface Props {
  handleTheme(): void 
}

export const Header: FC<Props> = ({ handleTheme }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} display="flex" justifyContent="space-evenly" alignItems="center" sx={{
        marginTop: "10px",
        marginBottom: "20px"
      }}>
        <Grid item>
          <Typography variant="h3" component="h1" color="primary"> Todo </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="h2"><Link to="/"> Home </Link></Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="h2" ><Link to="/about"> About </Link></Typography>
        </Grid>
        <Grid item>
          <Button variant="contained"> User </Button>
        </Grid>
        <Grid item>
          <Switch 
            onChange={ handleTheme }
          />
        </Grid>
      </Grid>
    </Container>
  )
}