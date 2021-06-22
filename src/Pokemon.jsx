import React, { useState, useEffect } from "react"
import axios from "axios"
import About from "./About"

import {
  CardMedia,
  Typography,
  Tab,
  Tabs,
  Box,
  Grid,
  AppBar,
  Toolbar,
  Button,
} from "@material-ui/core"
import Stats from "./Stats"
import { makeStyles } from "@material-ui/core/styles"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },
  fullGrid: {
    height: "100%",
    paddingTop: "60px",
    paddingLeft: "3%",
  },
  toolBar: {
    display: "flex",
    justifyContent: "center",
  },

  normal: {
    backgroundColor: " #C2C2A1",
  },
  flying: {
    backgroundColor: " #BAB0D5",
  },

  ghost: {
    backgroundColor: " #735797",
  },
  dark: {
    backgroundColor: " #333",
  },
  steel: {
    backgroundColor: " #CCCCDE",
  },

  ground: {
    backgroundColor: " #B1736C",
  },

  poison: {
    backgroundColor: " #7C538C",
  },

  grass: {
    backgroundColor: " #48D0B0",
  },
  fire: {
    backgroundColor: " #FB6C6C",
  },

  tectric: {
    backgroundColor: " #FFD86F",
  },

  fairy: {
    backgroundColor: " #f469a9",
  },
  bug: {
    backgroundColor: " #C3CE75",
  },

  tghting: {
    backgroundColor: " #d6b591",
  },

  water: {
    backgroundColor: " #609FB5",
  },

  psychic: {
    backgroundColor: " #9B7FA6",
  },
  ice: {
    backgroundColor: " #7FCCEC",
  },
  rock: {
    backgroundColor: " #a6aab6",
  },

  dragon: {
    backgroundColor: " #F9BE00",
  },
}))

const Pokemon = (props) => {
  const classes = useStyles()
  const { match, history } = props
  const { params } = match
  const { pokemonId } = params
  const [pokemonData, setPokemon] = useState({})
  const [value, setValue] = useState(0)

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response
        setPokemon(data)
      })
      .catch(function (error) {
        setPokemon(false)
      })
  }, [pokemonId])

  const { name, stats, height, base_experience, id, types, abilities, weight } =
    pokemonData

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const toFirstCharUppercase = (pokeName) => {
    return pokeName.charAt(0).toUpperCase() + name.slice(1)
  }
  const numberConverter = (number) => {
    if (number < 10) return `00${number}`
    else if (number >= 10 && number < 100) return `0${number}`
    else return `${number}`
  }
  const classNameColor = (typee) => {
    let typeColor = null
    if (typee != null) {
      typeColor = typee[0].type.name
    } else {
      alert("did not work")
    }
    return eval(`classes.${typeColor}`)
  }

  console.log(pokemonData)
  return (
    <>
      {!types ? (
        <></>
      ) : (
        <>
          {console.log()}
          <AppBar position="static">
            <Toolbar className={classNameColor(types)}>
              <Grid container spacing={0} justify="space-between">
                <Grid item xs={1}>
                  <ArrowBackIosIcon
                    style={{ width: "45px", height: "35px" }}
                    onClick={() => history.push("/")}
                  />
                </Grid>
                <Grid item xs={1} justifyContent="center">
                  <Typography
                    style={{ fontSize: "40px", fontWeight: "500" }}
                    variant="h5"
                    color="initial"
                  >
                    {toFirstCharUppercase(name)}
                  </Typography>
                </Grid>
                <Grid item xs={1} />
              </Grid>
            </Toolbar>
          </AppBar>
          <Grid
            container
            spacing={5}
            className={classes.fullGrid}
            direction="row"
            align="left"
          >
            <About
              h={height}
              v={value}
              i={id}
              n={name}
              t={types}
              exp={base_experience}
              a={abilities}
              w={weight}
            />
            <Grid item xs={4}>
              <CardMedia
                style={{ height: "400px", width: "400px" }}
                image={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${numberConverter(
                  id
                )}.png`}
              />
            </Grid>
            <Stats pokemonStats={stats} />
          </Grid>
          <Button variant="contained" onClick={() => history.push("/")}>
            back to pokedex
          </Button>
        </>
      )}
    </>
  )
}

export default Pokemon
