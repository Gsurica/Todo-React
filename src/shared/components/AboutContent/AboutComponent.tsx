import { FC } from 'react'
import { Container, Grid, Button, Typography as Typo, Box } from '@mui/material'
import { Content } from '../../interfaces/Content'
import { GitHub, LinkedIn, MusicNote } from '@mui/icons-material'

export const AboutComponent: FC<Content> = ({ content, title }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Grid item> 
          <Box
            sx={{
              display: "table",
              marginBottom: "30px"
            }}
          >
            <Typo
              variant="h1"
              component="h1"
              color="secondary"
            >
              { title }
            </Typo>
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "400px",
              textIndent: "30px",
              justifyContent: "center"
            }}
          >
            <Typo
              variant="body1"
              component="span"
              color="primary"
            >
              { content }
            </Typo>
          </Box>
        </Grid>

        <Grid item>
          <Box
           sx={{
            width: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
           }} 
          >
            <Button
              startIcon={<GitHub />}
              variant="outlined"
              color="primary"
              href="https://github.com/Gsurica"
            > 
              Github!
            </Button>
            <Button
              startIcon={<LinkedIn />}
              variant="outlined"
              color="secondary"
              href="https://www.linkedin.com/in/guilherme-surica-747734223/"
            >
              LinkedIn!
            </Button>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<MusicNote />}
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <Typo
                variant="body1"
                color="primary"
              > 
                Click Me!
              </Typo>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

