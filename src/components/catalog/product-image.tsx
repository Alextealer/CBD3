/**
 * Single source of truth for rendering a product image with a "detouré"
 * (background-removed) look. Uses mix-blend-multiply on a consistent
 * light-gray background so white pixels blend away and only the product
 * (darker pixels) remain visible.
 *
 * IMPORTANT: the *direct parent* must have the same gray background as
 * this component's bg, otherwise the blend mode produces halos. That's
 * why this component also renders the gray bg itself.
 */

import { cn } from "@/lib/utils";

type Variant = "hero" | "card" | "thumb" | "pill" | "tile";

interface Props {
  src?: string;
  alt: string;
  /** Visual size/padding preset. */
  variant?: Variant;
  /** Optional override of the wrapper classes (aspect ratio, rounding). */
  className?: string;
  /** Optional override of the img classes (padding, scale). */
  imgClassName?: string;
  /** Fallback content shown when no `src` is provided. */
  fallback?: React.ReactNode;
}

// One consistent gray for every product image bg — white in the source
// image blends INTO this gray, so only the product shape remains.
export const PRODUCT_BG = "bg-[#eeeeee]";

const variantWrapper: Record<Variant, string> = {
  hero:  "aspect-square rounded-[1.5rem]",
  card:  "aspect-square rounded-2xl",
  thumb: "aspect-square rounded-xl",
  pill:  "aspect-square rounded-lg",
  tile:  "w-full h-full",
};

const variantPadding: Record<Variant, string> = {
  hero:  "p-8",
  card:  "p-6",
  thumb: "p-2",
  pill:  "p-1",
  tile:  "p-1",
};

export function ProductImage({
  src,
  alt,
  variant = "card",
  className,
  imgClassName,
  fallback,
}: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden flex items-center justify-center",
        PRODUCT_BG,
        variantWrapper[variant],
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-contain mix-blend-multiply",
            variantPadding[variant],
            imgClassName,
          )}
        />
      ) : (
        fallback ?? <ProductPlaceholder />
      )}
    </div>
  );
}

function ProductPlaceholder() {
  return (
    <div className="relative">
      <div className="w-12 h-20 bg-white/80 rounded-lg shadow-sm mx-auto" />
      <div className="w-6 h-3 bg-white/60 rounded-t-sm mx-auto -mt-0.5" />
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-10 bg-white rounded-sm flex items-center justify-center">
        <span className="text-[5px] font-bold text-center leading-tight text-muted-foreground">
          Votre
          <br />
          Marque
        </span>
      </div>
    </div>
  );
}
