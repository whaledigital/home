import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import Section from 'components/Section';
import Button from 'components/button/Button';

import s from './Jobs.module.scss';

interface JobsProps {
  items: GQL.ContentfulJob[];
}

const Jobs = (props: JobsProps) => (
  <Section>
    <div className={s.jobs}>
      {props.items && props.items.map((job: GQL.ContentfulJob) => (
        <div key={job.id} className={s.jobs__item}>
          <p className={s.jobs__itemLocation}>{job.office.title}</p>
          <h3 className={s.jobs__itemTitle}>{job.title}</h3>
          <p className={s.jobs__itemSalary}>{job.salary}</p>
          <p className={s.jobs__itemShort}>{job.short}</p>
          <Button title="Details" />
        </div>
      ))}
    </div>
  </Section>
);

export default Jobs;

export const jobQuery = graphql`
  fragment JobFragment on ContentfulJob {
    id
    title
    slug
    short
    salary
    office {
      title
    }
    description {
      childMarkdownRemark {
        html
      }
    }
  }
`;
