// nav bar to include the search button and the history button

import { React } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <NavLink className="nav-link" exact  to="/">
          Hacker News 
         </NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <NavLink className="nav-link" exact to="/search">
             Search       </NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link" exact to="/history">
          History
     </NavLink>
      </li>
      
    </ul>
  </div>
</nav>
  );
};

export default Navbar;