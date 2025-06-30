import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";

export const buttonVariant = cva(
  "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2 ",
  {
    variants: {
      variant: {
        primary: "bg-gray-200 hover:bg-pink-light",
      },
      size: {
        md: "py-4 px-5 h-14",
      },
      disabled: {
        true: "opacity-50 pointer-events-none cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  }
);

export const buttonIconVariant = cva("transition", {
  variants: {
    variant: {
      primary: "fill-pink-base",
    },
    size: {
      md: "h-5 w-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "disabled">,
    VariantProps<typeof buttonVariant> {
  icon?: React.ReactNode;
}

function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={buttonVariant({ variant, size, disabled, className })}
    >
      {icon && (
        <span className={buttonIconVariant({ variant, size })}>{icon}</span>
      )}
      <Text>{children}</Text>
    </button>
  );
}

export default Button;
