import LegalPage from '../components/LegalPage.jsx';
import { company } from '../data.js';

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="September 2026"
      intro={`The terms that apply to your use of the ${company.legalName} website.`}
      sections={[
        {
          heading: 'Acceptance of Terms',
          body: ['By accessing and using this website, you agree to these Terms & Conditions. If you do not agree, please discontinue use of the website.'],
        },
        {
          heading: 'Use of the Website',
          body: ['This website is provided for general information about our information technology and telecommunication services. You agree to use it lawfully and not in any way that could damage or impair the website or its availability.'],
        },
        {
          heading: 'Intellectual Property',
          body: [`All content on this website, including text, graphics, logos and design, is the property of ${company.legalName} unless otherwise stated, and may not be reproduced without permission.`],
        },
        {
          heading: 'Limitation of Liability',
          body: ['The information on this website is provided in good faith for general purposes. We make no warranties regarding its completeness or accuracy and are not liable for any loss arising from its use.'],
        },
        {
          heading: 'Contact Us',
          body: [`For any questions about these Terms & Conditions, please contact us at ${company.email} or ${company.phone}.`],
        },
      ]}
    />
  );
}
