import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'

export default function TitlebarBelowImageList() {
  return (
    <ImageList
      sx={{
        display: 'flex',
        flexWrap: 'wrap',

        justifyContent: 'center',
        '& > :not(style)': {
          m: '0.5em',
          width: 350,
          height: 300,
        },
      }}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            sx={{ borderRadius: 2 }}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} position="below" />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

const itemData = [
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/559/911/736/auto-dust-sport-machine-race-hd-wallpaper-preview.jpg',
    title: 'Auto, Dust, Sport, Machine, Race, Skid, Hyundai, Car, WRC, Rally',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/383/498/337/911-porsche-car-race-wallpaper-preview.jpg',
    title: 'P911, Porsche, Car, Race, RWB',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/936/347/652/lamborghini-car-lamborghini-aventador-wallpaper-preview.jpg',
    title: ' Lamborghini Aventador',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/253/181/284/porsche-917-spa-francorchamps-race-cars-racing-race-tracks-hd-wallpaper-preview.jpg',
    title: 'Porsche 917, Spa Francorchamps, race cars, racing,',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/11/690/342/khyzyl-saleem-car-bmw-m6-bmw-wallpaper-preview.jpg',
    title: 'BMW M6, render, artwork, Stanceworks',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/583/659/668/sport-car-racing-porsche-911-rsr-wallpaper-preview.jpg',
    title: 'sport car, racing, Porsche 911 RSR',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/150/745/283/car-ferrari-red-car-luxury-vehicle-wallpaper-preview.jpg',
    title: 'ferrari, red car, luxury vehicle, sports car',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/244/1015/716/4k-lightning-mcqueen-8k-wallpaper-preview.jpg',
    title: 'Lightning McQueen, 8K, car',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/1017/368/874/car-mazda-mazda-787b-race-cars-wallpaper-preview.jpg',
    title: 'mazda 787b, race cars, Super Car, Le Mans',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/397/880/29/2017-911-car-porsche-wallpaper-preview.jpg',
    title: '2017, 911, car, porsche, race',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/591/369/117/car-vehicle-mclaren-p1-mclaren-wallpaper-preview.jpg',
    title: 'black sports car, vehicle, McLaren P1',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/643/74/422/nissan-turbo-white-drift-wallpaper-preview.jpg',
    title: 'white coupe, nissan, turbo',
  },
]
