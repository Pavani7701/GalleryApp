// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {galleryDetails, isActive, updateThumbNailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = galleryDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnail = () => {
    updateThumbNailId(id)
  }

  return (
    <li className="thumbnail-listitems">
      <button className="button" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          className={thumbnailClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
