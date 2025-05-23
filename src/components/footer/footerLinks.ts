type FooterLink = {
  name: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const footerLinks: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { name: 'Home', href: '' },
      { name: 'Order', href: '' },
      { name: 'FAQ', href: '' },
      { name: 'Contact', href: '' },
    ],
  },
  {
    title: 'Template',
    links: [
      { name: 'Style Guide', href: ' https://www.google.com/ ' },
      { name: 'Changelog', href: ' https://www.google.com/ ' },
      { name: 'Licence', href: ' https://www.google.com/ ' },
      { name: 'Webflow University', href: ' https://www.google.com/ ' },
    ],
  },
  {
    title: 'Flowbase',
    links: [
      { name: 'More Cloneables', href: '' },
    ],
  },
];

export default footerLinks;