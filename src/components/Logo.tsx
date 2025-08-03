import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 text-primary text-xl font-mono font-bold"
    >
      {"<"}
      <span className="text-foreground">dev</span>
      {"/>"}
    </Link>
  );
};

export default Logo;
