import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../entities/hooks';
import { changeInputValue, inputSelector } from '../../../entities/slices/inputSlice';
import Close from '../../assets/Close.svg'
import './input.scss'

export const Input: FC = () => {
    const value = useAppSelector(inputSelector)
    const dispatch = useAppDispatch()

    return (
        <>
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(changeInputValue(e.target.value))}
                className='storybook-input'
                value={value}
                placeholder='Search for Sneakers'
            />
            {value && <img onClick={() => dispatch(changeInputValue(""))} className='icon' src={Close} alt='close icon' />}
        </>


    );
}