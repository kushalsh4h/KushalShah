import { cn } from "@/lib/utils";
import Image from "next/image";

interface ListItem {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
  color: "blue";
}

interface RollingTextItemProps {
  item: ListItem;
}

const colorClassMap: Record<ListItem["color"], string> = {
  blue: "text-[#3E505B]",
};

function RollingTextItem({ item }: RollingTextItemProps) {
  return (
    <div className="group relative w-full cursor-pointer border-b border-neutral-200/20 py-6">
      <div className="relative h-[48px] overflow-hidden sm:h-[56px] md:h-20">
        <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          <div className="flex h-[48px] items-center sm:h-[56px] md:h-20">
            <h2 className="font-sans text-3xl font-black uppercase tracking-tighter text-white sm:text-4xl md:text-7xl">
              {item.title}
            </h2>
          </div>

          <div className="flex h-[48px] items-center sm:h-[56px] md:h-20">
            <h2
              className={cn(
                "font-sans text-3xl font-black uppercase tracking-tighter italic sm:text-4xl md:text-7xl",
                colorClassMap[item.color],
              )}
            >
              {item.title}
            </h2>
          </div>
        </div>
      </div>

      <span className="absolute right-0 top-8 hidden text-xs font-bold uppercase tracking-widest text-neutral-400 transition-opacity duration-300 group-hover:opacity-0 md:block">
        {item.category}
      </span>

      <div
        className={cn(
          "pointer-events-none absolute right-0 top-1/2 z-20 hidden h-32 w-48 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl lg:block",
          "opacity-0 scale-95 rotate-3 translate-x-4 transition-all duration-500 ease-out",
          "group-hover:translate-x-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100",
        )}
      >
        <div className="relative h-full w-full">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(min-width: 1024px) 192px, 0px"
            className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-[#3E505B]/15 mix-blend-overlay" />
        </div>
      </div>
    </div>
  );
}

function RollingTextList() {
  const items: ListItem[] = [
    {
      id: 1,
      title: "Portfolio Site",
      category: "Web App",
      src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&auto=format&fit=crop&q=60",
      alt: "Portfolio website preview",
      color: "blue",
    },
    {
      id: 2,
      title: "AI Assistant",
      category: "AI",
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&auto=format&fit=crop&q=60",
      alt: "Artificial intelligence project",
      color: "blue",
    },
    {
      id: 3,
      title: "Task Manager",
      category: "Productivity",
      src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&auto=format&fit=crop&q=60",
      alt: "Task and workflow management app",
      color: "blue",
    },
    {
      id: 4,
      title: "Data Dashboard",
      category: "Analytics",
      src: "https://images.unsplash.com/photo-1551281044-8b7ae8b7cb4d?w=400&auto=format&fit=crop&q=60",
      alt: "Analytics dashboard interface",
      color: "blue",
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4 py-10 sm:py-12">
      <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-neutral-400">
        Selected Work
      </h3>
      <div className="flex w-full flex-col">
        {items.map((item) => (
          <RollingTextItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export { RollingTextList };
