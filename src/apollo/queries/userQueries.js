import { gql } from 'apollo-boost';

export const USER_INFO = gql`
  query currentPerson {
    currentPerson {
      id
      first_name
      last_name
      full_name
      cover_photo {
        url
      }
      contact_detail {
        email
        phone
      }
      email
      gender
      dob
      is_admin
    }
  }
`;
