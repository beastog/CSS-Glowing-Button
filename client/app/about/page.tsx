export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">About Beast Posters</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Welcome to Beast Posters, your destination for premium art posters that transform spaces into inspiring environments.
          </p>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded with a passion for art and design, Beast Posters curates a unique collection of posters that blend contemporary aesthetics with timeless appeal. We believe that art should be accessible to everyone, and our mission is to bring museum-quality prints to your home at affordable prices.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each poster in our collection is carefully selected for its artistic merit, visual impact, and ability to enhance any interior space. From bold abstract designs to serene nature photography, we offer something for every taste and style.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
                <p className="text-gray-600">
                  We use premium materials and printing techniques to ensure every poster meets the highest standards.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Curated Selection</h3>
                <p className="text-gray-600">
                  Every design is handpicked by our team of art enthusiasts and interior design experts.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  Your happiness is our priority. We're committed to providing exceptional service and support.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to eco-friendly practices, from sourcing to packaging and shipping.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-black font-bold mr-2">•</span>
                <span>Museum-grade paper and fade-resistant inks for lasting quality</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-2">•</span>
                <span>Multiple size options to fit any space perfectly</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-2">•</span>
                <span>Fast and secure shipping with careful packaging</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-2">•</span>
                <span>Regularly updated collection with new designs</span>
              </li>
              <li className="flex items-start">
                <span className="text-black font-bold mr-2">•</span>
                <span>Responsive customer support team ready to help</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="mb-6">Explore our collection and find the perfect poster for your home or office.</p>
            <a
              href="/shop"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
