import { graphql } from 'gatsby';
import React from 'react';

import GQL from 'src/graphql-types';
import { Dictionary } from 'utils/dictionary';
import Logo from 'components/logo/Logo';
import Link from 'components/Link';

import s from './Footer.module.scss';

export interface SocialLink {
  url: string;
  name: string;
}

interface FooterProps {
  title: string;
  dictionary: Dictionary;
  offices: GQL.ContentfulOfficeEdge[];
  company: GQL.ContentfulNavigationEdge[];
  services: GQL.ContentfulOfficeEdge[];
  socialLinks: SocialLink[];
}

const Footer = (props: FooterProps) => {
  const half = Math.floor(props.company.length / 2);
  const companyFirstHalf = props.company.slice(0, half);
  const companySecondHalf = props.company.slice(half, props.company.length);
  return (
    <footer className={s.footer}>
      <div className={s.footer__grid}>
        <div className={s.footer__gridLogo}>
          <Logo />
        </div>
        <div className={s.footer__gridCountries}>
          <ol className={s.footer__countriesList}>
            {props.offices.map(({ node }: GQL.ContentfulOfficeEdge) => (
              <li key={node.id}>
                <Link to={`/contacts`}>{node.title}</Link>
              </li>
            ))}
          </ol>
        </div>
        <div className={s.footer__gridServices}>
          <div className={s.footer__servicesBlock}>
            <h6 className={s.footer__title}>{props.dictionary.expertise}</h6>
            <ul>
              {props.services.map(({ node }: GQL.ContentfulOfficeEdge) => (
                <li key={node.id}>
                  <Link to={`/${node.slug}/`}>{node.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.footer__gridCompany}>
          <div className={s.footer__companyBlock}>
            <h6 className={s.footer__title}>{props.dictionary.company}</h6>
            <ul>
              {props.company.map(({ node }: GQL.ContentfulNavigationEdge) => (
                <li key={node.id}>
                  <Link to={`/${node.slug}/`}>{node.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.footer__gridMobileMenu}>
          <ul className={s.footer__mobileMenuBlock}>
            {companyFirstHalf.map(({ node }: GQL.ContentfulNavigationEdge) => (
              <li key={node.id}>
                <Link to={`/${node.slug}/`}>{node.title}</Link>
              </li>
            ))}
          </ul>
          <ul className={s.footer__mobileMenuBlock}>
            {companySecondHalf.map(({ node }: GQL.ContentfulNavigationEdge) => (
              <li key={node.id}>
                <Link to={`/${node.slug}/`}>{node.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.footer__gridSocial}>
          <ul className={s.footer__socialUl}>
            {props.socialLinks.map((link: SocialLink) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  aria-label={link.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  {React.createElement(require(`assets/svg/${link.name}.svg`))}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.footer__bottom}>
        <div className={s.footer__bottomCopyright}>
          © {props.title} 2017-{new Date().getFullYear()}. {props.dictionary.copyright}
        </div>
        <div className={s.footer__bottomTerms}>
          <Link to="/terms-of-use/">{props.dictionary.terms}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const officeMenuQuery = graphql`
  fragment FooterOfficeFragment on ContentfulOffice {
    id
    title
    slug
  }
`;

export const serviceMenuQuery = graphql`
  fragment FooterServiceFragment on ContentfulService {
    id
    title
    slug
  }
`;
