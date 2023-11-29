import ToggleButton from "../../answers/ToggleButton";

function PageExercice4() {
  return (
    <div className="PageExercice exercice-4">
      <p>
        Reprendre le composant <b>"ToggleButton"</b> et le modifier afin
        qu&apos;il modifie le titre de la page en{" "}
        <i>"React - My button is (primary || secondary)"</i> .
      </p>
      <p>
        Vous devrez éditer le fichier <b>"answers/ToggleButton.tsx"</b> et
        compléter le composant afin de gérer la modification du titre de la
        page.
      </p>
      <p>Le composant sera affiché juste en dessous :</p>
      <ToggleButton />
    </div>
  );
}

export default PageExercice4;
