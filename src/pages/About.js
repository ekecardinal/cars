import { Grid, Typography, Box } from '@mui/material'
import React from 'react'

function About() {
  return (
    <div className="bg">
      <Box
        sx={{
          p: 1,
          m: 1,
        }}
      >
        <Grid container spacing={8}>
          <Grid
            item
            sx={{ display: { xs: 'none', md: 'block', mt: 1 } }}
            className="img_grid2"
            md={6}
          ></Grid>
          <Grid item xs={10} md={4} mt={{ lg: 8, md: 4, sm: 2 }} color="white">
            <Typography variant="h5">About</Typography>
            <br />
            <Typography className="typo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              saepe vero laboriosam! Optio explicabo ex ratione recusandae quas
              cupiditate consectetur omnis deserunt facere quibusdam, sint
              aliquam sunt atque aperiam, dolorem praesentium non. Nihil eaque
              inventore sapiente libero, repellat dolorum sequi velit ut quos
              deleniti magni
            </Typography>
            <br />
            <Typography variant="h5">Our Goals</Typography>

            <br />
            <Typography className="typo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              saepe vero laboriosam! Optio explicabo ex ratione recusandae quas
              cupiditate consectetur omnis deserunt facere quibusdam, sint
              aliquam sunt atque aperiam, dolorem praesentium non. Nihil eaque
              inventore sapiente libero, repellat dolorum sequi velit ut quos
              deleniti magni
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default About
