import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 backdrop-blur-lg bg-opacity-20 bg-slate-300">
      <nav className="flex items-center justify-between max-w-6xl mx-auto p-4 md:p-6 ">
        <div className="flex items-center justify-center">
          <Link className="font-bold text-lg font-sans" href={"/"}>
            HOME
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-6">
          <Link href={"religion"}>Religion</Link>
          <Link href={"technology"}>Technology</Link>
          <Link href={"sport"}>Sport</Link>
          <Link href={"create-post"}>Create</Link>
          <Link href={"sign-in"}>SignIn</Link>
        </div>
        <div className="hidden"></div>
      </nav>
    </div>
  );
};

export default Navbar;
