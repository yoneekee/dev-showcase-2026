import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "自己紹介", href: "about" }, { label: "強み", href: "strengths" },
  { label: "スキル", href: "skills" }, { label: "制作物", href: "work" },
  { label: "業務実績", href: "experience" }, { label: "経歴", href: "career" },
  { label: "資格", href: "qualifications" },
];
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <nav aria-label="メインナビゲーション" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Button asChild variant="link" className="px-0 font-semibold"><a href="#">キム ヨンジョン</a></Button>
        <div className="flex items-center gap-1">
          <div className="hidden items-center xl:flex">{NAV_ITEMS.map(item => <Button asChild variant="ghost" size="sm" key={item.href}><a href={`#${item.href}`}>{item.label}</a></Button>)}</div>
          <ThemeToggle />
          <Button variant="outline" size="icon" className="h-9 w-9 xl:hidden" aria-label="メニュー" aria-expanded={mobileOpen} aria-controls="mobile-nav" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</Button>
        </div>
      </nav>
      {mobileOpen && <nav id="mobile-nav" aria-label="セクション" className="grid grid-cols-2 gap-2 border-t border-border px-5 py-4 xl:hidden">{NAV_ITEMS.map(item => <Button asChild variant="ghost" key={item.href} className="justify-start" onClick={() => setMobileOpen(false)}><a href={`#${item.href}`}>{item.label}</a></Button>)}</nav>}
    </header>
  );
};
export default Navbar;
