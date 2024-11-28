import React from "react";
import { Typography, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import useStyles from "./styles";

function Pagination({ currentPage, setPage, totalPages }) {
  const classes = useStyles();

  const handlePrev = () => {
    if (currentPage > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 2; // Number of pages to show at the start and end

    if (totalPages <= 2 * visiblePages + 3) {
      // Display all pages if the total is small
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // First few pages
      for (let i = 1; i <= visiblePages; i++) {
        pageNumbers.push(i);
      }

      if (currentPage > visiblePages + 2) {
        pageNumbers.push("...");
      }

      // Middle pages
      if (currentPage > visiblePages && currentPage < totalPages - visiblePages + 1) {
        pageNumbers.push(currentPage);
      }

      if (currentPage < totalPages - visiblePages - 1) {
        pageNumbers.push("...");
      }

      // Last few pages
      for (let i = totalPages - visiblePages + 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  if (totalPages === 0) return null;

  return (
    <div className={classes.container}>
      <Button
        onClick={handlePrev}
        variant="contained"
        className={classes.button}
        color="primary"
        type="button"
        size="medium"
        disabled={currentPage === 1}
      >
        <NavigateBeforeIcon />
      </Button>
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <Typography key={index} className={classes.ellipsis}>
            ...
          </Typography>
        ) : (
          <Button
            key={page}
            onClick={() => setPage(page)}
            variant={page === currentPage ? "contained" : "outlined"}
            className={classes.pageButton}
            color="primary"
            type="button"
            size="medium"
          >
            {page}
          </Button>
        )
      )}
      <Button
        onClick={handleNext}
        variant="contained"
        className={classes.button}
        color="primary"
        type="button"
        size="medium"
        disabled={currentPage === totalPages}
      >
        <NavigateNextIcon />
      </Button>
    </div>
  );
}

export default Pagination;
