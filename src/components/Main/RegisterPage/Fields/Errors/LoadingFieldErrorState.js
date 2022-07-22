export default function LoadingFieldErrorState({isValid, isUsed, isLoading}) {

    return (
        <>
            {!isLoading &&
                <>
                    <span className={"material-symbols-outlined state-icon" + (isValid ? ' green' : ' red')}>
                        {isUsed && (isValid ? 'done' : 'close')}
                    </span>
                </>
            }
            {isLoading &&
                <>
                    <span className={"state-icon"}>
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </span>
                </>
            }
        </>
    )
}