import Link from "next/link";
import NavLinks from "./NavLinks";

type Props = {
  isOpen: boolean;
  closeMenu: () => void;
};

export default function MobileMenu({ isOpen, closeMenu }: Props) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-md px-6 pb-6 space-y-4">
      <NavLinks isMobile onClick={closeMenu} />
      <Link
        href="#signup"
        onClick={closeMenu}
        className="block bg-primary hover:bg-hoverGreen text-white px-5 py-2 rounded-lg text-center transition"
      >
        Get Started
      </Link>
    </div>
  );
}