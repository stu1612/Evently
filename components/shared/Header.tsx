import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>
        {/* <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn> */}

        <div className="flex w-32 justify-end gap-3">
          {/* <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn> */}
          {/* <SignedOut>
            <button className="btn ghost info pill md">
              <Link href="/sign-in">Login</Link>
            </button>
          </SignedOut> */}
        </div>
      </div>
    </header>
  );
}
