import { Avatar } from "@omng/storybook";

import AvatarProfilePic from "../assets/profile-pic-1.png";

interface User {
  id: number;
  name: string;
  age: number;
}

/* Ne pas toucher à "users" */
const users: User[] = [
  {
    id: 1,
    name: "John",
    age: 23,
  },
  {
    id: 2,
    name: "Jane",
    age: 21,
  },
  {
    id: 3,
    name: "Peter",
    age: 31,
  },
  {
    id: 4,
    name: "Kate",
    age: 19,
  },
  {
    id: 5,
    name: "Joe",
    age: 29,
  },
];

/* Ne pas toucher à "User" */
function User({ user }: { user: User }) {
  return (
    <div className="User">
      <Avatar src={AvatarProfilePic} size="small" />
      <div className="name">{user.name}</div>
      <div className="age">{user.age}</div>
    </div>
  );
}

function ArrayList() {
  return (
    /* Ne pas toucher à "className" */
    <div className="ArrayList"></div>
  );
}

export default ArrayList;
