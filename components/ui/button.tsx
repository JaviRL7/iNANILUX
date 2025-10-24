import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary-600 active:scale-95 shadow-lg hover:shadow-xl",
        secondary:
          "bg-secondary text-white hover:bg-secondary-600 active:scale-95 shadow-lg hover:shadow-xl",
        accent:
          "bg-accent text-white hover:bg-accent-600 active:scale-95 shadow-lg hover:shadow-xl",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95",
        ghost:
          "hover:bg-primary/10 hover:text-primary active:scale-95",
        gradient:
          "bg-gradient-pokemon text-white hover:opacity-90 active:scale-95 shadow-lg hover:shadow-xl",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
