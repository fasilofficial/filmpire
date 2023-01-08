import React from "react";
import { Typography, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import useStyles from "./styles";

function Pagination({ currentPage, setPage, totalPages }) {
  const classes = useStyles();

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
      <Button
        // startIcon={<NavigateBeforeIcon />}
        onClick={handlePrev}
        variant="contained"
        className={classes.button}
        color="primary"
        type="button"
        size="medium"
      >
        <NavigateBeforeIcon />
      </Button>
      <Typography variant="h6" className={classes.pageNumber}>
        {currentPage}
      </Typography>
      <Button
        // endIcon={<NavigateNextIcon />}
        onClick={handleNext}
        variant="contained"
        className={classes.button}
        color="primary"
        type="button"
        size="medium"
      >
        <NavigateNextIcon />
      </Button>
    </div>
  );
}

export default Pagination;
