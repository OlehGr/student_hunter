export default function NamingFieldErrorState({isValid, isUsed}) {


    return (
        <>
            <span className={"material-symbols-outlined state-icon" + (isValid ? ' green' : ' red')}>
                {isUsed && (isValid ? 'done' : 'close')}
            </span>
        </>
    )
}