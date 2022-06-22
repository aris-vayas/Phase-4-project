// import * as React from "react";
// import Box from "@mui/material/Box";
// import Input from "@mui/material/Input";

// const ariaLabel = { "aria-label": "description" };

// export default function Inputs() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         "& > :not(style)": { m: 1 },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <Input defaultValue="Hello world" inputProps={ariaLabel} />
//       <Input placeholder="Placeholder" inputProps={ariaLabel} />
//       <Input disabled defaultValue="Disabled" inputProps={ariaLabel} />
//       <Input defaultValue="Error" error inputProps={ariaLabel} />
//     </Box>
//   );
// }

import React from "react";
import { useForm } from "react-hook-form";
import { Alert } from "@mui/material";

export default function App() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input
        {...register("age", { required: true, maxLength: 16, minLength: 8 })}
      />
      <input type="submit" />
    </form>
  );
}
