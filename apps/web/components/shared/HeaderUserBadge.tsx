export function HeaderUserBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-pink-300 text-xs font-black text-white">
        {name.charAt(0).toUpperCase()}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
