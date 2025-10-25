"use client";

import * as React from "react";
import { MessageCircleDashedIcon } from "lucide-react";
import UserMenu from "./UserMenu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useTranslations } from "next-intl";

// Types
export interface Navbar13Props extends React.HTMLAttributes<HTMLElement> {
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onLanguageChange?: (locale: string) => void;
  onTempChatClick?: () => void;
  onUserItemClick?: (item: string) => void;
}

export const Navbar13 = React.forwardRef<HTMLElement, Navbar13Props>(
  (
    {
      className,
      userName = "Rafly Aziz Abdillah",
      userEmail = "rafly@example.com",
      userAvatar,
      onLanguageChange,
      onTempChatClick,
      onUserItemClick,
      ...props
    },
    ref
  ) => {
    const t = useTranslations("navbar");

    return (
      <header
        ref={ref}
        className={cn("border-b px-4 md:px-6 [&_*]:no-underline", className)}
        {...props}
      >
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left side */}
          <div>
            <LanguageSelector onLanguageChange={onLanguageChange} />
          </div>

          {/* Right side: Actions */}
          <div className="flex items-center justify-end gap-2">
            {/* Temporary chat button */}
            <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground size-8 rounded-full shadow-none"
              aria-label={t("tempChat")}
              onClick={(e) => {
                e.preventDefault();
                if (onTempChatClick) onTempChatClick();
              }}
            >
              <MessageCircleDashedIcon size={16} aria-hidden="true" />
            </Button>
            {/* User menu */}
            <UserMenu
              userName={userName}
              userEmail={userEmail}
              userAvatar={userAvatar}
              onItemClick={onUserItemClick}
            />
          </div>
        </div>
      </header>
    );
  }
);

Navbar13.displayName = "Navbar13";

export { UserMenu };
