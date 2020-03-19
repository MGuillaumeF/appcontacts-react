import React from 'react';
import PropTypes from 'prop-types';
import './Title.css'

const Title = (props : any) => {
    let toggle : boolean = false;
    return (
        <div>
            <h1 className={toggle ? 'title-name text-error' : 'title-name text-success'}> Bonjour {props.nom}</h1>
        </div>
    );
}
Title.propTypes = {
    nom : PropTypes.string.isRequired
}

export default Title;