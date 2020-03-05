import {
    CONTACT_SAVED,
    CONTACT_UPDATED,
    CREATE_CONTACT,
    EDIT_CONTACT,
    GET_ALL_CONTACTS,
    RECEIVED_ALL_CONTACTS,
    RECEIVED_CONTACT_FOR_EDIT,
    SAVE_CONTACT,
    UPDATE_CONTACT
} from "../Helpers/Constants";
import ContactListClient from "../Clients/ContactListClient";

const initialState = {
    contacts: []
};

export default function ContactListReducer(state = initialState, action) {
    let contactListClient = new ContactListClient();

    switch (action.type) {
        case GET_ALL_CONTACTS:
            contactListClient.all(action.page, action.limit, action.searchTerm);
            return Object.assign({}, initialState, state);
        case RECEIVED_ALL_CONTACTS:
            return Object.assign({}, state, action);
        case EDIT_CONTACT:
            contactListClient.edit(action.id);
            return Object.assign({}, state);
        case UPDATE_CONTACT:
            contactListClient.update(action.id, action.contact);
            return Object.assign({}, state);
        case CONTACT_UPDATED:
            return Object.assign({}, state, action);
        case RECEIVED_CONTACT_FOR_EDIT:
            return Object.assign({}, state, action);
        case SAVE_CONTACT:
            contactListClient.save(action.contact);
            return Object.assign({}, state);
        case CONTACT_SAVED:
            return Object.assign({}, state, action);
        case CREATE_CONTACT:
            return Object.assign({}, state, action);
        default:
            return Object.assign({}, state);
    }
}
