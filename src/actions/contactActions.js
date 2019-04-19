import axios from "axios";
import {
  CONTACT_GET,
  CONTACTS_GET,
  CONTACT_LOADING,
  ERRORS_GET
} from "./types";
import api from "./api";

//Get contact
export const getContact = () => dispatch => {
  console.log("get contact");
  dispatch(setContactLoading());
  api
    .get("/contact/03451f73-b259-4824-8c71-78abd635a8e8")
    .then(res =>
      dispatch({
        type: CONTACT_GET,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: ERRORS_GET,
        payload: {}
      });
    });
};

//Get contacts
export const getContacts = () => dispatch => {
  console.log("get contacts");
  dispatch(setContactLoading());
  api
    .get("/contact")
    .then(res =>
      dispatch({
        type: CONTACTS_GET,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: ERRORS_GET,
        payload: {}
      });
    });
};
//Create contact
export const createContact = (contactData, history) => dispatch => {
  console.log("createContact - " + contactData);
  api
    .post("/contact", contactData)
    .then(res => history.push("/contact"))
    .catch(err =>
      dispatch({
        type: ERRORS_GET,
        payload: err.reponse.data
      })
    );
};

//Contact loading
export const setContactLoading = () => {
  return { type: CONTACT_LOADING };
};
