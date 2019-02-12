import { navigate } from 'gatsby';
import React from 'react';

import Segment from 'components/segment/Segment';
import Button from 'components/button/Button';

import s from './Contacts.module.scss';

function encode (data: { [key: string]: any }) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

interface ContactsState {
  [key: string]: any;
}

class Contacts extends React.Component<{}, ContactsState> {
  state = {

  };

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAttachment = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.files[0] });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    fetch('/', {
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
      method: 'POST',
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render () {
    return (
      <Segment title="Let’s make your progress together">
        <div className={s.contacts}>
          <form
            name="contact"
            method="POST"
            action="/thank-you"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div hidden className={s.formItem__gridItem}>
              <label className={s.formLabel}>Don’t fill this out:</label>
              <input
                className={s.formText}
                type="text"
                name="bot-field"
                onChange={this.handleChange}
              />
            </div>
            <div className={s.formContainer}>
              <div className={s.formItem__gridContainer}>

                <div className={s.formItem__gridItem}>
                  <label className={s.formLabel}>Name</label>
                  <input
                    className={s.formText}
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                  />
                </div>

                <div className={s.formItem__gridItem}>
                  <label className={s.formLabel}>Name of your company</label>
                  <input
                    className={s.formText}
                    type="text"
                    name="company"
                    onChange={this.handleChange}
                  />
                </div>

              </div>
              <div className={s.formItem__gridContainer}>

                <div className={s.formItem__gridItem}>
                  <label className={s.formLabel}>Email</label>
                  <input
                    className={s.formText}
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                  />
                </div>

                <div className={s.formItem__gridItem}>
                  <label className={s.formLabel}>Phone</label>
                  <input
                    className={s.formText}
                    type="phone"
                    name="phone"
                    onChange={this.handleChange}
                  />
                </div>

              </div>
              <div className={s.formItem__gridContainer}>

                <div className={s.formItem__gridItem}>
                  <label className={s.formLabel}>Message</label>
                  <textarea
                    className={s.formText}
                    name="message"
                    onChange={this.handleChange}
                  />
                </div>

                <div className={s.formItem__gridItem}>
                  <label className={s.formLabel}>Attachment</label>
                  <input
                    className={s.formAttachment}
                    type="file"
                    name="attachment"
                    onChange={this.handleAttachment}
                  />
                </div>

              </div>
            </div>
            <div className={s.formFooter}>

              <Button
                title="Submit"
                type="submit"
                size="large"
              />

            </div>
          </form>
        </div>
      </Segment>
    );
  }
}

export default Contacts;
