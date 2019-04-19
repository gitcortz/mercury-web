import axios from "axios";
import api from "./api";
import {
  CONTACT_GET,
  CONTACTS_GET,
  CONTACT_LOADING,
  ERRORS_GET
} from "./types";

//Create contact
export const createContact = (contactData, history) => async dispatch => {
  try {
    const res = await api.post("/contact", contactData);
    history.push("/contact");
    dispatch({
      type: ERRORS_GET,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: ERRORS_GET,
      payload: err.reponse.data
    });
  }
};

//Get contacts
export const getContacts = () => async dispatch => {
  dispatch(setContactLoading());
  const res = await api.get("/contact");
  dispatch({
    type: CONTACTS_GET,
    payload: res.data
  });
};

//Get contact
export const getContact = (id, history) => async dispatch => {
  //dispatch(setContactLoading());
  console.log("get contact " + id);
  const res = await api.get(`/contact/${id}`);
  dispatch({
    type: CONTACT_GET,
    payload: res.data
  });
};

//Update contact
export const updateContact = (id, contactData, history) => async dispatch => {
  console.log("updateContact - " + id);
  try {
    await api.put(`/contact/${id}`, contactData);
    history.push("/contact");
    dispatch({
      type: ERRORS_GET,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: ERRORS_GET,
      payload: err.response.data
    });
  }
};

//Contact loading
export const setContactLoading = () => {
  return { type: CONTACT_LOADING };
};
