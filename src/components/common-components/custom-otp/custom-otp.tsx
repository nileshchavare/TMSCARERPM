import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import * as React from "react";
import { errorStyle } from "../custom-input/widgets/custom-input-styles";

function OTP({
  separator,
  length,
  value,
  onChange,
  placeholder,
}: {
  separator: React.ReactNode;
  length: number;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}) {
  const inputRefs = React.useRef<HTMLInputElement[]>(
    new Array(length).fill(null)
  );

  const focusInput = (i: number) => inputRefs.current[i]?.focus();
  const selectInput = (i: number) => inputRefs.current[i]?.select();

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const allowed = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"];

    if ((e.key < "0" || e.key > "9") && !allowed.includes(e.key)) {
      e.preventDefault();
    }

    switch (e.key) {
      case "ArrowLeft":
        if (index > 0) {
          focusInput(index - 1);
          selectInput(index - 1);
        }
        break;

      case "ArrowRight":
        if (index < length - 1) {
          focusInput(index + 1);
          selectInput(index + 1);
        }
        break;

      case "Backspace":
      case "Delete":
        onChange((prev) => {
          const arr = prev.split("");
          arr[index] = "";
          return arr.join("");
        });

        if (e.key === "Backspace" && index > 0) {
          focusInput(index - 1);
        }
        break;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const val = e.target.value;

    if (!/^[0-9]*$/.test(val)) return;

    onChange((prev) => {
      const arr = prev.split("");
      arr[index] = val.slice(-1);
      return arr.join("");
    });

    if (val && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, length);

    const arr = value.split("");
    for (let i = 0; i < pasted.length; i++) {
      arr[i] = pasted[i];
    }

    onChange(arr.join(""));
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {Array.from({ length }).map((_, i) => (
        <React.Fragment key={i}>
          <InputElement
            ref={(el) => {
              inputRefs.current[i] = el!;
            }}
            value={value[i] ?? ""}
            placeholder={placeholder ?? "0"}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={handlePaste}
            onClick={() => selectInput(i)}
          />
          {i !== length - 1 && separator}
        </React.Fragment>
      ))}
    </Box>
  );
}

const grey = {
  300: "#C7D0DD",
  900: "#1C2025",
};

const blue = {
  400: "#3399FF",
  600: "#0072E5",
  200: "#80BFFF",
};

const InputElement = styled("input")(() => ({
  width: "44px",
  height: "44px",
  fontFamily: "Figtree, sans-serif",
  fontSize: "24px",
  fontWeight: 600,
  padding: "8px",
  borderRadius: "12px",
  textAlign: "center",
  background: "#F3F4F4",
  border: "1px solid #C9CBCC",
  color: grey[900],

  "&:hover": {
    borderColor: blue[400],
  },

  "&:focus": {
    borderColor: blue[400],
    boxShadow: `0 0 0 3px ${blue[200]}`,
    outline: "none",
  },

  "::placeholder": {
    fontFamily: "Figtree, sans-serif",
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#DBDBDB",
  },
}));
type CustomOtpProps = {
  onChange: (otp: string) => void;
  value: string;
  hasError: boolean;
  errorMessage: string;
  placeholder?: string;
};

const CustomOtp = ({
  onChange,
  value,
  hasError,
  errorMessage,
  placeholder,
}: CustomOtpProps) => {
  const [otp, setOtp] = React.useState(value);

  React.useEffect(() => {
    if (otp.length <= 6) {
      onChange(otp);
    }
  }, [otp]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <OTP
        value={otp}
        onChange={setOtp}
        length={6}
        separator={<>&nbsp;&nbsp;</>}
        placeholder={placeholder}
      />

      {hasError && (
        <Typography variant="caption" sx={errorStyle}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default CustomOtp;
