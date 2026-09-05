"use client";

import type React from "react";

type ButtonVariant =
  | "coral"
  | "teal"
  | "rose"
  | "mint"
  | "outline"
  | "peach"
  | "pastelMint"
  | "whiteMaroon"
  | "sunset"
  | "rose500"
  | "ocean";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
};

type SharedButtonProps = SharedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type SharedAnchorProps = SharedProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    disabled?: boolean;
  };

type ButtonProps = SharedButtonProps | SharedAnchorProps;

const BASE_CLASSES =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-60";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  coral:
    "bg-[#a3352b] text-white shadow-[0_4px_0_0_#7e2a22] hover:bg-[#8c2c23] active:shadow-none",
  teal:
    "bg-[#0F9C8E] text-white shadow-[0_4px_0_0_#0a7268] hover:bg-[#0d8478] active:shadow-none",
  rose:
    "bg-[#ff6868] text-white shadow-[0_4px_0_0_#d95353] hover:bg-[#ef5353] active:shadow-none",
  mint:
    "bg-[#4ecdc4] text-white shadow-[0_4px_0_0_#35ada5] hover:bg-[#3dbdb3] active:shadow-none",
  outline:
    "border border-[#ecdfc9] bg-white text-[#5a5a5a] shadow-[0_4px_0_0_#e5dccf] hover:bg-[#faf7f2] active:shadow-none",
  peach:
    "bg-[#E8604F] text-white shadow-[0_4px_0_0_#b54b3e] hover:bg-[#d9543f] active:shadow-none",
  pastelMint:
    "bg-[#B9EFE0] text-gray-800 shadow-[0_4px_0_0_#8fbaae] hover:bg-[#a5e8d5] active:shadow-none",
  whiteMaroon:
    "bg-white text-[#9B2335] shadow-[0_4px_0_0_#e8d4d4] hover:bg-gray-100 active:shadow-none",
  sunset:
    "bg-coral text-white shadow-[0_4px_0_0_#c04f3b] hover:bg-[#de5b44] active:shadow-none",
  rose500:
    "bg-[#f43f5e] text-white shadow-[0_4px_0_0_#be3149] hover:bg-[#e11d48] active:shadow-none",
  ocean:
    "bg-[#008C9A] text-white shadow-[0_4px_0_0_#006d78] hover:bg-[#00727d] active:shadow-none",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "min-h-10 px-5 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3 text-base font-black",
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Button(props: ButtonProps) {
  const {
    as = "button",
    variant = "coral",
    size = "md",
    fullWidth = false,
    className,
    children,
    ...rest
  } = props;

  const classes = joinClasses(
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth ? "w-full" : undefined,
    className
  );

  if (as === "a") {
    const { disabled, onClick, ...anchorProps } = rest as SharedAnchorProps;

    return (
      <a
        {...anchorProps}
        className={classes}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : anchorProps.tabIndex}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
            return;
          }

          onClick?.(event);
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button {...(rest as SharedButtonProps)} className={classes}>
      {children}
    </button>
  );
}
