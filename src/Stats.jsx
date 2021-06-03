import React, { useState, useEffect } from "react"
import { CardMedia, Typography, Tab, Tabs, Box } from "@material-ui/core"
import { SignalCellularNoSimOutlined } from "@material-ui/icons"

const Stats = (props) => {
  const { pokemonStats } = props
  console.log(pokemonStats)

  const totalStats = (stats) => {
    const total = pokemonStats.reduce((sum, current) => {
      return sum + parseInt(current.base_stat)
    }, 0)
    return total
  }

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
          <Typography>Total: {totalStats()}</Typography>
        </>
      )}
    </>
  )
}

export default Stats
