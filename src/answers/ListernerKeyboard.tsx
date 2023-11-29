import { Badge } from "@omng/storybook";

function ListernerKeyboard() {
  const keyCode = ""; // todo : modifier cette variable

  // displayedText : ne pas toucher
  const displayedText =
    "ListernerKeyboard - code de la touche pressée : " + keyCode;

  return <Badge text={displayedText} variant="white" />;
}

export default ListernerKeyboard;
