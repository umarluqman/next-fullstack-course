import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
// import { useAuth } from "src/auth/useAuth";

interface iProps {
  main: ReactNode;
}

const Layout: FunctionComponent<iProps> = ({ main }) => {
  const authenticated = true;

  const logout = () => {
    return null;
  };

  return (
    <div className="bg-gray-900 max-w-screen-2xl mx-auto text-white">
      <nav className="bg-gray-800" style={{ height: 64 }}>
        <div className="px-6 flex items-center justify-between h-16">
          <Link href="/home">
            <a>
              <img
                src="/home-color.svg"
                alt="home house"
                className="inline w-6"
              ></img>
            </a>
          </Link>
          {authenticated ? (
            <>
              <Link href="/home/add">
                <a>Add House</a>
              </Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link href="/home/add">
              <a>Log in / Sign up</a>
            </Link>
          )}
        </div>
      </nav>
      <main style={{ minHeight: "calc(100vh - 64px)" }}>{main}</main>
    </div>
  );
};

export default Layout;
