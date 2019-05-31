import React from 'react';
import Auxilary from '../../hoc/Auxilary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {
    return (
        <Auxilary>
            <Toolbar />
            <SideDrawer />
            <main className={classes.Content}>{props.children}</main>
        </Auxilary>
    )
}

export default Layout;