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
  showErrors?: boolean;
  checked?: boolean;
}

interface InputState {
  errors: string[];
  focused: boolean;
  value: string | boolean;
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

  componentWillReceiveProps (nextProps: InputProps) {
    if (nextProps.showErrors && !this.props.showErrors) {
      const errors = validate.single(this.state.value, this.props.constraints) || [];
      this.setState({ errors });
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    this.props.onChange(event);

    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    const errors = validate.single(value, this.props.constraints) || [];

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
        value,
        rows: currentRows < this.state.maxRows ? currentRows : this.state.maxRows,
      });
    } else {
      this.setState({
        errors,
        value,
      });
    }
  };

  onFocus = () => {
    this.setState({ focused: true });
  }

  onBlur = () => {
    if (!this.state.value) this.setState({ focused: false });
  }

  renderLabel = () => {
    if (this.props.type === 'checkbox') return null;

    return (
      <label
        className={classNames(s.inputLabel, s.inputLabel__scalable, {
          [s.inputLabel__scalableScaled]: this.state.focused,
          [s.inputLabel__required]: this.props.required,
        })}
      >
        {this.props.label}
      </label>
    );
  }

  renderInput = () => {
    const params = {
      className: classNames(s.inputText, { [s.inputText__empty]: !this.state.value }),
      name: this.props.name,
      onBlur: this.onBlur,
      onChange: this.handleChange,
      onFocus: this.onFocus,
    };

    if (this.props.multiline) {
      return <textarea {...params} rows={this.state.rows} />;
    }

    if (this.props.type === 'checkbox') {
      return (
        <div className={s.inputCheckbox}>
          <input
            {...params}
            id={this.props.name}
            className={s.inputCheckbox__check}
            type={this.props.type}
            checked={this.props.checked}
          />
          <label htmlFor={this.props.name}>{this.props.label}</label>
        </div>
      );
    }

    return <input {...params} type={this.props.type} autoComplete="off" />;
  }

  renderErrors = () => {
    if (!this.state.errors.length) return null;
    return (
      <div className={s.inputErrors__message}>
        <div className={s.inputErrors__messageText}>
          {this.state.errors.map((error: string, i: number) => <span key={i}>{error}</span>)}
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className={classNames(s.input, { [s.inputErrors]: this.state.errors.length })}>
        {this.renderLabel()}
        {this.renderInput()}
        {this.renderErrors()}
      </div>
    );
  }
}

export default Input;
