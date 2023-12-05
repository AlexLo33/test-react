import UpdateTitle from "../../answers/UpdateTitle";

function PageExercice3() {
  return (
    <div className="PageExercice exercice-3">
      <p>
        Modifier le composant <b>"UpdateTitle"</b> pour que, une fois rendu, il
        modifie le titre de la page en <i>"React - Exercice 3"</i>.
      </p>
      <p>
        Vous devrez éditer le fichier <b>"answers/UpdateTitle.tsx"</b> et
        compléter le composant afin de gérer la modification du titre de la
        page.
      </p>
      <p>Rendu du composant :</p>
      <UpdateTitle />
    </div>
  );
}

export default PageExercice3;
