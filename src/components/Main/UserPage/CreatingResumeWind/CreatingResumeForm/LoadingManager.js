

export default function LoadingManager({isLoading, disabled}) {


    return (
        <>
            {
                isLoading ? <div className="lds-area"><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
                          : <button disabled={disabled} className="resume-creating-form__submit-btn">
                                Создать новую статью в резюме
                                <span className="material-symbols-outlined">
                                    done
                                </span>
                            </button>
            }
        </>
    )
}