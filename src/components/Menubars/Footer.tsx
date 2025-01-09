"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface SocialLink {
  icon: React.ElementType;
  link: string;
}

interface QuickLink {
  label: string;
  href: string;
}

interface ServiceLink {
  label: string;
  href: string;
}

interface BlogPost {
  image: string;
  title: string;
  date: string;
}

interface Contact {
  icon: React.ElementType;
  text: string;
}

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

interface LinkListProps {
  title: string;
  items: QuickLink[] | ServiceLink[];
}

const LinkList: React.FC<LinkListProps> = ({ title, items }) => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4 text-[#2f296a] dark:text-[#fec784]">{title}</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx} className="mb-2">
            <a href={item.href} className="text-gray-600 hover:text-[#2f296a] dark:text-gray-300 dark:hover:text-[#fec784]">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BlogList: React.FC = () => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4 text-[#2f296a] dark:text-[#fec784]">Recent Post</h3>
      {blogPosts.map((post, idx) => (
        <div key={idx} className="mb-4">
          <a href="#" className="text-gray-600 hover:text-[#2f296a] dark:text-gray-300 dark:hover:text-[#fec784]">
            {post.title}
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
        </div>
      ))}
    </div>
  );
};

const ContactList: React.FC = () => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4 text-[#2f296a] dark:text-[#fec784]">Contact Us</h3>
      <ul>
        {contacts.map((contact, idx) => (
          <li key={idx} className="flex items-center mb-2">
            <contact.icon className="mr-2 text-[#2f296a] dark:text-[#fec784]" />
            <span className="text-gray-600 dark:text-gray-300">{contact.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f4f4f7] dark:bg-[#111827] text-gray-800 dark:text-gray-300 py-10 px-6 xl:px-24 2xl:px-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between w-full mb-4">
          <div className="mb-4 flex space-x-2 items-center">
            <img src="./tatvani_logo.jpg" alt="logo" className="w-12 rounded-full" />
            <span className="text-4xl font-bold text-[#2f296a] dark:text-[#fec784]">Tatvani</span>
          </div>
          <div className="flex space-x-4 h-9">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="p-2.5 rounded-lg text-[#2f296a] hover:bg-[#2f296a] hover:text-white bg-[#e6e6eb] dark:text-[#fec784] dark:hover:bg-[#fec784] dark:hover:text-[#111827] dark:bg-[#2f296a]"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        <hr className="border-gray-300 dark:border-gray-700 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <LinkList title="Quick Links" items={quickLinks} />
          <LinkList title="Service Links" items={serviceLinks} />
          <BlogList />
          <ContactList />
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center mt-8 pt-4 text-center">
          <p className="mb-4 md:mb-0">&copy; Mynimalistic 2024 | All Rights Reserved</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
              Terms & Condition
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
