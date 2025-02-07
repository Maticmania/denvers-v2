import { FaHome, FaHeart, FaBook, FaStar, FaPlusCircle, FaList, FaUser } from 'react-icons/fa';

type NavLink = {
  href: string;
  label: string;
  icon: any;
};

export const links: NavLink[] = [
  { href: '/', label: 'home', icon: <FaHome /> },
  { href: '/favorites', label: 'favorites', icon: <FaHeart /> },
  { href: '/bookings', label: 'bookings', icon: <FaBook /> },
  { href: '/reviews', label: 'reviews', icon: <FaStar /> },
  { href: '/rentals/create', label: 'create rental', icon: <FaPlusCircle /> },
  { href: '/rentals', label: 'my rentals', icon: <FaList /> },
  { href: '/profile', label: 'profile', icon: <FaUser /> },
];