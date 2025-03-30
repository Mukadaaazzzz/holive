import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    imgSrc: "/assets/footer/facebook.svg",
    link: "https://www.facebook.com",
    width: 20,
  },
  {
    imgSrc: "/assets/footer/instagram.svg",
    link: "https://www.instagram.com",
    width: 20,
  },
  {
    imgSrc: "/assets/footer/twitter.svg",
    link: "https://www.twitter.com",
    width: 20,
  },
];

const links = [
  { name: "Product", link: "/product" },
  { name: "Pricing", link: "/pricing" },
  { name: "Features", link: "/features" },
];

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* LOGO */}
          <div className="flex justify-center md:justify-start">
            <Link href="/">
              <Image src="/logoh.png" alt="Holive Logo" width={214} height={66} />
            </Link>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="flex justify-center space-x-6">
            {links.map((item, index) => (
              <Link key={index} href={item.link} className="text-lg hover:text-gray-300 transition">
                {item.name}
              </Link>
            ))}
          </div>

          {/* SOCIAL MEDIA */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((item, index) => (
              <Link key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="h-10 w-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                  <Image src={item.imgSrc} alt={item.imgSrc} width={item.width} height={20} />
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* COPYRIGHT & LEGAL LINKS */}
        <div className="mt-8 border-t border-gray-600 pt-6 text-center md:flex justify-between items-center text-sm opacity-70">
          <p>© 2025 Holive Integrated Services. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-3 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
            <span className="hidden md:block">|</span>
            <Link href="/terms" className="hover:text-gray-300">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
