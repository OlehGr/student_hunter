export type BtnsContainerProps = {
    handleSubmit: () => void
}

export type BtnsProps = {
    onStepBtnClick: (nextStep:number) => void
    step:number
}