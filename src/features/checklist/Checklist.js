import React, { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import Card from "@mui/material/Card";
import { useSelector, useDispatch } from "react-redux";
import { selectItems, allCompleted, itemCompleted } from "./checklistSlice";

const CheckBox = ({ id, type, description }) => {
  const [selectedValue, setSelectedValue] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSelectedValue(!selectedValue);
    dispatch(
      itemCompleted({
        id,
      })
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Radio
        checked={selectedValue}
        onClick={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 40,
          },
          color: "#cfd2d4",
          "&.Mui-checked": {
            color: "success",
          },
        }}
      />
      <Box
        sx={{
          width: "100%",
          fontWeight: "bold",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.6rem",
            fontWeight: "bold",
            color: "#ababab",
          }}
        >
          {type}
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#676767",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const CompletePlanButton = ({ completed }) => {
  const { width, height } = useWindowSize();
  const [celebrate, setCelebrate] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "200px",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        disabled={!completed}
        onClick={() => {
          setCelebrate(true);
          setTimeout(() => {
            setCelebrate(false);
          }, 5000);
        }}
        sx={{
          textTransform: "none",
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          fontWeight: "bold",
          fontSize: "1rem",
          backgroundColor: "success",
          color: "white",
          "&:hover": {
            backgroundColor: "#0a5777",
          },
        }}
      >
        Complete Plan
      </Button>
      {completed && celebrate && <Confetti width={width} height={height} />}
    </Box>
  );
};

export function Checklist() {
  const items = useSelector(selectItems);
  const completed = useSelector(allCompleted);

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: "0.8rem",
          color: "#8f979d",
          margin: "1rem",
        }}
      >
        Food Safety
      </Typography>
      <Card
        sx={{
          m: 2,
          p: 1.5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {items.map((item) => {
          return (
            <CheckBox
              key={item.id}
              id={item.id}
              type={item.type}
              description={item.description}
            />
          );
        })}
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem",
        }}
      >
        {CompletePlanButton({ completed })}
      </Box>
    </Box>
  );
}
