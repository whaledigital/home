import { Link, graphql } from 'gatsby';
import React from 'react';

import Logo from 'components/logo/Logo';

import s from './Footer.module.scss';

const Footer = (props: any) => (
  <footer className={s.footer}>
    <div className={s.footer__grid}>
      <div className={s.footer__gridLogo}>
        <Logo />
      </div>
      <div className={s.footer__gridCountries}>
        <ol className={s.footer__countriesList}>
          {props.offices.map(({ node }: any) => (
            <li key={node.id}>
              <Link to={node.slug ? `/${node.slug}` : `/`}>{node.title}</Link>
            </li>
          ))}
        </ol>
      </div>
      <div className={s.footer__gridServices}>
        <div className={s.footer__servicesBlock}>
          <h6 className={s.footer__title}>Expertise</h6>
          <ul>
            {props.services.map(({ node }: any) => (
              <li key={node.id}>
                <Link to={`/${node.slug}`}>{node.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.footer__gridCompany}>
        <div className={s.footer__companyBlock}>
          <h6 className={s.footer__title}>Company</h6>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contacts</Link>
            </li>
            <li>
              <Link to="/">Case studies</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Partnership</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.footer__gridMobileMenu}>
        <ul className={s.footer__mobileMenuBlock}>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contacts</Link>
          </li>
          <li>
            <Link to="/">Case studies</Link>
          </li>
        </ul>
        <ul className={s.footer__mobileMenuBlock}>
          <li>
            <Link to="/">Careers</Link>
          </li>
          <li>
            <Link to="/">Partnership</Link>
          </li>
        </ul>
      </div>
      <div className={s.footer__gridSocial}>
        <ul className={s.footer__socialUl}>
          {props.socialLinks.map((link: any) => (
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
        © {props.title} 2017-{new Date().getFullYear()}. All rights reserved
      </div>
      <div className={s.footer__bottomTerms}>
        <Link to={'/'}>Terms & Privacy</Link>
      </div>
    </div>
  </footer>
);

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
