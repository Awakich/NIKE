import { FC } from 'react'
import { Dates } from '../../../types/models'
import Typography from '../Typography/Typography'
import './date.scss'

const Date: FC<Dates> = ({ day, month }) => {
    return (
        <section className='date'>
            <Typography text={`${month}`} size='medium' weight='bold' key={Math.random().toFixed(12).toString()} />
            <Typography text={`${day}`} size='h2' weight='bold' key={Math.random().toFixed(12).toString()} />
        </section>
    )
}

export default Date