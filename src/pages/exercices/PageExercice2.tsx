import ToggleButton from "../../answers/ToggleButton";

function PageExercice2() {
  return (
    <div className="PageExercice exercice-2">
      <p>
        Créer un composant <b>"ToggleButton"</b> qui va gérer un état en
        interne. Cet état permettra de switcher entre 2 variants de Bouton :
        "primary" et "secondary"
      </p>
      <pre>
        {`
        <Button variant="primary">Je suis un bouton !</Button

        <Button variant="secondary">Je suis un bouton !</Button
      `}
      </pre>
      <p>
        L&apos;état de départ sera "primary"", et un clic sur le bouton devra
        changer son état.
      </p>
      <p>
        Vous devrez éditer le fichier <b>"answers/ToggleButton.tsx"</b> et
        compléter le composant afin de gérer l&apos;état interne et
        d&apos;afficher le texte correspondant, de la bonne couleur évidemment
      </p>
      <p>Rendu du composant :</p>
      <ToggleButton />
    </div>
  );
}

export default PageExercice2;
