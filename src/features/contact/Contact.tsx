import { Form } from 'react-router-dom';
import Favorite from './Favorite';

export type Contact = {
  firstName: string;
  lastName: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean;
};

const Contact = () => {
  const contact: Contact = {
    firstName: 'John',
    lastName: 'Smith',
    avatar: 'https://placekitten.com/g/200/200',
    twitter: 'twitterHandle',
    notes: 'Notes',
    favorite: true,
  };

  return (
    <div className="">
      <div className="">
        <img key={contact.avatar} src={contact.avatar || undefined} />
      </div>

      <div className="">
        <h1>
          {contact.firstName || contact.lastName ? (
            <>
              {contact.firstName} {contact.lastName}
            </>
          ) : (
            <i>No Name</i>
          )}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div className="">
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record')) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
