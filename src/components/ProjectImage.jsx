export default function ProjectImage({ imagesrc, imagename }) {
    return (
        <img src={imagesrc} alt={imagename} className="project-image" />
    )
}