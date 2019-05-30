import React from 'react';
import Auxilary from '../../hoc/Auxilary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => {
    return (
        <Auxilary>
            <Toolbar />
            <main className={classes.Content}>{props.children}</main>
        </Auxilary>
    )
}

export default Layout;