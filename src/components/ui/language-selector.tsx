"use client";

import * as React from "react";
import { LanguagesIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";
import { locales, type Locale } from "@/i18n/config";

interface LanguageSelectorProps {
  onLanguageChange?: (locale: string) => void;
}

export function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("navbar");
  const tLangs = useTranslations("languages");

  const handleLanguageChange = async (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    if (onLanguageChange) {
      onLanguageChange(newLocale);
    }

    window.location.reload();
  };

  return (
    <Select
      value={locale}
      onValueChange={handleLanguageChange}
      aria-label={t("selectLanguage")}
    >
      <SelectTrigger className="[&>svg]:text-muted-foreground/80 [&>svg]:shrink-0">
        <LanguagesIcon size={16} aria-hidden="true" />
        <SelectValue placeholder={t("selectLanguage")} />
      </SelectTrigger>
      <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8">
        <SelectGroup>
          <SelectLabel className="ps-2">{t("selectLanguage")}</SelectLabel>
          {locales.map((loc) => (
            <SelectItem key={loc} value={loc}>
              {tLangs(loc)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
