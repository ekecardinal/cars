import React, { useState, useEffect } from 'react'

import { AppBar, Toolbar, Box, Tabs, Tab } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  tabLeft: {
    marginLeft: 'auto',
  },
  logo: {
    height: '3em',
    [theme.breakpoints.down('md')]: {
      height: '1.5em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '0.8em',
    },
  },
}))

export const Navbar = () => {
  const classes = useStyles()

  const [value, setValue] = useState('one')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (window.location.pathname === '/about' && value !== 0) {
      setValue(0)
    }
    // else if (window.location.pathname === '/about' && value !== 1) {
    //   setValue(1)
    // }
  }, [value])

  return (
    <AppBar position="static" color="secondary">
      <Box sx={{ mr: { sm: 0, lg: 20, md: 0 }, ml: { sm: 0, md: 0, lg: 20 } }}>
        <Toolbar>
          <a href="/">
            <img
              src="../logo.png"
              alt="company logo"
              className={classes.logo}
            />
          </a>
          <Tabs sx={{ ml: 'auto' }} value={value} onChange={handleChange}>
            {/* <Tab label="Home" component={Link} to="/" /> */}
            <Tab label="About" component={Link} to="/about" />
          </Tabs>
        </Toolbar>
      </Box>
    </AppBar>
  )
}
