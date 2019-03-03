import React from 'react';

import Section from 'components/Section';

import s from './Description.module.scss';

interface DescriptionProps {
  children: any;
  title?: string;
}

class Description extends React.Component<DescriptionProps> {
  render () {
    if (!this.props.children) return null;

    return (
      <Section title={this.props.title}>
        <div
          data-aos="fade-right"
          className={s.description}
          dangerouslySetInnerHTML={{ __html: this.props.children }}
        />
      </Section>
    );
  }
}

export default Description;
