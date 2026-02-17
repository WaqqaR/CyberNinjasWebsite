interface DividerProps {
  fixed?: boolean;
}

export function Divider({ fixed = false }: DividerProps) {
  return (
    <>
      {/* Light mode divider */}
      <div className={`flex items-center dark:hidden ${fixed ? "justify-center my-16" : "my-12"}`}>
        <div className={`h-px bg-[var(--border-color)] ${fixed ? "w-16" : "flex-grow"}`} />
        <div className="mx-4 w-2 h-2 rotate-45 bg-[var(--accent)]" />
        <div className={`h-px bg-[var(--border-color)] ${fixed ? "w-16" : "flex-grow"}`} />
      </div>
      {/* Dark mode glow line */}
      <div className={`hidden dark:block ${fixed ? "my-16" : "my-12"}`}>
        <img
          src="/images/line-glow.jpg"
          alt=""
          className="w-full object-cover h-[2px] opacity-80"
        />
      </div>
    </>
  );
}
