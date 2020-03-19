import React from 'react';
type TitleProps = {
    nom? : string
}

const Title = (props : any) => <div>
<h1>Bonjour {props.nom !== undefined ? props.nom : 'JonDoe'}</h1>
<h2>{props.children}</h2>

</div>

export default Title;