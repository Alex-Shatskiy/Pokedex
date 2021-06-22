import React, { useState, useEffect } from "react"
import axios from "axios"
import { fade, makeStyles } from "@material-ui/core/styles"
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset"

import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  icon: {
    paddingRight: "10px",
    width: "30px",
    height: "30px",
  },
  cardMedia: {
    height: "150px",
    width: "150px",
    margin: "auto",
  },
  root: {
    display: "flex",
    borderRadius: "20px",
    backgroundColor: "rgb(255,228,225)",
  },
  toolBar: {
    backgroundColor: "rgb(224,60,49)",
  },
  content: {},
  search: {
    marginLeft:'20px',
    backgroundColor: fade(theme.palette.error.main, 0.15),
   
  }
}))
const Pokedex = (props) => {
  const classes = useStyles()
  const { history } = props
  const [pokemonData, setPokemonData] = useState({})
  const [filter, setFilter] = useState('')

  const handelSearchChange = (evt) =>{
    console.log(filter)
    setFilter(evt.target.value)
  }

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=898").then((res) => {
      const { data } = res
      const { results } = data

      let newPokemonId = []

      results.forEach((pokemon, id) => {
        newPokemonId[id + 1] = {
          id: id + 1,
          name: pokemon.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            id + 1
          }.png`,
          typee: null,
        }
      })
       setPokemonData(newPokemonId)
    })
  }, [])
  console.log(pokemonData)

  const pokemonCard = (pokemonId) => {
    const { id, name, sprite, typee } = pokemonData[pokemonId]
    return (
      <Grid item xs={4} sm={3} md={2} align="left" key={pokemonId}>
        <div className={classes.controls}>
          <Card onClick={() => history.push(`/${id}`)} className={classes.root}>
            <CardContent
              style={{ backgroundColor: "pink" }}
            >
              <Typography color="textSecondary">{`${id}.`}</Typography>
              <Typography
                className={classes.pokeName}
                color="textPrimary"
              >{`${toFirstCharUppercase(name)}`}</Typography>
            </CardContent>
            <CardMedia image={sprite} className={classes.cardMedia} />
          </Card>
        </div>
      </Grid>
    )
    // }
  }

  const toFirstCharUppercase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  return (
    <>
      {!pokemonData ? (
        <></>
      ) : (
        <>
          <AppBar position="static">
            <Toolbar className={classes.toolBar}>
              <VideogameAssetIcon className={classes.icon} />
              <Typography variant="h5" color="initial">
                Pokedex
              </Typography>
              <div className={classes.search}>
                <TextField  onChange={handelSearchChange} label='Search Pokemon' variant='standard'  />
              </div>
            </Toolbar>
          </AppBar>
          <Grid container spacing={2} className={classes.pokedexContainer}>
            {Object.keys(pokemonData).map((pokemon) => {
            return pokemonData[pokemon].name.includes(filter) && pokemonCard(pokemon)
            })}
          </Grid>
        </>
      )}
    </>
  )
}

export default Pokedex
