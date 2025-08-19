import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen cozy-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={goBack} 
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>

        {/* Privacy Policy Content */}
        <div className="max-w-4xl mx-auto">
          <div className="recipe-card p-8 rounded-lg">
            <h1 className="text-4xl font-bold text-sage-800 mb-6 text-center font-handwritten">
              Privacy Policy
            </h1>
            
            <div className="text-sm text-sage-600 mb-4 text-center font-natural">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>

            <div className="prose prose-sage max-w-none font-natural space-y-6">
              <p className="text-base leading-relaxed">
                Welcome to Bites Garden ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>

              <h2 className="text-2xl font-semibold text-sage-800 mt-8 mb-4 font-handwritten">
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-sage-700 mb-3 font-handwritten">
                Personal Information
              </h3>
              <p className="text-base leading-relaxed">
                We may collect personal information that you voluntarily provide to us, such as when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                <li>Subscribe to our newsletter</li>
                <li>Leave comments on our blog posts</li>
                <li>Contact us through our contact forms</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-base leading-relaxed">
                This information may include your name, email address, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-sage-700 mb-3 font-handwritten">
                Automatically Collected Information
              </h3>
              <p className="text-base leading-relaxed">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages you visit and time spent on each page</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>

              <h2 className="text-2xl font-semibold text-sage-800 mt-8 mb-4 font-handwritten">
                How We Use Your Information
              </h2>
              <p className="text-base leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                <li>Provide and maintain our website</li>
                <li>Improve user experience and website functionality</li>
                <li>Send newsletters and updates (with your consent)</li>
                <li>Respond to your inquiries and comments</li>
                <li>Analyze website usage and trends</li>
                <li>Protect against fraud and abuse</li>
              </ul>

              <h2 className="text-2xl font-semibold text-sage-800 mt-8 mb-4 font-handwritten">
                Google AdSense and Advertising
              </h2>
              <p className="text-base leading-relaxed">
                Our website uses Google AdSense to display advertisements. Google AdSense may:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                <li>Use cookies to collect information about your visits to our website</li>
                <li>Use web beacons to collect information about your browsing activities</li>
                <li>Display personalized ads based on your interests and browsing history</li>
                <li>Share information with third-party advertisers</li>
              </ul>
              <p className="text-base leading-relaxed">
                You can opt out of personalized advertising by visiting{" "}
                <a 
                  href="https://www.google.com/settings/ads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sage-600 hover:text-sage-800 underline"
                >
                  Google Ads Settings
                </a>
                .
              </p>

              <h2 className="text-2xl font-semibold text-sage-800 mt-8 mb-4 font-handwritten">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-base leading-relaxed">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website performance and functionality</li>
              </ul>
              <p className="text-base leading-relaxed">
                You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
              </p>

              <h2 className="text-2xl font-semibold text-sage-800 mt-8 mb-4 font-handwritten">
                Third-Party Services
              </h2>
              <p className="text-base leading-relaxed">
                We may use third-party services that collect, monitor, and analyze information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                <li>Google Analytics for website analytics</li>
                <li>Google AdSense for advertising</li>
                <li>Social media platforms for sharing and engagement</li>
                <li>Email marketing services for newsletters</li>
              </ul>
              <p className="text-base leading-relaxed">
                These third-party services have their own privacy policies, and we encourage you to review them.
              </p>

              <h2 className="text-2xl font-semibold text-sage-800 mt-8 mb-4 font-handwritten">
                Data Security
              </h2>
              <p className="text-base leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>

              <h2 className="text-2xl font-semibold text-sage-800 mt-8 mb-4 font-handwritten">
                Data Retention
              </h2>
              <p className="text-base leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>

              <h2 className="text-2xl font-semibold text-sage-800 mt-8 mb-4 font-handwritten">
                Your Rights
              </h2>
              <p className="text-base leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
              </ul>

              <h2 className="text-2xl font-semibold text-sage-800 mt-8 mb-4 font-handwritten">
                Children's Privacy
              </h2>
              <p className="text-base leading-relaxed">
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>

              <h2 className="text-2xl font-semibold text-sage-800 mt-8 mb-4 font-handwritten">
                Changes to This Privacy Policy
              </h2>
              <p className="text-base leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>

              <h2 className="text-2xl font-semibold text-sage-800 mt-8 mb-4 font-handwritten">
                Contact Us
              </h2>
              <p className="text-base leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
                             <div className="bg-sage-50 p-4 rounded-lg mt-4">
                 <p className="text-base leading-relaxed">
                   <strong>Email:</strong> privacy@bitesgarden.com<br />
                   <strong>Website:</strong> bitesgarden.com
                 </p>
               </div>

              <div className="mt-8 p-4 bg-sage-100 rounded-lg">
                <p className="text-sm text-sage-700 text-center">
                  By using our website, you consent to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
