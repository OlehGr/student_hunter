export default function FileFieldErrorState({error, img}) {


    return (
        <>
            {(img && !!img.length) &&
            <>
                <span className={"material-symbols-outlined state-icon" + (error ? ' red' : ' green')}>
                    {error ? 'close' : 'done'}
                </span>

                {!error && <p>{img[0].name.slice(0, 15)}</p>}


                {error && <p className="red">{error.message}</p>}
            </>
            }
        </>
    )
}