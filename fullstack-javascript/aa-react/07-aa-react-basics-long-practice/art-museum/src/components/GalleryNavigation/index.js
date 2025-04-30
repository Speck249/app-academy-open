import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css"

const GalleryNavigation = ({ galleries }) => {
  return (
    <>
      <h1>Galleries</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" className="nav-link">Home</NavLink>
            {galleries.map((gallery) => {
                return <NavLink key={gallery.galleryid} to={`/galleries/${gallery.galleryid}`} className="nav-link">{gallery.name}</NavLink>
             })
            }
          </li>
        </ul>
      </nav>
    </>
  )
}
export default GalleryNavigation;