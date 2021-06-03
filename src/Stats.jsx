import React, { useState, useEffect } from "react"
import { CardMedia, Typography, Tab, Tabs, Box } from "@material-ui/core"

const Stats = (props) => {
  const { pokemonStats } = props
  console.log(pokemonStats)

  const mapTypeStats = (stats) => {
    const { base_stat } = stats
    const { stat } = stats
    const { name } = stat
    return (
      <>
        <Typography>
          {name}: {base_stat}
        </Typography>
      </>
    )
  }

  return (
    <>
      {!pokemonStats ? (
        <></>
      ) : (
        <>
          {pokemonStats.map((diffrentStat) => {
            return mapTypeStats(diffrentStat)
          })}
        </>
      )}
    </>
  )
}

export default Stats
