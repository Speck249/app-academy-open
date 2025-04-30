import { Route, useParams } from "react-router-dom/cjs/react-router-dom.min";
import ArtImageTile from "../ArtImageTile/index";
import ArtDescription from "../ArtDescription";
import "./GalleryView.css"


const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();
    const galleryPiece = galleries.find((gallery) => gallery.galleryid.toString() === galleryId)
    if (!galleryPiece) return <h2>Gallery Not Found</h2>

    return (
      <>
        <h1>Gallery View</h1>
        <h2>{galleryPiece.name}</h2>
        {galleryPiece.objects.map((object) => {
            return <ArtImageTile key={object.id} art={object} /> 
        })}

        <Route path="/galleries/:galleryId/art/:artId">
            <ArtDescription galleries={galleries}/>
        </Route>
      </>
    )
}
export default GalleryView;