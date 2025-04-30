import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./ArtImageTile.css";

const ArtImageTile = ({ art }) => {
    const { galleryId } = useParams();
    const imgUrl = art.images[0].baseimageurl

    if (!art.images || art.images.length === 0) return null;
    return (
        <div className="imageContainer">
          <Link exact to={`/galleries/${galleryId}/art/${art.id}`}>
            <img src={imgUrl} alt={`/galleries/${galleryId}/art/${art.id}`} />
          </Link>
        </div>
    )
}
export default ArtImageTile;