import LandingPageNavbar from "@/components/shared/LandingPageNavbar";
import { featuresSection } from "@/constants";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <LandingPageNavbar />
      {/* Hero Section */}
      <section className="bg-white py-20 max-md:mt-20 container mx-auto" id="home">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Instantly Generate Beautiful <span className="text-blue-600">Landing Pages</span> with AI
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Describe your product or service in a few words, and let our AI build a modern, responsive landing page ready to launch or download.
          </p>
          <a
            href="/generate"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition"
          >
            Get Started for Free
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use Our Generator?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuresSection.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white container mx-auto" id="how-it-works">
        <div className="px-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <ol className="space-y-6 max-w-3xl mx-auto text-lg">
            <li><strong>1.</strong> Fill out a quick form about your business or idea</li>
            <li><strong>2.</strong> Our AI instantly generates a unique landing page</li>
            <li><strong>3.</strong> Preview, tweak, and export your site code</li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Build in Minutes, Not Weeks</h2>
          <p className="mb-8 text-lg max-w-xl mx-auto">
            Whether you are a startup founder, marketer, or freelancer — start with a strong first impression.
          </p>
          <a
            href="/generate"
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition"
          >
            Generate Your Business Landing Page Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} AI Landing Page Generator. All rights reserved.
      </footer>
    </main>
  );
}
