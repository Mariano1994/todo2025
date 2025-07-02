import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";
import Skeleton from "./skeleton";

export const badgeVariants = cva("inline-flex items-center rounded-full", {
  variants: {
    variant: {
      primary: "bg-green-light",
      secondary: "bg-pink-light",
    },

    size: {
      sm: "py-0.5 px-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});
export const badgeTextVariant = cva("", {
  variants: {
    variant: {
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },
});

interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {
  loading?: boolean;
}

function Badge({
  variant,
  size,
  className,
  loading,
  children,
  ...props
}: BadgeProps) {
  if (loading) return <Skeleton rounded="full" className="h-6 w-6" />;
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={badgeTextVariant({ variant })}>
        {children}
      </Text>
    </div>
  );
}

export default Badge;
