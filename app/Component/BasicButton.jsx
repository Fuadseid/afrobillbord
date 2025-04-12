'use client';

import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButtons({ children, onClick, className = '', ...props }) {
  return (
    <Button 
      variant="outlined" 
      onClick={onClick}
      className={`rounded-full w-[35px] h-[35] p-[50px] ${className}`}  
      sx={{
        minWidth: 'unset',
        padding: 'unset',
      }}
      {...props}
    >
      {children}
    </Button>
  );
}