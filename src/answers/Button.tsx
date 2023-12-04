// @ts-nocheck
import { Button as BtnOmng } from "@omng/storybook";

function Button() {
  const handleClick = () => {
    alert("Attention derrière toi !");
  };
  return <BtnOmng onClick={handleClick()}>Je suis un bouton !</BtnOmng>;
}

export default Button;
