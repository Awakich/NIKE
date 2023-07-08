import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../../entities/hooks"
import { closeFilter, filterSelector } from "../../../entities/slices/filterSlice"
import { Input } from "../Input/Input"
import FilterList from "./FilterList/FilterList"
import filter from '../../assets/Filter.svg'
import Typography from "../Typography/Typography"
import './filter.scss'

const Filter: FC = () => {
    const open = useAppSelector(filterSelector)
    const dispatch = useAppDispatch()

    return (
        <section className="filter">
            <div className="filter--box" onClick={() => dispatch(closeFilter(!open))}>
                <Typography size="small" text="Sort By" key={Math.random().toFixed(12).toString()} weight="normal" />
                <img alt="filter-img" src={filter} />
            </div>
            {open && <FilterList />}
            <Input />
        </section >
    )
}

export default Filter