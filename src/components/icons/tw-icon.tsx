// CUSTOM BUILT TAILWIND ICON IMPORTER

import ChevronDownIcon from "@/assets/svg/custom-icons/chevron-down.svg?react";
import ChevronLeftIcon from "@/assets/svg/custom-icons/chevron-left.svg?react";

export type IconName = keyof typeof iconMap;

export type IconProps = {
  name: IconName;
  className?: string;
  width?: string;
  height?: string;
};

const DEFAULT_DIMENSIONS = {
  width: "w-4",
  height: "h-4",
};

const iconDefaultSizes = {
  chevronDown: DEFAULT_DIMENSIONS, // template
  chevronLeft: { width: "w-4", height: "h-auto" },
};

const iconMap = {
  chevronLeft: ChevronLeftIcon,
  chevronDown: ChevronDownIcon,
};

export function Icon({ name, className }: IconProps) {
  const IconComponent = iconMap[name];
  const defaultSizes = iconDefaultSizes[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const finalClassName =
    className || `${defaultSizes.width} ${defaultSizes.height}`;

  return <IconComponent className={finalClassName} />;
}
