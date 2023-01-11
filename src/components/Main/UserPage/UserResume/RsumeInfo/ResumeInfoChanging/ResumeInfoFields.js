import TitleField from "./ResumeInfoForm/TitleField";
import DescTextarea from "./ResumeInfoForm/DescTextarea";
import {useFormContext} from "react-hook-form";


export default function ResumeInfoFields({id, title, description, isLoading}) {

    const {formState: {isValid}} = useFormContext()






    return (
        <>

                <TitleField title={title} />
                <DescTextarea description={description} />

                {
                    isLoading ? <div className="loader-pos"><span className="resume-info-loader"></span></div>

                              : <button disabled={!isValid}
                                        className="resume-form__sub-btn"
                                        type="submit">
                                    <span className="material-symbols-outlined">
                                        done
                                    </span>
                                </button>
                }


        </>
    )
}