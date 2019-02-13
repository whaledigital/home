import classNames from 'classnames';
import { navigate } from 'gatsby';
import React from 'react';
import Dropzone from 'react-dropzone';

import Bubbles3 from 'assets/svg/bubbles-3.svg';
import Bubbles4 from 'assets/svg/bubbles-4.svg';
import Bubbles5 from 'assets/svg/bubbles-5.svg';

import Segment from 'components/segment/Segment';
import Button from 'components/button/Button';

import Input from './components/input/Input';
import s from './Contacts.module.scss';

function encode (data: { [key: string]: any }) {
  const formData = new FormData();
  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }
  return formData;
}

const constraints = {
  email: {
    email: {
      message: 'Email is not valid',
    },
  },
  message: {
    presence: {
      allowEmpty: false,
      message: 'Message is required',
    },
  },
  name: {
    presence: {
      allowEmpty: false,
      message: 'Name is required',
    },
  },
  phone: {
    presence: {
      allowEmpty: false,
      message: 'Phone is required',
    },
  },
};

interface ContactsState {
  [key: string]: any;
}

class Contacts extends React.Component<{}, ContactsState> {
  state = {
    agreement: false,
  };

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement & HTMLInputElement>) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({ [event.target.name]: value });
  };

  handleDrop = (files: File[]) => {
    this.setState({ attachment: files[0] });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { agreement, ...props } = this.state;
    if (agreement) {
      fetch('/', {
        body: encode({
          'form-name': form.getAttribute('name'),
          ...props,
        }),
        method: 'POST',
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch(error => alert(error));
    }
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
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <Input
                label="Don’t fill this out"
                name="bot-field"
                onChange={this.handleChange}
              />
            </div>
            <div className={s.formContainer}>
              <div className={s.formItem__gridContainer}>

                <div className={s.formItem__gridItem}>
                  <Input
                    label="Name"
                    name="name"
                    onChange={this.handleChange}
                    required
                    constraints={constraints.name}
                  />
                </div>

                <div className={s.formItem__gridItem}>
                  <Input
                    label="Name of your company"
                    name="company"
                    onChange={this.handleChange}
                  />
                </div>

              </div>
              <div className={s.formItem__gridContainer}>

                <div className={s.formItem__gridItem}>
                  <Input
                    type="email"
                    label="Email"
                    name="email"
                    onChange={this.handleChange}
                    required
                    constraints={constraints.email}
                  />
                </div>

                <div className={s.formItem__gridItem}>
                  <Input
                    type="phone"
                    label="Phone"
                    name="phone"
                    onChange={this.handleChange}
                    required
                    constraints={constraints.phone}
                  />
                </div>

              </div>
              <div className={s.formItem__gridContainer}>

                <div className={s.formItem__gridItem}>
                  <Input
                    label="Message"
                    name="message"
                    onChange={this.handleChange}
                    required
                    multiline
                    constraints={constraints.message}
                  />
                </div>

              </div>
              <div className={s.formItem__gridContainer}>

                <div className={s.formItem__gridItem}>
                  <Dropzone onDrop={this.handleDrop}>
                    {({
                      getRootProps,
                      getInputProps,
                      isDragAccept,
                      isDragReject,
                      acceptedFiles,
                    }) => (
                      <div
                        {...getRootProps()}
                        className={classNames(s.dropzone, {
                          [s.dropzone__active]: isDragAccept,
                          [s.dropzone__reject]: isDragReject,
                        })}
                      >
                        <input {...getInputProps()} />
                        {isDragAccept
                          ? `Drop files here...`
                          : acceptedFiles.length ? acceptedFiles[0].name : `Drag files here...`
                        }
                        {
                          !acceptedFiles.length &&
                          <small className={s.dropzone__accepted}>
                            .pdf, .doc, .docx, .ppt, .pptx
                          </small>
                        }
                      </div>
                    )}
                  </Dropzone>
                </div>

              </div>
            </div>
            <div className={s.formFooter}>

              <div className={s.formFooter__agreement}>
                <input
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  className={s.checkbox}
                  onChange={this.handleChange}
                  checked={this.state.agreement}
                />
                {/* tslint:disable-next-line:max-line-length */}
                <label htmlFor="agreement">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla <a href="#">sed consectetur</a>.</label>
              </div>

              <Button
                title="Submit"
                type="submit"
                size="large"
              />

            </div>
          </form>
          <div
            className={classNames(s.contacts__bubbles, s.contacts__bubbles3)}
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <Bubbles3 />
          </div>
          <div
            className={classNames(s.contacts__bubbles, s.contacts__bubbles4)}
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <Bubbles4 />
          </div>
          <div className={classNames(s.contacts__bubbles, s.contacts__bubbles5)}>
            <Bubbles5 />
          </div>
        </div>
      </Segment>
    );
  }
}

export default Contacts;
