import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ArtDescription = ({ galleries }) => {
  const { galleryId, artId } = useParams();

  const gallery = galleries.find((g) => g.galleryid.toString() === galleryId);
  if (!gallery) { return <h2>Gallery not found.</h2> }
  
  const art = gallery.objects.find((obj) => obj.id.toString() === artId);
  if (!art) { return <h2>Artwork not found in this gallery.</h2> }

  return (
    <div className="art-description">
      <h2>{art.title || "Untitled"}</h2>
      {art.images && art.images.length > 0 && (
        <img
          src={art.images[0].baseimageurl}
          alt={art.title}
          className="art-image"
        />
      )}
      <p><strong>Artist:</strong> {art.people?.[0]?.name || "Unknown"}</p>
      <p><strong>Dated:</strong> {art.dated || "Unknown date"}</p>
      <p><strong>Medium:</strong> {art.medium || "Not specified"}</p>
      <p><strong>Description:</strong> {art.description || "No description available."}</p>
    </div>
  );
};

export default ArtDescription;
