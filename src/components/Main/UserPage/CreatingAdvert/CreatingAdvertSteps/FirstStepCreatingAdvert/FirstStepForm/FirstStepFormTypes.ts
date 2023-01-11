export type FirstStepFormData = {
    title:string | undefined
    description:string | undefined
    img:FileList | undefined
    
}

export type FirstStepFormProps = {
    submitFirstStepForm: (data:FirstStepFormData) => void
    formData: {
        title:string | undefined
        description:string | undefined
        img:FileList | undefined
    }
}