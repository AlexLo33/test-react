import Counter from "../../answers/Counter";

function PageBug2() {
  return (
    <div className="PageBug bug-2">
      <p>
        Le composant <b>"Counter"</b> rencontre un petit soucis. Il est coincé
        dans ce qu&apos;on appelle une <b>"boucle infinie"</b>. C&apos;est à
        dire que le composant se met à jour en boucle, sans jamais
        s&apos;arrêter.
      </p>
      <p>
        Le composant devrait se mettre à jour uniquement lorsque le bouton
        &quot;Increment&quot; est cliqué.
      </p>
      <p>
        Vous devrez éditer le fichier <b>"answers/Counter.tsx"</b> et réparer le
        composant.
      </p>
      <Counter />
    </div>
  );
}

export default PageBug2;
