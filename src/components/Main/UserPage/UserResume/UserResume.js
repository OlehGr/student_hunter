
import ResumeInfosContainer from "./RsumeInfo/ResumeInfosContainer";

export default function UserResume({infos}) {


    return (
        <>
            <h2 className="title">Резюме</h2>

            <div className="resume-infos">
                <ResumeInfosContainer infos={infos} />
            </div>
        </>
    )
}