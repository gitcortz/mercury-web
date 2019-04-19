import {
  CONTACT_GET,
  CONTACTS_GET,
  CONTACT_DELETE,
  CONTACT_LOADING
} from "../actions/types";

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
        contact: action.payload.data,
        loading: false
      };
    case CONTACTS_GET:
      console.log(action.payload.data);
      return {
        ...state,
        contacts: action.payload.data,
        loading: false
      };
    case CONTACT_DELETE:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
        loading: false
      };
    default:
      return state;
  }
}
