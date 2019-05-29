import React from 'react';
import Auxilary from '../../hoc/Auxilary';
import classes from './Layout.css';

const Layout = (props) => {
    return (
        <Auxilary>
            <div>Toolbar, NagigationDrawaer, BackDrop</div>
            <main className={classes.Content}>{props.children}</main>
        </Auxilary>
    )
}

export default Layout;