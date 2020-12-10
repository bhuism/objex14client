import React from "react";
import {Menu} from "../components/Menu";
import PropTypes from 'prop-types';
import {Badge} from "../components/Badge";

const BasePage: React.FC = ({children}) => {

    return (
        <>
            <nav><Menu/></nav>
            <main>{children}</main>
            <footer className='layout-footer'>
                <a href="https://github.com/bhuism/citatenReactClient" target="_blank" rel="noreferrer">
                    <Badge url={'https://badge.odee.net/github/sha/bhuism/citatenReactClient/master/' + process.env.REACT_APP_GIT_SHA + '/badge.svg'}/>
                </a>
            </footer>
        </>
    )

}

BasePage.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BasePage;
