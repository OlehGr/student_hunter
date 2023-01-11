export default function AvaImg({img}) {

    return (
        <>
            <img className="user__ava" src={"http://localhost:3030/" + img} alt="Картинка пользователя"/>
        </>
    )
}