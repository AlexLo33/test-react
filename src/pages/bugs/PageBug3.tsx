import ExpensiveList from "../../answers/ExpensiveList";

function PageBug3() {
  return (
    <div className="PageBug bug-3">
      <p>
        Le composant <b>"ExpensiveList"</b> est très lent à s&apos;afficher.
        Surtout lorsqu&apos;on filtre la liste pour chercher un numéro en
        particulier.
      </p>
      <p>
        Vous devrez éditer le fichier <b>"answers/ExpensiveList.tsx"</b> et
        optimiser le composant afin de le rendre plus <i>"smooth"</i>.
      </p>
      <ExpensiveList />
    </div>
  );
}

export default PageBug3;
