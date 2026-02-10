interface DividerProps {
  fixed?: boolean;
}

export function Divider({ fixed = false }: DividerProps) {
  return (
    <div className={`flex items-center ${fixed ? "justify-center my-16" : "my-12"}`}>
      <div className={`h-px bg-[var(--border-color)] ${fixed ? "w-16" : "flex-grow"}`} />
      <div className="mx-4 w-2 h-2 rotate-45 bg-[var(--accent)] dark:bg-red-500" />
      <div className={`h-px bg-[var(--border-color)] ${fixed ? "w-16" : "flex-grow"}`} />
    </div>
  );
}
