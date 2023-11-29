import UpdateTitle from "../../answers/UpdateTitle";

function PageExercice3() {
  return (
    <div className="PageExercice exercice-3">
      <p>
        Créer un composant <b>"UpdateTitle"</b> qui, une fois rendu, modifie le
        titre de la page en <i>"React - Exercice 3"</i>.
      </p>
      <p>
        Vous devrez éditer le fichier <b>"answers/UpdateTitle.tsx"</b> et
        compléter le composant afin de gérer la modification du titre de la
        page.
      </p>
      <p>
        Le composant est déjà appelé juste en dessous, pas besoin de
        s&apos;occuper de ça....
      </p>
      <UpdateTitle />
    </div>
  );
}

export default PageExercice3;
