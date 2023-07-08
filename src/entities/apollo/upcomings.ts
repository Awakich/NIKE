import { gql } from '@apollo/client'

export const Upcomings = gql
    `
       query Upcomings {
        upcomings{
            data{
            id,
            attributes{
                title,
                description,
                img{
                        data{
                            attributes{
                            url,
                        }
                    }
                },
                Date{
                    month,
                    day
                }
            }
        }
    }
}
    `