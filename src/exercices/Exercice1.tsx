import React, { Fragment, useState } from "react";

function PrimaryTitle(props: { text: string }): JSX.Element {
  return <h1>{props.text}</h1>;
}
function SecondaryTitle(props: { text: string }): JSX.Element {
  return <h2>{props.text}</h2>;
}
function ThirdTitle(props: { text: string }): JSX.Element {
  return <h3>{props.text}</h3>;
}

function Title(props: { text: string; component: Function }): JSX.Element {
  const Compo = props.component;
  return <Compo text={props.text} />;
}


// Le composant Exercie1 doit :
// contenir un composant "Titre" et un "button"
// à l'initialisation le composant Titre affiche "Aucun clique" de premier niveau
// au premier Clique sur le bouton le Titre devient un titre de second niveau avec le contenu "Nombre de clique impaire : 1"
// au second Clique sur le bouton le Titre devient un titre de troisième niveau avec le contenu "Nombre de clique paire : 2"
// au troisième clique "impaire : 3"
// etc...
export function Exercice1() {
  const [nb, setNb] = useState(0);
  function handleClickEvent() {
    setNb(nb + 1);
  }

  function renderText() : string {
    let text = "Aucun clique";
    if (nb !== 0) {
      text = `Nombre de clique ${(nb % 2 === 0) ? "" : "im"}paire : ${nb}`;
    }
    return text;
  }
  function renderCompo() : Function {
    let compo = PrimaryTitle;
    if (nb !== 0) {
      compo = nb % 2 === 0 ? SecondaryTitle : ThirdTitle;
    }
    return compo;
  }

  return (
    <Fragment>
      <Title
        text={renderText()}
        component={renderCompo()}
      />
      <button onClick={handleClickEvent}>Cliquez-moi</button>
    </Fragment>
  );
}
