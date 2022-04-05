import React, { useState, useEffect } from 'react'

import { AppBar, Toolbar, Box, Tabs, Tab } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  tabLeft: {
    marginLeft: 'auto',
  },
}))

export const Navbar = () => {
  const classes = useStyles()

  const [value, setValue] = useState('one')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === '/about' && value !== 1) {
      setValue(1)
    }
  }, [value])

  return (
    <AppBar position="static" color="secondary">
      <Box sx={{ mr: { sm: 0, lg: 20, md: 0 }, ml: { sm: 0, md: 0, lg: 20 } }}>
        <Toolbar>
          <img src="../logo.png" alt="company logo" />

          <Tabs sx={{ ml: 'auto' }}>
            <Tab label="Home" component={Link} to="/" />
            <Tab label="About" component={Link} to="/about" />
          </Tabs>
        </Toolbar>
      </Box>
    </AppBar>
  )
}
