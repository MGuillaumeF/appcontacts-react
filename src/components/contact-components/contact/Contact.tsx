import React, { useState } from 'react';
import { ContactsConsumer } from '../contact-context/ContactContext';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIcon from '@material-ui/icons/Phone';
import DraftsIcon from '@material-ui/icons/Drafts';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

/**
 * The Contact interface with optional id
 * To manipulate Contact before creation
 */
export interface IContact {
  /**
   * The lastName of Contact
   */
  lastName: string,
  /**
   * The firstName of Contact
   */
  firstName: string,
  /**
   * The email of contact
   */
  email: string,
  /**
   * The telephone number of Contact
   */
  tel: string,
  /**
   * The id of Contact (assigned by context dispatcher)
   */
  id?: number
}

/**
* The Contact interface with mandatory id 
* To manipulate Contact after creation
*/
export interface IContactWithId {
  /**
   * The lastName of Contact
   */
  lastName: string,
  /**
   * The firstName of Contact
   */
  firstName: string,
  /**
   * The email of contact
   */
  email: string,
  /**
   * The telephone number of Contact
   */
  tel: string,
  /**
   * The id of Contact (assigned by context dispatcher)
   */
  id: number
}

/**
 * The component to display Contact card item
 * @param props The contact object content
 */
export default function Contact(props: IContact) {
  /**
   * The display state 
   * true show content card
   * false hide content card
   */
  const [show, showContact] = useState(false);

  /**
   * Function to delete a contact in list
   * @param contact The contact object content 
   * @param dispatch The function to interact with context, to delete contact in context state
   */
  const onDelete = (contact: IContact, dispatch: Function) => {
    if (typeof (contact.id) !== 'undefined') {
      dispatch({ type: 'DELETE_CONTACT', payload: { id: contact.id } });
    }
  };
  /**
   * render of component with ContactContext closure
   */
  return (
    <ContactsConsumer>
      {value => {
        return (
            <ExpansionPanel expanded={show} onChange={() => showContact(display => !display)}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography><DeleteOutline style={{ cursor: 'pointer', float: 'left', color: 'red', marginRight : '1em'}} onClick={() => { onDelete(props, value.dispatch) }}/>
                {props.lastName} {props.firstName}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <List aria-label="main contact">
                    <ListItem button>
                      <ListItemIcon>
                        <PhoneIcon />
                      </ListItemIcon>
                      <ListItemText primary={props.tel} />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText primary={props.email} />
                    </ListItem>
                  </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
        )
      }}
    </ContactsConsumer>
  );
}
