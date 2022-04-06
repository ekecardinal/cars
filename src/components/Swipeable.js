import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles'
import { Typography, Box, Button, Grid } from '@mui/material'

let theme = createTheme()
theme = responsiveFontSizes(theme)

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1 ">
                <Grid container>
                  <Grid item xs={2} md={2}></Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Typography variant="h2">Mercedes</Typography>
                    <Button variant="contained">View</Button>
                  </Grid>
                </Grid>
              </div>
              <div className="keen-slider__slide number-slide2">
                <Grid container>
                  <Grid item xs={2} md={2}></Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} md={10}>
                    <Typography variant="h2">Nissan Skyline</Typography>

                    <Button variant="contained">View</Button>
                  </Grid>
                </Grid>
              </div>
              <div className="keen-slider__slide number-slide3">
                <Grid container>
                  <Grid item xs={2} md={2}></Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} md={10}>
                    <Typography variant="h2">Mercedes</Typography>

                    <Button variant="contained">View</Button>
                  </Grid>
                </Grid>
              </div>
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
          {loaded && instanceRef.current && (
            <div className="dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                    }}
                    className={'dot' + (currentSlide === idx ? ' active' : '')}
                  ></button>
                )
              })}
            </div>
          )}
        </Box>
      </ThemeProvider>
    </>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
