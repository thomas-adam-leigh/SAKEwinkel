import { GlobeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getLocale, locales, setLocale } from "@/paraglide/runtime";

const localeLabels: Record<string, string> = {
  en: "English",
  de: "Deutsch",
};

export function LocaleSwitcher() {
  const currentLocale = getLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="icon" />}>
        <GlobeIcon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Switch language</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuCheckboxItem
            key={locale}
            checked={locale === currentLocale}
            onCheckedChange={(v) => v && setLocale(locale)}
          >
            {localeLabels[locale] ?? locale.toUpperCase()}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
