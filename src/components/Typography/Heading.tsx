
type THeadingText={
    headingText:string
}

export const Heading = ({headingText}:THeadingText)=>{
    return(
        <h1>{headingText}</h1>
    )
}