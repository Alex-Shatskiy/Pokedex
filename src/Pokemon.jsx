import React, { useState, useEffect } from "react"
import axios from "axios"
import About from "./About"

import { CardMedia, Typography, Tab, Tabs, Box } from "@material-ui/core"
import Stats from "./Stats"

const Pokemon = (props) => {
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

  const { name, stats, height, base_experience, id, types, abilities } =
    pokemonData

  const toFirstCharUppercase = (pokeName) => {
    return pokeName.charAt(0).toUpperCase() + name.slice(1)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  console.log(pokemonData)
  return (
    <>
      {!types ? (
        <></>
      ) : (
        <>
          <Typography>{`#${id}. ${toFirstCharUppercase(name)}`}</Typography>
          <CardMedia
            style={{ height: "150px", width: "150px" }}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          />

          <Tabs value={value} onChange={handleChange}>
            <Tab label="About" />
            <Tab label="Status" />
            <Tab label="Evolution" />
          </Tabs>
          {value == 0 && (
            <About
              h={height}
              v={value}
              i={id}
              n={name}
              t={types}
              exp={base_experience}
              a={abilities}
            />
          )}
          {value == 1 && <Stats pokemonStats={stats} />}
        </>
      )}
    </>
  )
}

export default Pokemon
