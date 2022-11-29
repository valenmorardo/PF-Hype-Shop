import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const ShowRating = ({ rate, ratePromedio }) => {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      {rate ? (
        <Rating name="read-only" value={rate} readOnly />
      ) : (
        <Rating
          name="half-rating-read"
          value={ratePromedio}
          precision={0.5}
          readOnly
        />
      )}
    </Box>
  );
};

export default ShowRating;
