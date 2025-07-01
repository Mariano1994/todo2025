import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";

export const inputVariant = cva(
  " border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none",
  {
    variants: {
      size: {
        md: "pb-2 px-2",
      },
      disebled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disebled: false,
    },
  }
);

interface InputTextProps
  extends VariantProps<typeof inputVariant>,
    Omit<React.ComponentProps<"input">, "size" | "disebled"> {}

function InputText({ size, disebled, className, ...props }: InputTextProps) {
  return (
    <input
      {...props}
      className={cx(
        inputVariant({ size, disebled }),
        textVariants(),
        className
      )}
    />
  );
}

export default InputText;
