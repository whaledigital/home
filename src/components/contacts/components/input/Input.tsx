import classNames from 'classnames';
import React from 'react';
import validate from 'validate.js';

import s from './Input.module.scss';

interface InputProps {
  type: string;
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required: boolean;
  multiline: boolean;
  constraints: any;
}

interface InputState {
  errors: string[];
  focused: boolean;
  value: string;
  maxRows: number;
  minRows: number;
  rows: number;
}

class Input extends React.Component<InputProps, InputState> {
  static defaultProps = {
    constraints: {},
    multiline: false,
    required: false,
    type: 'text',
  };

  state = {
    errors: [] as string[],
    focused: false,
    maxRows: 6,
    minRows: 2,
    rows: 2,
    value: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const errors = validate.single(event.target.value, this.props.constraints) || [];

    if (this.props.multiline) {
      const textareaLineHeight = 24;

      const previousRows = event.target.rows;
      event.target.rows = this.state.minRows;

      const currentRows = Math.floor(event.target.scrollHeight / textareaLineHeight);

      if (currentRows === previousRows) {
        event.target.rows = currentRows;
      }

      if (currentRows >= this.state.maxRows) {
        event.target.rows = this.state.maxRows;
        event.target.scrollTop = event.target.scrollHeight;
      }

      this.setState({
        errors,
        rows: currentRows < this.state.maxRows ? currentRows : this.state.maxRows,
        value: event.target.value,
      });
    } else {
      this.setState({
        errors,
        value: event.target.value,
      });
    }
    this.props.onChange(event);
  };

  onFocus = () => {
    this.setState({ focused: true });
  }

  onBlur = () => {
    if (!this.state.value) this.setState({ focused: false });
  }

  renderText = () => {
    const params = {
      className: classNames(s.inputText, { [s.inputText__empty]: !this.state.value }),
      name: this.props.name,
      onBlur: this.onBlur,
      onChange: this.handleChange,
      onFocus: this.onFocus,
    };

    return this.props.multiline
      ? <textarea {...params} rows={this.state.rows} />
      : <input {...params} type={this.props.type} autoComplete="off" />;
  }

  render () {
    return (
      <div className={classNames(s.input, { [s.inputErrors]: this.state.errors.length })}>
        <label
          className={classNames(s.inputLabel, s.inputLabel__scalable, {
            [s.inputLabel__scalableScaled]: this.state.focused,
            [s.inputLabel__required]: this.props.required,
          })}
        >
          {this.props.label}
        </label>
        {this.renderText()}
        {
          !this.state.errors.length ? null :
          <div className={s.inputErrors__message}>
            <div className={s.inputErrors__messageText}>
              {this.state.errors.map((error: string, i: number) => <span key={i}>{error}</span>)}
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Input;
