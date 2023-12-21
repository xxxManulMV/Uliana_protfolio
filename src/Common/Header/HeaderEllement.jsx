import {NavLink, useLocation} from "react-router-dom";

export default function HeaderElement({path, name, currentLocation}) {
  return (
    <NavLink
      to={path}
      className= {
        `      
          ${currentLocation === path ? 'text-black' : 'text-black/40'}      
          font-medium          
          hover:underline hover:text-black/70                    
        `
      }
    >
      {name}
    </NavLink>
  )
}