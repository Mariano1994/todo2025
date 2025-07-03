import { cva, cx } from "class-variance-authority";

interface MainContentProps extends React.ComponentProps<"main"> {}

export const MainPropsVariants = cva("");
function MainContent({ children, className, ...props }: MainContentProps) {
  return (
    <main className={cx("mt-4 md:mt-8", className)} {...props}>
      {children}
    </main>
  );
}

export default MainContent;
