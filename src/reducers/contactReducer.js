import { CONTACT_GET, CONTACTS_GET, CONTACT_LOADING } from "../actions/types";

const initialState = {
  contact: null,
  contacts: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CONTACT_LOADING:
      return {
        ...state,
        loading: true
      };
    case CONTACT_GET:
      return {
        ...state,
        contact: action.payload,
        loading: false
      };
    case CONTACTS_GET:
      return {
        ...state,
        contacts: action.payload.data,
        loading: false
      };
    default:
      return state;
  }
}
