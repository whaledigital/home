import { Link } from 'gatsby';
import React from 'react';

import { Logo } from 'components/logo/Logo';
import { Segment } from 'components/segment/Segment';

import s from './Footer.module.scss';

export const Footer = () => (
  <footer className={s.footer}>
    <div className={s.footer__grid}>
      <div className={s.footer__gridLogo}>
        <Logo />
      </div>
      <div className={s.footer__gridCountries}>
        <ol className={s.footer__countriesList}>
          <li>
            <Link to="/">Russia</Link>
          </li>
          <li>
            <Link to="/">Germany</Link>
          </li>
          <li>
            <Link to="/">Poland</Link>
          </li>
          <li>
            <Link to="/">India</Link>
          </li>
        </ol>
      </div>
      <div className={s.footer__gridServices}>
        <div className={s.footer__servicesBlock}>
          <h6>Expertise</h6>
          <ul>
            <li>
              <Link to="/">One</Link>
            </li>
            <li>
              <Link to="/">Two</Link>
            </li>
            <li>
              <Link to="/">Three</Link>
            </li>
            <li>
              <Link to="/">Four</Link>
            </li>
            <li>
              <Link to="/">Five</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.footer__gridCompany}>
        <div className={s.footer__companyBlock}>
          <h6>Company</h6>
          <ul>
            <li>
              <Link to="/">One</Link>
            </li>
            <li>
              <Link to="/">Two</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.footer__gridSocial}>
        <ul className={s.footer__socialUl}>
          <li>F</li>
          <li>Tw</li>
          <li>In</li>
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
