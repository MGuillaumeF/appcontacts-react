import React from 'react';
import PropTypes from 'prop-types';

const Title = (props : any) => {
    return (
        <div>
            <h1> Bonjour {props.nom}</h1>
        </div>
    );
}
Title.propTypes = {
    nom : PropTypes.string.isRequired
}

export default Title;