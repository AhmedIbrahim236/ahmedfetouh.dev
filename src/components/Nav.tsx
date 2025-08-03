import Link from "next/link";

const links = ["Home", "About", "Projects", "Skills", "Contact"];

const Nav = ({ open }: { open: boolean }) => {
  return (
    <nav
      className={`absolute md:static top-full left-0 w-full border-t bg-background/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none shadow-lg md:shadow-none md:border-none py-4 md:py-0 md:text-sm transition-opacity duration-200 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "max-md:opacity-0 max-md:pointer-events-none"
      }`}
    >
      <ul className="container mx-auto max-w-[640px] px-8 md:px-0 flex flex-col gap-2 md:gap-6 md:flex-row">
        {links.map((link) => (
          <li key={link}>
            <Link
              className="block py-2 text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              href={`/${link === "Home" ? "" : link.toLowerCase()}`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
