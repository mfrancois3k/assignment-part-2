import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div id="nav">
      <h1>Cats & Dogs</h1>
      <p>
        {" "}
        its <strong> <u>ugly</u></strong> i know but i just glad it works lol
      </p>
      <ul>
        <NavLink to="/Dogs">
          <li>I like Dogs 🐕 </li>
        </NavLink>

        <NavLink to="/Cats">
          <li> I like Cats 🐈 </li>
        </NavLink>
      </ul>
    </div>
  );
}
