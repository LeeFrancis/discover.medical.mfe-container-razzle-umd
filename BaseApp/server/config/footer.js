import dmpFooterLogo from "../../src/shared/images/EbscoHealth.svg";

const currentYear = new Date().getFullYear();

const footer = {
  footerLinks: [
    { url: "https://dynamed.com/home", text: "About DynaMed" }, // NOSONAR
    {
      url: "http://support.ebsco.com/help/?int=dynamed&ver=live", // NOSONAR
      text: "Help"
    },
    {
      url: "http://support.ebscohost.com/ehost/privacy.html", // NOSONAR
      text: "Privacy Policy"
    },
    {
      url: "http://support.ebsco.com/dynamed/dynamedterms.html", // NOSONAR
      text: "Terms of Use"
    },
    {
      url: "http://support.ebscohost.com/ehost/terms.html#copyright", // NOSONAR
      text: "Copyright"
    }
  ],
  socialLinks: [
    {
      name: "twitter",
      url: "https://twitter.com/dynamed_ebsco" // NOSONAR
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/showcase/dynamed-plus" // NOSONAR
    }
  ],
  logo: {
    src: dmpFooterLogo,
    alt: "DynaMed"
  },
  copyright: {
    text: `© ${currentYear} EBSCO Industries, Inc. All rights reserved.`
  }
};

export default footer;
