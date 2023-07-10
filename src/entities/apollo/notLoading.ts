import { gql } from '@apollo/client'

export const notLoading = gql
    `
        query notLoading{
            notLoading(id: 1){
                data{
                id,
                attributes{
                    title,
                    description,
                    Button{
                    label
                    }
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