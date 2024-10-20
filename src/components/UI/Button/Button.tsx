import React from "react"
import { SButton } from "./Button.style"
interface TButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    buttonText:string
    isPrimary?:boolean
}

export const Button = ({buttonText ,isPrimary}:TButton)=>{
    return(
        <SButton isPrimary ={isPrimary}>{buttonText}</SButton>
    )
}