// footer.tsx

"use client"; // For Next.js 13 and above to indicate client-side rendering

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Type for social link objects
interface SocialLink {
  icon: React.ElementType;
  link: string;
}

// Type for quick links
interface QuickLink {
  label: string;
  href: string;
}

// Type for service links
interface ServiceLink {
  label: string;
  href: string;
}

// Type for blog posts
interface BlogPost {
  image: string;
  title: string;
  date: string;
}

// Type for contacts
interface Contact {
  icon: React.ElementType;
  text: string;
}

// Data arrays
const socialLinks: SocialLink[] = [
  { icon: FaFacebookF, link: "#" },
  { icon: FaLinkedinIn, link: "#" },
  { icon: FaTwitter, link: "#" },
  { icon: FaInstagram, link: "#" },
];

const quickLinks: QuickLink[] = [
  { label: "Mynimalistic", href: "#" },
  { label: "About us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Discovery", href: "#" },
];

const serviceLinks: ServiceLink[] = [
  { label: "Poetry", href: "#" },
  { label: "News", href: "#" },
  { label: "Short Stories", href: "#" },
  { label: "Advertisement", href: "#" },
];

const blogPosts: BlogPost[] = [
  {
    image: "path-to-blog-image",
    title: "We provide a range of IT solutions",
    date: "January 11, 2024",
  },
  {
    image: "path-to-blog-image",
    title: "IT solutions enhance efficiency",
    date: "January 11, 2024",
  },
];

const contacts: Contact[] = [
  { icon: FaPhoneAlt, text: "+1234567890" },
  { icon: FaEnvelope, text: "mynimalistic@gmail.com" },
  { icon: FaMapMarkerAlt, text: "Bhubaneswar, Odisha, India" },
];

// LinkList component
interface LinkListProps {
  title: string;
  items: QuickLink[] | ServiceLink[];
}

const LinkList: React.FC<LinkListProps> = ({ title, items }) => (
  <div>
    <h3 className="font-semibold text-lg mb-4">{title}</h3>
    <ul>
      {items.map((item, idx) => (
        <li key={idx} className="mb-2">
          <a href={item.href} className="text-gray-600 hover:text-[#1c7636]">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// BlogList component
const BlogList: React.FC = () => (
  <div>
    <h3 className="font-semibold text-lg mb-4">Recent Post</h3>
    {blogPosts.map((post, idx) => (
      <div key={idx} className="mb-4">
        <a href="#" className="text-gray-600 hover:text-[#1c7636]">
          {post.title}
        </a>
        <p className="text-sm text-gray-500">{post.date}</p>
      </div>
    ))}
  </div>
);

// ContactList component
const ContactList: React.FC = () => (
  <div>
    <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
    <ul>
      {contacts.map((contact, idx) => (
        <li key={idx} className="flex items-center mb-2">
          <contact.icon className="mr-2 text-[#1c7636]" />
          <span>{contact.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Footer component
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#e6e6ebb1] text-gray-800 py-10 px-6 xl:px-24 2xl:px-32">
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row justify-between w-full mb-4">
          <div className="mb-4 flex space-x-2 items-center">
            {/* <img src="./tatvani_logo.jpg" alt="logo" className="w-12 rounded-full" /> */}
            <span className="text-[#1c7636] text-4xl font-bold">Tatvani</span>
          </div>
          <div className="flex space-x-4 h-9">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="text-[#1c7636] p-2.5 rounded-lg hover:bg-[#1c7636] hover:text-white bg-[#C9E9D2]"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        <hr className="border-gray-400 mb-8" />

        {/* Linking */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <LinkList title="Quick Links" items={quickLinks} />
          <LinkList title="Service Links" items={serviceLinks} />
          <BlogList />
          <ContactList />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-400 flex flex-col md:flex-row justify-between items-center mt-8 pt-4 text-center">
          <p className="mb-4 md:mb-0">&copy; Mynimalistic 2024 | All Rights Reserved</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Terms & Condition
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
