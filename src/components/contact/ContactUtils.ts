/**
 * The Contact interface with optional id
 * To manipulate Contact before creation
 */
export interface IContact {
    name : string,
    email : string,
    tel : string,
    id? : number
}
/**
 * The Contact interface with mandatory id 
 * To manipulate Contact after creation
 */
export interface IContactWithId {
    name : string,
    email : string,
    tel : string,
    id : number
}
/**
 * Context Interface
 * The Action interface to explain the payload format
 * key id to DELETE action
 * keys name, email, tel to ADD action
 */
export interface IAction {
    type : string,
    payload : {
        name? : string,
        email? : string,
        tel? : string,
        id? : number
    }
}

/**
 * Context Interface
 * The State interface to explain the Context state content
 */
export interface IState {
    currentContactId : number,
    contacts : Array<IContactWithId>,
    dispatch : any
}

/**
 * Empty Contact constant
 */
export const EMPTY_CONTACT : IContact = {name : '', email : '', tel : ''};

/**
 * Empty any constant
 */
export const EMPTY_ANY : any = {};