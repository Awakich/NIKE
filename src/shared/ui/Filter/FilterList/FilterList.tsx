import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../entities/hooks'
import { closeFilter, filterSelector, sortTypes } from '../../../../entities/slices/filterSlice'
import { Sort } from '../../../../types/models'
import Typography from '../../Typography/Typography'
import './filterlist.scss'

const FilterList: FC = ({ }) => {
    const dispatch = useAppDispatch()
    const open = useAppSelector(filterSelector)
    const sort: Sort[] = [{ name: 'Price: Low to High', sort: 'asc' }, { name: 'Price: High to Low', sort: 'desc' }]

    const changeSelectHandler = (i: Sort) => {
        dispatch(closeFilter(!open))
        dispatch(sortTypes(i))
    }

    return (
        <ul className='filter--list'>
            {sort.map((obj: Sort, i: number) => (
                <li className='filter--list--item' key={i as number} onClick={(): void => changeSelectHandler(obj as Sort)}>
                    <Typography text={`${obj.name}`} key={Math.random().toFixed(12).toString()} size='small' weight='bold' />
                </li>
            ))}
        </ul>
    )
}

export default FilterList