import Card from "../../answers/Card";

function PageExercice1() {
  return (
    <div className="PageExercice exercice-1">
      <p>
        Créer un composant <b>"Card"</b> qui prend en props 2 paramètres :{" "}
      </p>
      <pre>
        {`
        title: string;

        year: number;
      `}
      </pre>
      <p>
        Vous devrez éditer le fichier <b>"answers/Card.tsx"</b> et compléter le
        composant afin d'afficher le titre et l&apos;année dans 2 paragraphes
        respectifs.
      </p>
      <p>Rendu du composant :</p>
      <Card title="Date de la 1ère version de React" year={2013} />
    </div>
  );
}

export default PageExercice1;
