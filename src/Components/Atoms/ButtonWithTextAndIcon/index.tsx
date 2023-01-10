import React,{HTMLAttributes} from 'react'
import {Button} from '@mui/material'
import { makeStyles } from '@mui/styles'


export interface ButtonWithTextAndIconProps extends HTMLAttributes<HTMLButtonElement>{
    text:string
    variant?:'text'| 'contained' | 'outlined',
    startIcon?:boolean,
    Icon:any
}

const useStyles = makeStyles({
  btn:{
    backgroundColor:'green'
  }
})

export const ButtonWithTextAndIcon = ({variant,Icon,text,startIcon}:ButtonWithTextAndIconProps) => {
  const classes = useStyles()
 if(startIcon){
  return (
    <Button variant={variant} startIcon={<Icon/>} className={classes.btn} sx={{textTransform:'none'}}> 
    {text}
  </Button>
    )
  }
  else{
    return (
        <Button variant={variant} endIcon={<Icon/>} sx={{textTransform:'none'}}>
        {text}
      </Button>
        )
  }
}
