export default function PasswordHandler({isHidden, switchHidden}) {

    const color = isHidden ? '#000' : '#5e4298'

    return (
        <span className="material-symbols-outlined eye" style={{color: color}} onClick={switchHidden}>
            visibility
        </span>
    )
}