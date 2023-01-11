import CreatingResumeFormContainer from "./CreatingResumeForm/CreatingResumeFormContainer";

export default function CreatingResumeWind({onCloseCreatingResume}) {

    return (
        <section className="create-wind">
            <button className="create-wind__close-wind" onClick={onCloseCreatingResume}>
                <span className="material-symbols-outlined">
                    close
                </span>
            </button>

            <h2 className="create-wind__title">Новая статья в вашем резюме</h2>
            <CreatingResumeFormContainer onCloseCreatingResume={onCloseCreatingResume} />
        </section>
    )
}