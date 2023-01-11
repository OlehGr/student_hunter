

export default function CreatingResumeBtn({onResumeCreatingClick}) {

    return (
        <>
            <button className="user-button" onClick={onResumeCreatingClick}>
                Добавить новую статью в резюме
                <span className="material-symbols-outlined">
                    edit_square
                </span>
            </button>
        </>
    )
}