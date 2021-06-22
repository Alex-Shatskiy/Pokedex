import React, { useState, useEffect } from "react"
import { CardMedia, Typography, Tab, Tabs, Box, Grid } from "@material-ui/core"
import { SignalCellularNoSimOutlined } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "20px",
    fontWeight: "450",
    marginBottom: "5px",
  },
  stats: {
    martinTop: "20px",
  },
}))

const Stats = (props) => {
  const classes = useStyles()

  const { pokemonStats } = props

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
        <Typography className={classes.text}>
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
          <Grid item xs={4} className={classes.stats}>
            {pokemonStats.map((diffrentStat) => {
              return mapTypeStats(diffrentStat)
            })}
            <Typography className={classes.text}>
              Total: {totalStats()}
            </Typography>
          </Grid>
        </>
      )}
    </>
  )
}

export default Stats
