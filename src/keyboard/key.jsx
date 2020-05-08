import React from "react";
import { Button } from "../button";

export const Key = ({
  id,
  value,
  grid,
  disabled,
  isBound,
  appearance = "primary",
  isSelected,
  onClick,
  className,
}) => (
  <Button
    className={[className, id, isBound && "bound"].filter((a) => !!a).join(" ")}
    disabled={disabled}
    selected={isSelected}
    appearance={appearance}
    onClick={() => !disabled && onClick()}
    style={{ gridArea: grid }}
  >
    {value}
  </Button>
);
