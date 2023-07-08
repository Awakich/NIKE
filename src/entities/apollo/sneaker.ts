import { gql } from '@apollo/client'

export const Sneaker = gql
    `
      query getSneaker($id: ID!){
    sneaker(id: $id){
      data{
        id,
        attributes{
          title,
          description,
          price,
          Button{
            label,
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