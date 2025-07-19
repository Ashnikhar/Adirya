import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const partners = [
  {
    name: "Google",
    username: "@google",
    body: "Proud partner empowering the next generation of technology.",
    img: "https://avatar.vercel.sh/google",
  },
  {
    name: "Microsoft",
    username: "@microsoft",
    body: "Collaborating for a more innovative and accessible future.",
    img: "https://avatar.vercel.sh/microsoft",
  },
  {
    name: "OpenAI",
    username: "@openai",
    body: "Partnering to push the boundaries of artificial intelligence.",
    img: "https://avatar.vercel.sh/openai",
  },
  {
    name: "Amazon",
    username: "@amazon",
    body: "Delivering powerful cloud solutions and beyond.",
    img: "https://avatar.vercel.sh/amazon",
  },
];

const PartnerCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden space-y-12">
      <h2 className="text-3xl font-bold dark:text-white mt-12" >Trusted by leading organizations</h2>
      <Marquee pauseOnHover className="[--duration:18s]">
        {partners.map((partner) => (
          <PartnerCard key={partner.username} {...partner} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 from-background"></div>
    </div>
  );
}
