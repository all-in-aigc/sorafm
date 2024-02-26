function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ({
  lang,
  dict,
  cate,
}: {
  lang: string;
  dict: any;
  cate: string;
}) {
  const tabs = [
    {
      name: dict.tab.latest,
      href: `/${lang}/videos/latest`,
      current: cate === "" || cate === "latest",
    },
    {
      name: dict.tab.featured,
      href: `/${lang}/videos/featured`,
      current: cate === "featured",
    },
    {
      name: dict.tab.random,
      href: `/${lang}/videos/random`,
      current: cate === "random",
    },
  ];

  return (
    <div className="mx-auto mt-8 mb-0">
      <div className="block">
        <div className="">
          <nav
            className="flex items-center justify-center space-x-8"
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-300 hover:border-primary hover:text-primary",
                  "whitespace-nowrap border-b-2 py-2 px-1 text-sm font-medium"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
