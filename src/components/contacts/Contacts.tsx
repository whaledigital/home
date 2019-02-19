import classNames from 'classnames';
import { navigate } from 'gatsby';
import React from 'react';
import Dropzone from 'react-dropzone';
import validate from 'validate.js';

import Bubbles3 from 'assets/svg/bubbles-3.svg';
import Bubbles4 from 'assets/svg/bubbles-4.svg';
import Bubbles5 from 'assets/svg/bubbles-5.svg';

import { Dictionary } from 'utils/dictionary';
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

interface ContactsProps {
  dictionary: Dictionary;
}

interface ContactsState {
  fields: {
    [key: string]: any;
  };
  showErrors: boolean;
}

class Contacts extends React.Component<ContactsProps, ContactsState> {
  state: ContactsState = {
    fields: {
      agreement: false,
    },
    showErrors: false,
  };

  constraints = {
    agreement: {
      inclusion: {
        message: this.props.dictionary.contactsAgreementRequired,
        within: [true],
      },
      presence: {
        allowEmpty: false,
        message: this.props.dictionary.contactsAgreementRequired,
      },
    },
    email: {
      email: {
        message: this.props.dictionary.contactsEmailRequired,
      },
    },
    message: {
      presence: {
        allowEmpty: false,
        message: this.props.dictionary.contactsMessageRequired,
      },
    },
    name: {
      presence: {
        allowEmpty: false,
        message: this.props.dictionary.contactsNameRequired,
      },
    },
    phone: {
      presence: {
        allowEmpty: false,
        message: this.props.dictionary.contactsPhoneRequired,
      },
    },
  };

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement & HTMLInputElement>) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({ fields: { ...this.state.fields, [event.target.name]: value } });
  };

  handleDrop = (files: File[]) => {
    this.setState({ fields: { ...this.state.fields, attachment: files[0] } });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formErrors = validate(this.state.fields, this.constraints);
    const { attachment, ...body } = this.state.fields; // Temporary remove file sending

    if (formErrors) return this.setState({ showErrors: true });

    fetch('/', {
      body: encode({
        'form-name': form.getAttribute('name'),
        ...body,
      }),
      method: 'POST',
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render () {
    const { dictionary } = this.props;
    return (
      <Segment title={dictionary.contacts}>
        <div className={s.contacts} data-aos="fade-up">
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
                    label={dictionary.contactsName}
                    name="name"
                    onChange={this.handleChange}
                    required
                    constraints={this.constraints.name}
                    showErrors={this.state.showErrors}
                  />
                </div>

                <div className={s.formItem__gridItem}>
                  <Input
                    label={dictionary.contactsCompany}
                    name="company"
                    onChange={this.handleChange}
                    showErrors={this.state.showErrors}
                  />
                </div>

              </div>
              <div className={s.formItem__gridContainer}>

                <div className={s.formItem__gridItem}>
                  <Input
                    type="email"
                    label={dictionary.contactsEmail}
                    name="email"
                    onChange={this.handleChange}
                    required
                    constraints={this.constraints.email}
                    showErrors={this.state.showErrors}
                  />
                </div>

                <div className={s.formItem__gridItem}>
                  <Input
                    type="phone"
                    label={dictionary.contactsPhone}
                    name="phone"
                    onChange={this.handleChange}
                    required
                    constraints={this.constraints.phone}
                    showErrors={this.state.showErrors}
                  />
                </div>

              </div>
              <div className={s.formItem__gridContainer}>

                <div className={s.formItem__gridItem}>
                  <Input
                    label={dictionary.contactsMessage}
                    name="message"
                    onChange={this.handleChange}
                    required
                    multiline
                    constraints={this.constraints.message}
                    showErrors={this.state.showErrors}
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
                          ? dictionary.contactsFileDrop
                          : acceptedFiles.length
                            ? acceptedFiles[0].name
                            : dictionary.contactsFileDrag
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
                <Input
                  type="checkbox"
                  label={dictionary.contactsAgreement}
                  name="agreement"
                  onChange={this.handleChange}
                  checked={this.state.fields.agreement.value}
                  constraints={this.constraints.agreement}
                  showErrors={this.state.showErrors}
                />
              </div>

              <div className={s.formFooter__submit}>
                <Button
                  title={dictionary.contactsSubmit}
                  type="submit"
                  size="large"
                />
              </div>

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
