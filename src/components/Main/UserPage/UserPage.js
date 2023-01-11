import AvaImgContainer from "./AvaImg/AvaImgContainer";
import UserResumeContainer from "./UserResume/UserResumeContainer";
import UserBtns from "./UserBtns/UserBtns";
import CreatingResumeContainer from "./CreatingResumeWind/CreatingResumeContainer";
import CreatingAdvertWindContainer from "./CreatingAdvert/CreatingAdvertWindContainer";

export default function UserPage({id, email, name, surname, aftername, group, git, phone, role}) {
    

    return (
        <>
            <section className="user">

                <AvaImgContainer userId={id} />

                <div className="user__personal">
                    <p className="user__text user__text--purple">{role === "EMPLOYER" ? 'Работодатель' : 'Студент'}</p>
                    <p className="user__text user__text--weight">{surname}</p>
                    <p className="user__text user__text--weight">{name}</p>
                    <p className="user__text user__text--weight">{aftername}</p>
                </div>

                <div className="user__meta">
                    <p className="user__text user__text--weight"><span className="user__text--purple">Группа:</span> {group}</p>
                    <p className="user__text user__text--weight"><span className="user__text--purple">Логин:</span> {email}</p>
                    <p className="user__text user__text--weight"><span className="user__text--purple">Телефон:</span> {phone}</p>
                    <p className="user__text user__text--weight"><span className="user__text--purple">Github:</span> {git}</p>
                </div>

                <div className="user__btns">
                    <UserBtns role={role} />
                </div>

                <div className="user__resume">
                    <UserResumeContainer />

                </div>
            </section>

            <CreatingResumeContainer />
            <CreatingAdvertWindContainer />
        </>
    )
}