import { FC } from 'react'
import './filterlist.scss'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { closeFilter, filterSelector, sortTypes } from '../../../../redux/slices/filterSlice'
import { ISort } from '../../../../models'

const FilterList: FC = ({ }) => {
    const dispatch = useAppDispatch()
    const open = useAppSelector(filterSelector)
    const sort: ISort[] = [{ name: 'Price: Low to High', sort: 'asc' }, { name: 'Price: High to Low', sort: 'desc' }]

    const changeSelectHandler = (i: ISort) => {
        dispatch(closeFilter(!open))
        dispatch(sortTypes(i))
    }

    return (
        <ul className='filter--list'>
            {sort.map((obj: ISort, i: number) => (
                <li className='filter--list--item' key={i as number} onClick={(): void => changeSelectHandler(obj as ISort)}>{obj.name}</li>
            ))}
        </ul>
    )
}

export default FilterList