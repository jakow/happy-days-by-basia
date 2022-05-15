import * as React from "react";
import logo from "../images/basia-logo-black.svg";
import tiktokLogo from "../images/social/tiktok-black.svg";
import igLogo from "../images/social/ig-black.svg";

import { useEffect, useState } from "react";
import classnames from "classnames";

type SocialInfo = {
  name: string;
  icon: string;
  link: string;
};

const social: Array<SocialInfo> = [
  {
    name: "@basia.music on TikTok",
    icon: tiktokLogo,
    link: "https://www.tiktok.com/@basia.music",
  },
  {
    name: "@baga.music on Instagram",
    icon: igLogo,
    link: "https://www.instagram.com/baga.music/",
  },
];

function SocialLink({ name, icon, link }: SocialInfo): React.ReactElement {
  return (
    <a href={link} target="_blank" rel="me noopener noreferrer">
      <img
        width={24}
        height={24}
        alt={name}
        src={icon}
        className="h-6 w-auto"
      />
    </a>
  );
}

// type NavItemProps = {
//   children: React.ReactNode;
//   href: string;
// };

// function NavItem({ children, href }: NavItemProps): React.ReactElement {
//   return (
//     <li className="mx-2">
//       <a className="py-2 px-1 font-serif text-lg" href={href}>
//         {children}
//       </a>
//     </li>
//   );
// }

// function SiteNav(): React.ReactElement {
//   return (
//     <nav className="px-4">
//       <ul className="h-8 flex flex-row justify-center">
//         <NavItem href="/travel">Travel</NavItem>
//         <NavItem href="/music">Music</NavItem>
//         <NavItem href="/lifestyle">Lifestyle</NavItem>
//       </ul>
//     </nav>
//   );
// }

/**
 * What type of header is this:
 * - default occupies space and has background
 * - immersive header occupies no space, is transparent.
 */
export type HeaderStyle = "default" | "immersive";

type Props = {
  headerStyle?: HeaderStyle;
  /**
   * If "immersive" style is used, this controls whether the
   * header materialises with background.
   */
  immersion?: boolean;
};

export default function Header(props: Props): React.ReactElement {
  let styleClasses: { [key: string]: boolean };
  if (props.headerStyle === "immersive") {
    styleClasses = {
      absolute: true,
      "z-50": true,
      "bg-ivory": props.immersion,
    };
  } else {
    styleClasses = { relative: true };
  }
  return (
    <header className={classnames("h-16 w-full", styleClasses)}>
      <div className="max-w-screen-xl mx-auto relative">
        {/* Stacking context one: logo */}
        <div className="h-16 w-full flex flex-row justify-center">
          <a href="/" className="py-4 px-2">
            <img
              height={32}
              width={140}
              src={logo}
              alt="Happy Days By Basia"
              className="h-8"
            />
          </a>
        </div>
        {/* <div className="absolute left-0 top-0 h-full">Search section</div> */}
        {/* Stacking context two: nav and social */}
        <div>
          {/* <div className="absolute top-16 w-full">
          <SiteNav />
        </div> */}
          <div className="absolute top-0 right-0 h-16 flex flex-row items-center pr-4">
            {social.map((sm) => (
              <span key={sm.name} className="ml-4">
                <SocialLink {...sm} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export function useImmersionOnScroll(threshold = 0): boolean {
  if (typeof window === "undefined") {
    return true;
  }
  const [immersion, setImmersion] = useState(window.scrollY <= threshold);

  useEffect(() => {
    const listener = () => {
      const newImmersion = window.scrollY <= threshold;
      if (newImmersion !== immersion) {
        console.log("Change immersion!");
        setImmersion(newImmersion);
      }
    };
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [threshold, immersion, setImmersion]);
  return immersion;
}
