import InfoPage from '@/components/InfoPage';
import { site } from '@/data/site';
import { GA_ID } from '@/lib/analytics';

export const metadata = {
  title: 'Privacy Policy',
  description: 'What information Snowbird Car Shipping collects when you request a quote, how it is used, and who it is shared with.',
  alternates: { canonical: '/privacy-policy' }
};

export default function PrivacyPolicyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      description={`How ${site.name}, a ${site.parent} service, handles the information you give us.`}
      updated="October 31, 2026"
    >
      <h2>Information we collect</h2>
      <p>When you request a quote, we collect:</p>
      <ul>
        <li>Your name, email address and phone number</li>
        <li>Your pickup and delivery locations, and the map coordinates of addresses you pick from suggestions</li>
        <li>Your vehicle&rsquo;s year, make, model and running condition, your preferred transport type and your requested pickup date</li>
        <li>The page you sent the request from, and any estimate you saw in our cost calculator</li>
        <li>A record of the contact consent you gave, including its wording and the time you gave it</li>
        <li>Your IP address and browser type, which we use to block spam and abuse</li>
      </ul>

      <h2>Address suggestions</h2>
      <p>
        Our address fields use Google Maps Platform to suggest addresses as you type. The text you type in those
        fields is sent to Google for that purpose, and Google&rsquo;s privacy policy applies to it.
      </p>

      {GA_ID && (
        <>
          <h2>Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors use this website, such as which pages are viewed and
            whether a quote request was completed. Google Analytics uses cookies. You can opt out with Google&rsquo;s
            browser add-on for disabling Google Analytics.
          </p>
        </>
      )}

      <h2>How we use your information</h2>
      <ul>
        <li>To prepare your quote and arrange your vehicle shipment</li>
        <li>To contact you about your request by phone, text or email, as you agreed when you submitted it</li>
        <li>To send you a confirmation of your request</li>
        <li>To keep a record of your consent and prevent spam or misuse of our forms</li>
      </ul>

      <h2>Who we share it with</h2>
      <ul>
        <li>The motor carrier that transports your vehicle, which needs your locations, vehicle details and contact information to pick up and deliver the car</li>
        <li>Service providers that host this website, store our data and send our emails, only to provide those services</li>
        <li>Government authorities or others when the law requires it</li>
      </ul>
      <p>
        We do not sell your information, and we do not pass your quote request to other brokers, lead buyers or
        marketing companies.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to stop contacting you, or to access, correct or delete the information you gave us, by
        emailing <a href={`mailto:${site.email}`}>{site.email}</a> or calling{' '}
        <a href={site.phoneHref}>{site.phoneDisplay}</a>. Reply STOP to any text message to stop texts.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable safeguards to protect your information. No website or database is completely secure, so
        we cannot guarantee absolute security.
      </p>

      <h2>Children</h2>
      <p>This website is meant for adults. We do not knowingly collect information from children under 13.</p>

      <h2>Changes to this policy</h2>
      <p>
        If we change this policy, we will post the new version on this page and update the date at the top.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </InfoPage>
  );
}
