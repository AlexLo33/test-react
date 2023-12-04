import { useMemo, useState } from "react";
import { TextField } from "@omng/storybook";

interface Item {
  number: number;
  factorial: number;
}

const factorialOf: (n: number) => number = (n: number) =>
  n <= 0 ? 1 : n * factorialOf(n - 1);

function ExpensiveList() {
  const [filter, setFilter] = useState<string>("");
  const items: Item[] = Array.from({ length: 10000 }).map((_, i) => ({
    number: i + 1,
    factorial: factorialOf(i + 1),
  }));

  const filteredItems = items.filter(
    ({ number }) => !filter || number === +filter
  );

  return (
    <div className="ExpensiveList">
      <TextField
        label="Filtrer un numéro de la liste"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <ul>
        {filteredItems.map(({ number, factorial }) => (
          <li key={number}>
            {number}! = {factorial}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpensiveList;
