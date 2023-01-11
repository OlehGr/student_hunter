export default function ResumeInfo({id, title, description, deleteInfo, openResumeChangingWind}) {

    const onDelClick = async () => await deleteInfo(id)

    const onEditClick = () => openResumeChangingWind(id)


    return (
        <>
            <div className="resume-card">
                <button className="delete-btn" onClick={onDelClick}>
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                </button>

                <button className="edit-btn" onClick={onEditClick}>
                    <span className="material-symbols-outlined">
                        border_color
                    </span>
                </button>

                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
            </div>
        </>
    )
}