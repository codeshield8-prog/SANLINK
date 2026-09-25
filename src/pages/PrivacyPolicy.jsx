import LegalPage from '../components/LegalPage.jsx';
import { company } from '../data.js';

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 2026"
      intro={`How ${company.legalName} handles the information you share with us.`}
      sections={[
        {
          heading: 'Introduction',
          body: [
            `${company.legalName} ("we", "us", "our") respects your privacy and is committed to protecting the personal information you share with us. This policy explains what information we collect and how we use it.`,
          ],
        },
        {
          heading: 'Information We Collect',
          body: [
            'When you contact us through our website or by phone or email, we may collect details such as your name, company name, email address, phone number and the content of your enquiry.',
          ],
        },
        {
          heading: 'How We Use Your Information',
          body: [
            'We use the information you provide solely to respond to your enquiries, understand your requirements and communicate with you about our services. We do not sell your personal information.',
          ],
        },
        {
          heading: 'Data Security',
          body: [
            'We take reasonable measures to protect the information you share with us against unauthorised access, disclosure or misuse.',
          ],
        },
        {
          heading: 'Contact Us',
          body: [
            `If you have any questions about this Privacy Policy, please contact us at ${company.email} or ${company.phone}.`,
          ],
        },
      ]}
    />
  );
}
