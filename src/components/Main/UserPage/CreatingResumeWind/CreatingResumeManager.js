import CreatingResumeWindContainer from "./CreatingResumeWindContainer";

export default function CreatingResumeManager({isOpen}) {

    return (
        <>
            {
                isOpen ? <CreatingResumeWindContainer />
                       : undefined
            }
        </>
    )
}