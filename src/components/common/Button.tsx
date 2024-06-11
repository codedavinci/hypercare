import React from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "accent";
};

export default function Button({ variant = "primary", ...rest }: ButtonProps) {
  return <button className={`btn btn-${variant}`} {...rest} />;
}

Button.displayName = "Button";
