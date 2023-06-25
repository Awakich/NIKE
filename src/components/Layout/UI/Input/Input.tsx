import { FC } from 'react'
import './input.scss'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { changeInputValue, inputSelector } from '../../../../redux/slices/inputSlice';

export const Input: FC = () => {
    const value = useAppSelector(inputSelector)
    const dispatch = useAppDispatch()

    return (
        <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(changeInputValue(e.target.value))}
            className='storybook-input'
            value={value}
            placeholder='Search for Sneakers'
        />
    );
}