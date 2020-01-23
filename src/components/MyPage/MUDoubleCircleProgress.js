import React, { useState, useEffect } from 'react'
// import classNames from 'classnames'
// import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
// import { CircularProgress } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
// import Button from "@material-ui/core/Button";
// import Fab from "@material-ui/core/Fab";
// import CheckIcon from "@material-ui/icons/Check";
// import SaveIcon from "@material-ui/icons/Save";

import constants from '../../constants/constants'
import { useWindowSize } from '../../hooks/useWindowSize'

const MUDoubleCircleProgress = props => {
  const windowSize = useWindowSize()
  const [circleSize, setCircleSize] = useState(
    constants.myPage.memberData.circularProgressSize.sm
  )
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative'
    },
    // buttonSuccess: {
    //   backgroundColor: green[500],
    //   '&:hover': {
    //     backgroundColor: green[700]
    //   }
    // },
    // fabProgress: {
    //   color: green[500],
    //   position: 'absolute',
    //   top: -6,
    //   left: -6,
    //   zIndex: 1
    // },
    thisMonth: {
      color: '#007bff'
    },
    before: {
      // color: green[500],
      color: '#ffc107',
      position: 'absolute',
      top: (circleSize[0] - circleSize[1]) / 2,
      left: (circleSize[0] - circleSize[1]) / 2
      // marginTop: -12,
      // marginLeft: -12
    },
    // buttonProgress2: {
    //   color: grey[500],
    //   position: 'absolute',
    //   top: (circleSize[0] - circleSize[2]) / 2,
    //   left: (circleSize[0] - circleSize[2]) / 2
    //   // marginTop: -12,
    //   // marginLeft: -12
    // },
    backgroundNow: {
      backgroundColor: grey[500],
      position: 'absolute',
      top: 0,
      left: 0,
      height: circleSize[0],
      width: circleSize[0],
      borderRadius: circleSize[0] / 2,
      zIndex: -3
    },
    backgroundBefore: {
      backgroundColor: grey[400],
      position: 'absolute',
      top: (circleSize[0] - circleSize[1]) / 2,
      left: (circleSize[0] - circleSize[1]) / 2,
      height: circleSize[1],
      width: circleSize[1],
      borderRadius: circleSize[1] / 2,
      zIndex: -2
    },
    backgroundInner: {
      backgroundColor: 'white',
      position: 'absolute',
      top: (circleSize[0] - circleSize[2]) / 2,
      left: (circleSize[0] - circleSize[2]) / 2,
      height: circleSize[2],
      width: circleSize[2],
      borderRadius: circleSize[2] / 2,
      zIndex: -1
    }
  }))

  const classes = useStyles()
  // const [loading, setLoading] = React.useState(true)
  // const [success, setSuccess] = React.useState(false)
  const [completedNow, setCompletedNow] = React.useState(0)
  const [completedBefore, setCompletedBefore] = React.useState(0)
  // const timer1 = React.useRef()
  // const timer2 = React.useRef()

  // const buttonClassname = clsx({
  //   [classes.buttonSuccess]: success
  // });
  useEffect(() => {
    const width = windowSize.width
    if (width > 990 || (width <= 767 && width >= 576)) {
      setCircleSize(constants.myPage.memberData.circularProgressSize.lg)
    } else {
      setCircleSize(constants.myPage.memberData.circularProgressSize.sm)
    }
  }, [windowSize.width])

  useEffect(() => {
    const dataThisMonth = props.dataThisMonth
    const dataBefore = props.dataBefore
    const thisMax = parseInt(
      (dataThisMonth.now * 100) / dataThisMonth.origin,
      10
    )
    const beforeMax = parseInt((dataBefore.now * 100) / dataBefore.origin, 10)
    // console.log(thisMax, beforeMax)

    function progressNow() {
      setCompletedNow(prevCompleted => {
        // console.log(prevCompleted)
        if (prevCompleted === thisMax) {
          clearInterval(timer1)
        }
        return prevCompleted > thisMax - 1 ? thisMax : prevCompleted + 10
      })
    }
    function progressBefore() {
      setCompletedBefore(prevCompleted => {
        // console.log(prevCompleted)
        if (prevCompleted === beforeMax) {
          clearInterval(timer2)
        }
        return prevCompleted > beforeMax - 1 ? beforeMax : prevCompleted + 10
      })
    }

    const timer1 = setInterval(progressNow, 50)
    const timer2 = setInterval(progressBefore, 50)
    return () => {
      clearInterval(timer1)
      clearInterval(timer2)
    }
  }, [props.dataBefore, props.dataThisMonth])

  // React.useEffect(() => {
  //   return () => {
  //     clearTimeout(timer1.current)
  //     clearTimeout(timer2.current)
  //   }
  // }, [])

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <CircularProgress
          variant='static'
          size={circleSize[0]}
          thickness={5}
          value={completedNow}
          className={classes.thisMonth}
        />
        <CircularProgress
          variant='static'
          size={circleSize[1]}
          thickness={5}
          value={completedBefore}
          className={classes.before}
        />
        <div className={classes.backgroundNow}></div>
        <div className={classes.backgroundBefore}></div>
        <div className={classes.backgroundInner}>
          <div className='text-center h5 w-100 h-100'>
            <div style={{ marginTop: circleSize[2] / 3 }}>
              <div>残容量</div>
              <div>
                {props.dataBefore.now + props.dataThisMonth.now}/
                {props.dataBefore.origin + props.dataThisMonth.origin}GB
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MUDoubleCircleProgress
