import React, { Component, ReactNode } from 'react';
class AboutUs extends Component {
  render(): ReactNode {
    return (
      <div className="about__container">
        <ul className="about__items">
          <li className="about__item">
            <a href="https://github.com/artemkamyshenkov" className="about__link">
              GitHub
            </a>
          </li>
          <li className="about__item">
            <a href="https://rs.school/" className="about__link">
              RS School
            </a>
          </li>
          <li className="about__item">2023</li>
        </ul>
      </div>
    );
  }
}

export default AboutUs;
