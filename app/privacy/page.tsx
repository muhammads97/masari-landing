export default function Privacy() {
  return (
    <main className="policy-page">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last Updated: April 30, 2025</strong>
      </p>

      <p>
        Masari is operated by Salah's Lab, a Tokyo-based software project, and
        provides tools for tracking expenses and managing personal financial
        information. We respect your privacy and are committed to protecting
        your data.
      </p>

      <p>
        This policy applies to users of the Masari iOS application and any
        associated web services. By using Masari, you agree to the practices
        described below.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Account Information:</strong> Your email address, collected
          solely for authentication via one-time passcode (OTP). We do not
          collect passwords.
        </li>
        <li>
          <strong>Financial Data:</strong> Expenses, receipts, notes,
          categories, budgets, and other financial information you voluntarily
          enter into Masari.
        </li>
        <li>
          <strong>AI Interaction Data:</strong> Prompts, messages, receipts, and
          financial context you share within Masari's AI-powered features. This
          data is sent to Google Gemini via API to generate insights and
          automation. Google does not use this data to train its AI models.
        </li>
        <li>
          <strong>Usage and Technical Data:</strong> Device information,
          pseudonymous identifiers, crash reports, and usage events collected
          through Firebase Analytics and Firebase Crashlytics (Google) for app
          reliability and performance. This data is not linked to your identity
          for advertising purposes.
        </li>
        <li>
          <strong>Workflow and Session Data:</strong> Requests and session
          information processed through our automation infrastructure (n8n).
          Logs are retained temporarily to ensure reliability and support
          debugging.
        </li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>
          Provide Masari features and synchronize your data across sessions
        </li>
        <li>
          Generate AI-powered financial insights and automation via Google
          Gemini
        </li>
        <li>Send authentication emails (OTP) via Mailgun</li>
        <li>
          Monitor app stability, detect errors, and improve performance via
          Firebase
        </li>
        <li>Maintain security and detect abuse</li>
        <li>Send transactional notifications such as reports and alerts</li>
      </ul>

      <h2>3. AI Processing</h2>
      <p>
        Masari uses the Google Gemini API to process your prompts, receipts,
        expense history, and messages to deliver AI-powered insights. Your data
        is sent to Google solely to fulfill your in-app requests. Google does
        not use your Masari data to train or improve its AI models under our API
        agreement. AI outputs depend on the context you provide and may not
        always be accurate; they are not financial advice.
      </p>

      <h2>4. Authentication</h2>
      <p>
        Masari uses email-based one-time passcodes (OTP) for authentication.
        Authentication emails are delivered via Mailgun. We do not support Sign
        in with Apple, Google, or other third-party identity providers. We do
        not store passwords.
      </p>

      <h2>5. Analytics and Crash Reporting</h2>
      <p>
        Masari uses Firebase Analytics and Firebase Crashlytics (provided by
        Google) to understand how the app is used and to detect and fix crashes.
        These tools collect pseudonymous identifiers, device information, and
        usage events. This data is not used for advertising or cross-app
        tracking. Firebase Analytics operates under Google's privacy policy,
        available at{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          policies.google.com/privacy
        </a>
        .
      </p>

      <h2>6. Data Sharing and Processors</h2>
      <p>
        We do not sell personal data. We do not use your data for advertising or
        cross-app tracking. Data may be processed by the following trusted
        service providers as necessary to operate Masari:
      </p>
      <ul>
        <li>
          <strong>Google (Firebase, Gemini API):</strong> Analytics, crash
          reporting, and AI processing
        </li>
        <li>
          <strong>Mailgun:</strong> Transactional email delivery (OTP and
          notifications)
        </li>
        <li>
          <strong>Cloud infrastructure providers:</strong> Hosting and database
          services
        </li>
        <li>
          <strong>n8n:</strong> Workflow automation and backend processing
        </li>
      </ul>
      <p>
        Each provider is contractually required to handle data only as necessary
        to deliver their respective services.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        Your data is retained while your account remains active. Workflow and
        session logs in our automation infrastructure are retained temporarily
        and purged periodically. Upon account deletion, personal data will be
        removed or anonymized within 90 days of your request, though limited
        backup copies may persist briefly for operational and security
        continuity.
      </p>

      <h2>8. Security</h2>
      <p>
        We use encrypted connections (TLS), provider-level storage protections,
        and access controls to safeguard your data. Authentication relies on
        short-lived one-time passcodes rather than stored passwords. However, no
        system can guarantee absolute security.
      </p>

      <h2>9. Your Rights</h2>
      <p>
        You may request to access, update, export, or delete your personal data
        at any time. To exercise any of these rights, contact us at{" "}
        <a href="mailto:masari@salahslab.com">masari@salahslab.com</a>. We will
        respond within 30 days of receiving your request, and complete any
        required action within 90 days.
      </p>
      <p>
        If you are located in the European Economic Area (EEA), you may have
        additional rights under the General Data Protection Regulation (GDPR),
        including the right to lodge a complaint with your local supervisory
        authority.
      </p>

      <h2>10. Children's Privacy</h2>
      <p>
        Masari is not intended for children under 13 (or the equivalent minimum
        age in your jurisdiction). We do not knowingly collect personal data
        from children. If you believe a child has provided us with personal
        data, please contact us and we will delete it promptly.
      </p>

      <h2>11. International Data Transfers</h2>
      <p>
        Salah's Lab operates from Japan and our service providers may process
        and store data in various countries, including the United States and
        other jurisdictions where Google, Mailgun, and our infrastructure
        providers operate. By using Masari, you consent to these transfers. We
        rely on our providers' data transfer mechanisms and contractual
        safeguards to protect your data internationally.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        This policy is governed by and construed in accordance with the laws of
        Japan, including the Act on the Protection of Personal Information
        (APPI). Users located in the EEA are additionally afforded rights under
        applicable EU data protection law.
      </p>

      <h2>13. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. For material changes, we
        will notify you via email or an in-app notice before the change takes
        effect. Continued use of Masari after the effective date of any update
        constitutes your acceptance of the revised policy. The "Last Updated"
        date at the top of this page will always reflect the most recent
        revision.
      </p>

      <h2>14. Contact</h2>
      <p>
        For privacy requests, questions, or concerns:
        <br />
        <a href="mailto:masari@salahslab.com">masari@salahslab.com</a>
        <br />
        Salah's Lab — Tokyo, Japan
      </p>
    </main>
  );
}
