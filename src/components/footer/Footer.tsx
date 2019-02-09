import { Link } from 'gatsby';
import React from 'react';

import Logo from 'components/logo/Logo';

import Facebook from 'assets/svg/facebook.svg';
import Twitter from 'assets/svg/twitter.svg';
import Linkedin from 'assets/svg/linkedin.svg';
import Instagram from 'assets/svg/instagram.svg';

import s from './Footer.module.scss';

export const Footer = (props: any) => (
  <footer className={s.footer}>
    <div className={s.footer__grid}>
      <div className={s.footer__gridLogo}>
        <Logo />
      </div>
      <div className={s.footer__gridCountries}>
        <ol className={s.footer__countriesList}>
          {props.offices.map(({ node }: any) => {
            const slug = node.slug ? `/${node.slug}` : '';
            return (
              <li key={slug}>
                <Link to={slug}>{node.title}</Link>
              </li>
            );
          })}
        </ol>
      </div>
      <div className={s.footer__gridServices}>
        <div className={s.footer__servicesBlock}>
          <h6>Expertise</h6>
          <ul>
            {props.services.map(({ node }: any) => (
              <li key={node.slug}>
                <Link to={`/${node.slug}`}>{node.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.footer__gridCompany}>
        <div className={s.footer__companyBlock}>
          <h6>Company</h6>
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
      <div className={s.footer__gridSocial}>
        <ul className={s.footer__socialUl}>
          <li>
            <a href="/">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="/">
              <Twitter />
            </a>
          </li>
          <li>
            <a href="/">
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="/">
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className={s.footer__bottom}>
      <div className={s.footer__bottomCopyright}>
        © WhaleDigital 2017-2019. All rights reserved
      </div>
      <div className={s.footer__bottomTerms}>Terms & Privacy</div>
    </div>
  </footer>
);
