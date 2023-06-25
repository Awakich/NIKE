import { FC } from "react"
import filter from '../../../assets/Filter.svg'
import './filter.scss'
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { closeFilter, filterSelector } from "../../../redux/slices/filterSlice"
import FilterList from "./FilterList/FilterList"
import { Input } from "../../../components/Layout/UI/Input/Input"

const Filter: FC = () => {
    const open = useAppSelector(filterSelector)
    const dispatch = useAppDispatch()

    return (
        <section className="filter">
            <div className="filter--box" onClick={() => dispatch(closeFilter(!open))}>
                <h4 className="filter--box--title">Sort By</h4>
                <img alt="filter-img" src={filter} />
            </div>
            {open && <FilterList />}
            <Input />
        </section >
    )
}

export default Filter