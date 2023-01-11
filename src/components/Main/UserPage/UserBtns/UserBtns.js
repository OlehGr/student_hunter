import CreatingResumeBtnContainer from "./CreatingResume/CreatingResumeBtnContainer";
import CreatingAdvertBtnContainer from './CreatingAdvert/CreatingAdvertBtnContainer'

export default function UserBtns({role}) {


    return (
        <>
            <CreatingResumeBtnContainer />
            {role === 'EMPLOYER' && <CreatingAdvertBtnContainer />}
        </>
    )
}