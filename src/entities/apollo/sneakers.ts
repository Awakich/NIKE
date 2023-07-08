import { Sort } from "types/models"
import { gql } from '@apollo/client'

export const Sneakers = (sortTypes: Sort) => {
    const AllSneakers = gql
        `
    query getSneakers{
    sneakers(sort: ["price:${sortTypes.sort}", "title:asc"], pagination: { limit: 50 }){
        data{
        id,
        attributes{
            title,
            description,
            price,
            img{
            data{
                attributes{
                url
                }
            }
            }
        }
        }
    }
    }
`
    return AllSneakers;
}