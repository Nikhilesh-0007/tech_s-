import * as Icons from 'lucide-react';

interface IconBadgeProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  dark?: boolean;
}

export function IconBadge({ name, className = '', size = 'md', dark = false }: IconBadgeProps) {
  // Look up the icon dynamically from the lucide-react imports
  const LucideIcon = (Icons as any)[name];

  if (!LucideIcon) {
    return (
      <div className="w-8 h-8 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
        ?
      </div>
    );
  }

  const sizes = {
    sm: "w-8 h-8 p-1.5",
    md: "w-12 h-12 p-3",
    lg: "w-16 h-16 p-4"
  };

  const bgStyles = dark
    ? "bg-white/10 text-white border border-white/10"
    : "bg-light-green text-primary-green border border-border-green/40";

  return (
    <div className={`inline-flex items-center justify-center rounded-full transition-all duration-300 ${sizes[size]} ${bgStyles} ${className}`}>
      <LucideIcon className="w-full h-full stroke-[1.75]" />
    </div>
  );
}
export default IconBadge;
