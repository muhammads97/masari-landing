import Link from "next/link";

type Props = {
  isMobile?: boolean;
  onClick?: () => void;
};

export default function NavLinks({ isMobile, onClick }: Props) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });

    onClick?.(); 
  };

  const links = [
    { label: "Features", id: "features" },
    { label: "How It Works", id: "howItWorks" },
    { label: "Download", id: "download" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.id}
          href={`#${link.id}`}
          onClick={(e) => handleClick(e, link.id)}
          className={`${
            isMobile ? "block" : ""
          } text-secondaryText hover:text-primary transition`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
