import React, { useState, useEffect } from "react"
import {
  CardMedia,
  Typography,
  Tab,
  Tabs,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
} from "@material-ui/core"
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles"

const theme = createMuiTheme({})

const useStyles = makeStyles((theme) => ({
  type: {
    textAlign: "center",
  },
  abilitiesBox: {
    fontSize: "20px",
    fontWeight: "450",
    height: "10%",
  },
  text: {
    fontSize: "20px",
    fontWeight: "450",
    marginBottom: "30px",
  },
  abilities: {
    textAlign: "center",
  },
}))

const About = (props) => {
  const classes = useStyles()

  const { n, i, h, t, exp, a, w } = props
  const index = i
  const height = h
  const name = n
  const types = t
  const base_experience = exp
  const abilities = a
  const weight = w

  const mapTypePokemon = (ty) => {
    const { type } = ty
    const { name } = type
    return (
      <Grid item xs={4} align="left" className={classes.type}>
        <Paper style={{ borderRadius: "10px" }} elevation={5}>
          <Typography className={(classes.types, classes.text)} key={name}>
            {name}
          </Typography>
        </Paper>
      </Grid>
    )
  }

  const mapAbilities = (moves) => {
    console.log(moves)

    const { ability } = moves
    const { name } = ability
    return (
      <>
      <Grid item xs={4} align="left" className={classes.abilities}>
        <Paper style={{ borderRadius: "10px" }} elevation={5}>
          <Typography className={classes.abilitiesBox}>{name}</Typography>
        </Paper>
      
      </Grid>
     
      </>
    )
  }
  const numberConverter = (number) => {
    if (number < 10) return `00${number}`
    else if (number >= 10 && number < 100) return `0${number}`
    else return `${number}`
  }
  return (
    <>
      {!types ? (
        <></>
      ) : (
        <>
          <ThemeProvider theme={theme}>
            <Grid item xs={4} align="left" className={classes.about}>
              <Typography className={classes.text}>{`ID: #${numberConverter(
                index
              )}`}</Typography>
              <Typography className={classes.text}>
                Height: {height}cm
              </Typography>
              <Typography className={classes.text}>
                Weight: {weight} Kg's
              </Typography>
              <Typography className={classes.text}>
                Base Exp: {base_experience}
              </Typography>

              {/* This Displays Types for the pokemon */}
              <Grid container spacing={1}>
                <Typography className={(classes.type, classes.text)}>
                  Type:
                </Typography>
                {types.map((diffrentType) => {
                  return mapTypePokemon(diffrentType)
                })}
              </Grid>

              {/* This displayes the pokemons abilities */}
              <Grid container spacing={1} style={{display:'flex', flexWrap:'nowrap'}}>
                <Typography className={(classes.abilitie, classes.text)}>
                  Abilities:
                </Typography>
            
                {abilities.map((abilitie) => {
                  return mapAbilities(abilitie)
                })}
              </Grid>
            </Grid>
          </ThemeProvider>
        </>
      )}
    </>
  )
}

export default About
