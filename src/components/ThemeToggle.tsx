import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const label = resolvedTheme === "dark" ? "ライトモード" : "ダークモード";
  return <Button variant="outline" size="icon" className="h-9 w-9" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label={label} title={label}>{resolvedTheme === "dark" ? <Moon /> : <Sun />}</Button>;
}
