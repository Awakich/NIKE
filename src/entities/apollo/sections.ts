import { gql } from '@apollo/client'

export const AllSections = gql
    `
    query getSections{
    sections{
        data{
        id,
        attributes{
            pretitle,
            title,
            description,
            Button{
                label
            },
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