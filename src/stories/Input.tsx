import { FC } from 'react'
import './input.scss'

interface InputProps { label: string; }

export const Input: FC<InputProps> = ({
    label
}) => {
    return (
        <input
            className='storybook-input'
            placeholder={`${label}`}
        />
    );
}