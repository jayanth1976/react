import React, { useState } from 'react'

import { makeStyles } from '@mui/styles'

import TableHeader from '../Molecules/TableHeader'
import Table from '../Organisms/Table'
const useStyles = makeStyles({
    mainCon :  {
        height:'90vh',
        width:'68.75vw',
        boxShadow: "0px 4px 28px rgba(45, 45, 47, 0.1)",
        borderRadius: '6px',
        overflow:'auto'
    }
})
const CandidateTable = () => {
    const classes = useStyles()
    const [filterVisibility,setFilterVisibility] = useState(false)
    const handleFilterVisibility = ()=>{
      setFilterVisibility(prev=>!prev)
    }
  return (
    <div className={classes.mainCon}>
        <TableHeader handleClick={handleFilterVisibility} />
        <Table showFilter={filterVisibility}/>
    </div>
  )
}

export default CandidateTable