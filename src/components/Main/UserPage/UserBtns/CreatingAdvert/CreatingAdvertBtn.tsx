import { IAdvertBtn } from "./Types";


export default function CreatingAdvertBtn({openCreatingAdvertWind}:IAdvertBtn) {

    return (
        <>
            <button className="user-button" onClick={openCreatingAdvertWind}>
                Добавить новое объявление
                <span className="material-symbols-outlined">
                    add
                </span>
            </button>
        </>
    )
}