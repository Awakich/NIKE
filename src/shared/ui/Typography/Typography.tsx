import { FC } from 'react'
import './typography.scss'

type Typography =  {
    text: string;
    weight?: "normal" | "bold";
    size: "h1" | "h2" | "medium" | "small";
}

const Typography: FC<Typography> = ({ text, weight = "normal", size }) => {
    const mode = weight == "bold" ? 'typography--bold' : 'typography--normal'
    return (
        <p className={[`typography typography--${size}`, mode].join(' ')}>{text}</p>
    )
}

export default Typography