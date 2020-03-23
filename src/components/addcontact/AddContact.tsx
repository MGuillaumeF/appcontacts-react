import * as React from 'react';

export interface IAddContactProps {
}

export default function AddContact (props: IAddContactProps) {
    let [contact, setContact] = React.useState({nom : '', email : '', tel : ''});
    const onChange = (value : string, key : string) => {
        let contactUpdated : any = Object.assign({}, contact);
        contactUpdated[key] = value;
        setContact(contactUpdated);
    };
  return (
    <div className="card mb-3">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
          <form>
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name..."
                    name="name"
                    value={contact.nom}
                    onChange={(event) => {onChange(event.target.value, 'nom')}}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="name">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email..."
                    name="email"
                    value={contact.email}
                    onChange={(event) => {onChange(event.target.value, 'email')}}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="tel">Telephone</label>
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    placeholder="Telephone..."
                    name="tel"
                    value={contact.tel}
                    onChange={(event) => {onChange(event.target.value, 'tel')}}
                  />
              </div>
              <input
                type="submit" 
                value="Add Contact" 
                className="btn btn-block btn-primary"
              />
          </form>
      </div>
    </div>
  );
}
