import React, { useState, useEffect } from "react"
import { CardMedia, Typography, Tab, Tabs, Box } from "@material-ui/core"

const About = (props) => {
  const { n, i, h, t, exp, a } = props
  const index = i
  const height = h
  const name = n
  const types = t
  const base_experience = exp
  const abilities = a

  const mapTypePokemon = (ty) => {
    const { type } = ty
    const { name } = type
    return <Typography key={name}>{name}</Typography>
  }

  const mapAbilities = (moves) => {
    console.log(moves)

    const { ability } = moves
    const { name } = ability
    return <Typography>{name}</Typography>
  }

  return (
    <>
      {!types ? (
        <></>
      ) : (
        <>
          <Typography>Height: {height}cm</Typography>
          <Typography>Base Exp: {base_experience}</Typography>
          <Typography>Type:</Typography>
          {types.map((diffrentType) => {
            return mapTypePokemon(diffrentType)
          })}
          <Typography>Abilities:</Typography>
          {abilities.map((abilitie) => {
            return mapAbilities(abilitie)
          })}
        </>
      )}
    </>
  )
}

export default About
