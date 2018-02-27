import React from 'react';
import { Section } from './section';
import './footer.scss';

export const Footer = ({}) => (
  <Section>
    <footer className="footer">
      <div>
        <h3>Counter-Strike: buy binds</h3>
        <a href="http://nikz.se">nikz.se</a>&nbsp;&ndash;&nbsp;
        <a href="https://github.com/nksfrank/buybinds/blob/master/LICENSE.md">
          Apache License
        </a>
      </div>
      <a href="https://github.com/nksfrank/buybinds">
        <img src="/github.png" height="20" width="20" />
      </a>
    </footer>
  </Section>
);
