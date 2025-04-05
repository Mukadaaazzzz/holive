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
  { name: "About Us", link: "/about" },
  { name: "Our Products", link: "/holive-partnership" },
  { name: "Log In", link: "/login" },
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

        
      </div>
    </footer>
  );
};

export default Footer;
