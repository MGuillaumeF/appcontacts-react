export interface IContact {
    nom : string,
    email : string,
    tel : string,
    id? : number
}

export const EMPTY_CONTACT : IContact = {nom : '', email : '', tel : ''};

