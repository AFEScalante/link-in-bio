import Link from "./Link";
import { FaBluesky, FaComputer, FaGithub } from "react-icons/fa6";

const LINKS = [
  {
    label: "Blog personal",
    url: "https://angel-blog.netlify.app",
    icon: <FaComputer size={22} />,
  },
  {
    label: "Bluesky",
    url: "https://bsky.app/profile/angelesca.bsky.social",
    icon: <FaBluesky size={22} />,
  },
  {
    label: "GitHub",
    url: "https://github.com/AFEScalante",
    icon: <FaGithub size={22} />,
  },
];

function LinkList() {
  return (
    <ul className="list-links">
      {LINKS.map(({ url, label, icon }) => (
        <Link key={url} href={url} icon={icon}>
          {label}
        </Link>
      ))}
    </ul>
  );
}

export default LinkList;
