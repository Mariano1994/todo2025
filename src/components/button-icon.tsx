import { cva, type VariantProps } from "class-variance-authority";

export const buttonIconVariant = cva(
  " inline-flex justify-center items-center cursor-pointer transition group",
  {
    variants: {
      variant: {
        primary: "bg-green-base hover:bg-green-dark",
        secondary: "bg-pink-base hover:bg-pink-dark",
        tertiary: "bg-transparent hover:bg-gray-200",
      },

      size: {
        sm: "w-6 h-6 p-1 rounded",
      },

      disabled: {
        true: " opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  }
);

export const buttonIconIconVariant = cva("transition", {
  variants: {
    variant: {
      primary: "fill-white",
      secondary: "fill-pink-base group-hover:fill-white",
      tertiary: "fill-gray-300 group-hover:fill-gray-400",
    },
    size: {
      sm: "h-4 w-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "disabled">,
    VariantProps<typeof buttonIconVariant> {
  icon: React.ReactNode;
}

function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={buttonIconVariant({ variant, size, disabled, className })}
    >
      <span className={buttonIconIconVariant({ variant, size })}>{icon}</span>
    </button>
  );
}

export default ButtonIcon;
