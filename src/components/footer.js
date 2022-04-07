import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Sport Cars
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

function Footer(props) {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: 'background.paper', py: 6, boxShadow: 3, mt: 1 }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Sport Cars
        </Typography>
        <Copyright />
      </Container>
    </Box>
  )
}

export default Footer
