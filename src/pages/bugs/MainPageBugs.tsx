import { Button, IconStop, TitleWithIcon } from "@omng/storybook";
import { useEffect, useState } from "react";

// Components
import PageBug0 from "./PageBug0";
import PageBug1 from "./PageBug1";
import PageBug2 from "./PageBug2";
import PageBug3 from "./PageBug3";

function MainPageBugs() {
  const currentBugSession = sessionStorage.getItem("current-bug") ?? "0";
  const [currentBug, setCurrentBug] = useState(+currentBugSession);

  useEffect(() => {
    sessionStorage.setItem("current-bug", currentBug.toString());
  }, [currentBug]);

  const title = currentBug > 0 ? `Bug ${currentBug}` : "Bugs";

  return (
    <div className="MainPageBugs">
      <TitleWithIcon Icon={IconStop} title={title} />
      {currentBug === 0 ? <PageBug0 /> : null}
      {currentBug === 1 ? <PageBug1 /> : null}
      {currentBug === 2 ? <PageBug2 /> : null}
      {currentBug === 3 ? <PageBug3 /> : null}
      <div className="buttons">
        <Button
          onClick={() => setCurrentBug(currentBug - 1)}
          disabled={currentBug === 0}
        >
          Précédent
        </Button>
        <Button
          onClick={() => setCurrentBug(currentBug + 1)}
          disabled={currentBug === 6}
        >
          Suivant
        </Button>
      </div>
    </div>
  );
}

export default MainPageBugs;
