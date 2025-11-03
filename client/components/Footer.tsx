import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BEAST POSTERS</h3>
            <p className="text-gray-400">
              Premium art posters for your space. Curated collection of unique designs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/shop?category=abstract" className="hover:text-white transition">
                  Abstract
                </Link>
              </li>
              <li>
                <Link href="/shop?category=nature" className="hover:text-white transition">
                  Nature
                </Link>
              </li>
              <li>
                <Link href="/shop?category=typography" className="hover:text-white transition">
                  Typography
                </Link>
              </li>
              <li>
                <Link href="/shop?category=minimalist" className="hover:text-white transition">
                  Minimalist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Pinterest
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Beast Posters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
