import React from "react";
import PropTypes from "prop-types";

import { MOBILE } from "../../../shared/constants/screen-types";

import {
  Footer,
  Paragraph,
  Logo
} from "discover.medical.react-component-library";

import styles from "./_index.css";

const AppFooter = ({
  topicToolbarHeight,
  footerLinks,
  socialLinks,
  logo,
  copyright,
  deviceInfo
}) => {
  const isMobile = deviceInfo.deviceType === MOBILE;
  return (
    <Footer
      className={styles.AppFooter}
      style={{ marginBottom: topicToolbarHeight }}
      cellOne={<Footer.Links data={footerLinks} />}
      cellTwo={<Footer.Social socialPlatforms={socialLinks} />}
      cellThree={
        <Logo className={styles.AppFooter_logo} alt={logo.alt} src={logo.src} />
      }
      cellFour={
        <Paragraph fontSize={isMobile ? "xxs" : "xs"}>
          {copyright.text}
        </Paragraph>
      }
    />
  );
};

AppFooter.propTypes = {
  /**
   * This is the height of the footer toolbar to provide spacing for it.
   */
  topicToolbarHeight: PropTypes.string.isRequired,
  /**
   * These are the the legal/info links displayed in the footer.
   */
  footerLinks: PropTypes.array.isRequired,
  /**
   * These are the the social media links displayed in the footer.
   */
  socialLinks: PropTypes.array.isRequired,
  /**
   * Pass props for the footer's logo image
   */
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  /**
   * The copyright text
   */
  copyright: PropTypes.shape({
    txt: PropTypes.string.isRequired
  }).isRequired,
  /**
   * The device info
   */
  deviceInfo: PropTypes.object
};

AppFooter.defaultProps = {
  topicToolbarHeight: "0rem",
  footerLinks: [],
  socialLinks: [],
  logo: {},
  copyright: {},
  deviceInfo: {}
};

export default AppFooter;
