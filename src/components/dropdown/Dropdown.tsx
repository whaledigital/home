import React from 'react';

import s from './Dropdown.module.scss';

interface DropdownItem {
  label: string;
  value: string | number;
}

interface DropdownProps {
  onChange: (value: string | number) => void;
  options: DropdownItem[];
  placeholder?: string;
  value: string | number;
}

interface DropdownState {
  option: DropdownItem | undefined;
  active: boolean;
  activeIndex: number;
}

class Dropdown extends React.Component<DropdownProps, DropdownState> {
  state = {
    active: false,
    activeIndex: 0,
    option: this.props.options[0],
  };

  rootRef: HTMLElement;

  componentDidMount () {
    this.updateOption(this.props);
  }

  componentWillReceiveProps (nextProps: DropdownProps) {
    this.updateOption(nextProps);
  }

  updateOption = ({ options, value }: DropdownProps) => {
    const option = options.find(item => item.value === value);
    if (option) this.setState({ option });
  };

  handleBlur = (event: any) => {
    if (event.target === this.rootRef) {
      return false;
    }

    this.setState({
      active: false,
      activeIndex: undefined,
    });

    document.removeEventListener('click', this.handleBlur, true);
  };

  handleChange (event: React.MouseEvent<HTMLElement>, option: DropdownItem) {
    event.stopPropagation();

    const { onChange } = this.props;

    this.setState(
      {
        option,
        active: false,
      },
      () => {
        if (typeof onChange === 'function') {
          onChange(this.state.option.value);
        }
      },
    );
  }

  showList = () => {
    const { active } = this.state;

    if (active) {
      return this.setState({ active: false });
    }

    this.setState({ active: true });

    document.addEventListener('click', this.handleBlur, true);
  };

  render () {
    const { options, placeholder } = this.props;
    const { active, option } = this.state;
    const label = option.label || placeholder;

    return (
      <div
        className={[s.dropdown, active ? s.dropdownActive : ''].join(' ')}
        ref={el => this.rootRef = el}
        data-value={label}
        onClick={this.showList}
      >
        <ul className={s.dropdown__list}>
          {options.map(this.renderOption)}
        </ul>
      </div>
    );
  }

  renderOption = (item: DropdownItem, index: number) => {
    const { option, activeIndex } = this.state;

    if (option && option.value === item.value) {
      return null;
    }

    const onClick = (event: React.MouseEvent<HTMLElement>) => this.handleChange(event, item);

    return (
      <li
        key={item.value}
        data-key={item.value}
        data-index={index}
        className={[
          s.dropdown__list__item,
          activeIndex === index ? s.dropdown__list__itemActive : ''].join(' ')
        }
        onClick={onClick}
      >
        {item.label}
      </li>
    );
  };
}

export default Dropdown;
