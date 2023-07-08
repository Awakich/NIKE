import { FC } from 'react'
import Typography from '../Typography/Typography'
import './loading.scss'

const Loading: FC = () => {
    return (
        <p className='loading'>
            <Typography size='h1' weight='bold' text='Loading...' key={Math.random().toFixed(12).toString()} />
        </p>
    )
}

export default Loading