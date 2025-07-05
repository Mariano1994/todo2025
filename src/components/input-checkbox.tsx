import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const inputCheckboxWrapperVariants = cva(
  " inline-flex justify-center items-center relative group "
);

export const inputCheckboxVariants = cva(
  " appearance-none cursor-pointer rounded-sm peer flex items-center justify-center border-2 border-solid transition overflow-hidden border-green-base hover:border-green-dark hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark",
  {
    variants: {
      size: {
        md: "h-5 w-5",
      },
      disabled: {
        true: "pointer-events-none",
      },
      loading: {
        true: "animate-pulse bg-gray-200 pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

export const inputCheckboxIconVariants = cva(
  "absolute top-1/2 left-1 -translate-y-1/2 hidden peer-checked:block text-white",
  {
    variants: {
      size: {
        md: "w-3 h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface InputCheckboxProps
  extends VariantProps<typeof inputCheckboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  icon: React.ReactNode;
}

function InputCheckbox({
  size,
  disabled,
  loading,
  className,
  icon,
  ...props
}: InputCheckboxProps) {
  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        {...props}
        className={inputCheckboxVariants({ size, disabled })}
      />
      <span className={inputCheckboxIconVariants({ size })}>{icon}</span>
    </label>
  );
}

export default InputCheckbox;
