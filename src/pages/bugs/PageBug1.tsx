import Button from "../../answers/Button";

function PageBug1() {
  return (
    <div className="PageBug bug-1">
      <p>
        Le composant <b>"Button"</b> a un petit bug. Normalement, sur le clic du
        bouton, on devrait afficher une <b>"alert"</b> avec un message à
        l&apos;intérieur.
      </p>
      <p>
        Mais comme vous avez pu le voir, l&apos;<b>"alert"</b> se lance sans
        avoir besoin de cliquer sur le bouton...
      </p>
      <p>
        Vous devrez éditer le fichier <b>"answers/Button.tsx"</b> et réparer le
        composant.
      </p>
      <Button />
    </div>
  );
}

export default PageBug1;
