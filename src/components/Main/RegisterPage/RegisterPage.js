import concept_img from "../../../img/arts/student-concept.jpg"
import NameField from "./Fields/NameField";
import GroupField from "./Fields/GroupField";
import GithubField from "./Fields/GithubField";
import PhoneField from "./Fields/PhoneField";
import EmailField from "./Fields/EmailField";
import PasswordField from "./Fields/PasswordField";
import RepeatPasswordField from "./Fields/RepeatPasswordField";
import {useForm, FormProvider} from "react-hook-form";
import FileField from "./Fields/FileField";
import RoleChoiceField from "./Fields/RoleChoiceField";
import Loader from "../../Loader/Loader";


export default function RegisterPage({error, email, phone, register}) {


    const RegisterForm = useForm({mode: "onChange"})

    const {handleSubmit, reset, formState} = RegisterForm

    const submitRegister = data => {
        const {email, phone, password, name, surname, aftername, group, github, role, img} = data
        register(email, phone, password, name, surname, aftername, group, github, role, img[0])
    }

    return (
        <>
            <section className="section section--reg">
                <div className="container container--reg">
                    <FormProvider {...RegisterForm}>
                        <form className="reg-form" onSubmit={handleSubmit(data => submitRegister(data))}>
                            <div className="reg-form__ava">
                                <FileField />
                            </div>
                            <div className="reg-form__personal">
                                <div className="form-field form-field--personal">
                                    <NameField name='surname' placeholder="Фамилия" />
                                </div>

                                <div className="form-field form-field--personal">
                                    <NameField name='name' placeholder="Имя" />
                                </div>

                                <div className="form-field form-field--personal">
                                    <NameField name='aftername' placeholder="Отчество" />
                                </div>

                                <div className="form-field form-field--personal">
                                    <GroupField />
                                </div>

                            </div>

                            <div className="reg-form__role">
                                <RoleChoiceField />
                            </div>
                            <div className="reg-form__meta">
                                <div className="fields-meta">
                                    <div className="form-field form-field--meta">
                                        <GithubField />
                                    </div>

                                    <div className="form-field form-field--meta">
                                        <PhoneField {...phone} />
                                    </div>

                                    <div className="form-field form-field--meta">
                                        <EmailField {...email} />
                                    </div>

                                    <div className="form-field form-field--meta">
                                        <PasswordField />
                                    </div>

                                    <div className="form-field form-field--meta">
                                        <RepeatPasswordField />
                                    </div>
                                </div>

                                <div className="reg-form__submit">
                                    <img className="reg-img" src={concept_img} alt="Картинка"/>

                                    <button disabled={!formState.isValid} className="submit-btn submit-btn--reg" type="submit">Зарегестрироваться</button>
                                </div>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </section>
            <Loader />
        </>
    )
}