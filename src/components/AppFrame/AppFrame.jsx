import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { IconContext } from 'react-icons'
import Link from '@material-ui/core/Link'
import { WiDaySunny  } from 'react-icons/wi'
import { Link as LinkerRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const AppFrame = ({children}) => {
    const sizeIcon = React.useMemo(()=> ({size:'2em'}),[])
    return (
        <Grid container
        justify="center"
        >
            <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton color="inherit" aria-label="menu">
                    <Link
                    component={LinkerRouter}
                     to="/main" 
                     color="inherit" 
                     aria-label="menu">
                        <IconContext.Provider value={sizeIcon}>
                            <WiDaySunny/>
                        </IconContext.Provider>
                    </Link>
                </IconButton>
                <Typography variant="h6" color ="inherit">
                    Weather App
                </Typography>
            </Toolbar>
            </AppBar>
            <Grid item
            xs={12}
            sm={11}
            md={10}
            lg={8}
            >
                {children}
            </Grid>






            
        </Grid>
    )
}

AppFrame.propTypes = {
    children: PropTypes.node
}
export default AppFrame
