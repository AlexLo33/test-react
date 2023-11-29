import { Button, IconQuestion, TitleWithIcon } from "@omng/storybook";
import { useEffect, useState } from "react";

// Components
import PageExercice0 from "./PageExercice0";
import PageExercice1 from "./PageExercice1";
import PageExercice2 from "./PageExercice2";
import PageExercice3 from "./PageExercice3";
import PageExercice4 from "./PageExercice4";
import PageExercice5 from "./PageExercice5";
import PageExercice6 from "./PageExercice6";

// Styles
import "./MainPageExercices.scss";

function MainPageExercices() {
  const currentExerciceSession =
    sessionStorage.getItem("current-exercice") ?? "1";
  const [currentExercice, setCurrentExercice] = useState(
    +currentExerciceSession
  );

  useEffect(() => {
    sessionStorage.setItem("current-exercice", currentExercice.toString());
  }, [currentExercice]);

  const title =
    currentExercice > 0 ? `Exercice ${currentExercice}` : "Exercices";

  return (
    <div className="MainPageExercices">
      <TitleWithIcon Icon={IconQuestion} title={title} />
      {currentExercice === 0 ? <PageExercice0 /> : null}
      {currentExercice === 1 ? <PageExercice1 /> : null}
      {currentExercice === 2 ? <PageExercice2 /> : null}
      {currentExercice === 3 ? <PageExercice3 /> : null}
      {currentExercice === 4 ? <PageExercice4 /> : null}
      {currentExercice === 5 ? <PageExercice5 /> : null}
      {currentExercice === 6 ? <PageExercice6 /> : null}
      <div className="buttons">
        <Button
          onClick={() => setCurrentExercice(currentExercice - 1)}
          disabled={currentExercice === 0}
        >
          Précédent
        </Button>
        <Button
          onClick={() => setCurrentExercice(currentExercice + 1)}
          disabled={currentExercice === 6}
        >
          Suivant
        </Button>
      </div>
    </div>
  );
}

export default MainPageExercices;
