const TermsAndConditions = () => {
  return (
    <article className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
      <header className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      <div className="prose max-w-none space-y-6 text-gray-700">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            1. Introduction
          </h2>
          <p className="text-base">
            Welcome to TurfEase. These Terms and
            Conditions govern your use of our online booking platform and
            services. By accessing or using our website, you agree to be bound
            by these terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            2. Booking Policy
          </h2>
          <ul className="space-y-2 list-disc pl-6">
            <li>
              All bookings require full payment at the time of reservation
            </li>
            <li>Courts are available in 60-minute increments</li>
            <li>Minimum age for booking: 18 years</li>
            <li>
              Modifications to bookings must be made at least 24 hours in
              advance
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            3. Cancellation Policy
          </h2>
          <ol className="space-y-2 list-decimal pl-6">
            <li>Cancellations made 48+ hours before booking: Full refund</li>
            <li>Cancellations made 24-48 hours before booking: 50% refund</li>
            <li>
              Cancellations made less than 24 hours before booking: No refund
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            4. User Responsibilities
          </h2>
          <p className="text-base">Users agree to:</p>
          <ul className="space-y-2 list-disc pl-6">
            <li>Provide accurate booking information</li>
            <li>Respect facility rules and staff instructions</li>
            <li>Report any damages or incidents immediately</li>
            <li>Adhere to scheduled time slots</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">5. Liability</h2>
          <p className="text-base">
           Turf Ease is not responsible for:
          </p>
          <ul className="space-y-2 list-disc pl-6">
            <li>Personal injuries occurring during play</li>
            <li>Loss or damage to personal property</li>
            <li>Force majeure events affecting bookings</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            6. Contact Information
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-base">
              For questions or concerns regarding these terms:
              <br />
              Email: support@turfease.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </section>
      </div>

      <footer className="mt-8 md:mt-12 text-center text-sm text-gray-500">
        <p>
          These terms may be updated periodically. Users are responsible for
          reviewing them regularly.
        </p>
      </footer>
    </article>
  );
};

export default TermsAndConditions;
