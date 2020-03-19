import React, { FunctionComponent } from 'react';

type TitleProps = {
    nom : string
}

const Title:FunctionComponent<TitleProps> = ({nom, children}) => <div>
<h1>Ceci est un titre pour {nom}</h1>
<h2>{children}</h2>

</div>


export default Title;