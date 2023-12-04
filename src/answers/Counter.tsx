import { Button } from "@omng/storybook";
import { useEffect, useState } from "react";

function CountInputChanges() {
  const [count, setCount] = useState(-1);

  useEffect(() => setCount(count + 1));

  const onChange = () => setCount(count + 1);

  return (
    <div>
      <Button variant="secondary" onClick={onChange} label="Increment" />
      <div style={{ marginTop: 15 }}>Number of changes: {count}</div>
    </div>
  );
}

export default CountInputChanges;
