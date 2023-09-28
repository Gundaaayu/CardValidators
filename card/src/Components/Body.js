import React, { useState } from "react";
import "./body.css";
import image from "../assets/Rectangle 1.png";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import ConfirmationDialog from "./Confirm";
import cardImg from "../assets/Frame 2.png";
import dayjs from "dayjs";

const Body = () => {
  const [openFirstDialog, setOpenFirstDialog] = useState(false);
  const [openSecondDialog, setOpenSecondDialog] = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cv, setcv] = useState("");
  const [date, setdate] = useState("");
  const [cardHolderNameError, setCardHolderNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cvError, setCvError] = useState("");
  const [dateError, setDateError] = useState("");

  const cardNumberRegex = /^(\d{4}\s\d{4}\s\d{4}\s\d{4})$/;

  const handleCardNumberChange = (e) => {
    const inputValue = e.target.value;
    let formattedValue = inputValue.replace(/\s/g, ""); // Remove existing spaces

      if (formattedValue.length > 16) {
        // Prevent entering more than 16 digits
        return;
      }
    if (formattedValue.length > 0) {
      // Add spaces after every 4 digits
      formattedValue = formattedValue.match(/.{1,4}/g).join(" ");
    }

    setCardNumber(formattedValue);
    setCardNumberError(""); // Clear any previous error

    // Validate the card number using the regex pattern
    if (!cardNumberRegex.test(formattedValue)) {
      setCardNumberError(
        "Please enter a valid card number (e.g., 1234 5678 9012 3456)"
      );
    }
  };
//Name VAlidation
  const handleCardHolderNameChange = (e) => {
    const inputValue = e.target.value;

    // Regular expression to allow only characters and spaces
    const regex = /^\d{3,}$/;

    // Check if the input matches the regex and the first letter is capitalized
    if (!regex.test(inputValue) || !/^[A-Z]/.test(inputValue)) {
      setCardHolderNameError(
        "Please enter a valid name with the first letter capitalized"
      );
      return;
    }

    setCardHolderName(inputValue);
    setCardHolderNameError(""); // Clear any previous error
  };

  //CV VALIDATION
  const handleCvChange = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue,"jh")

    if (inputValue.length < 3) {
      setCvError("CV number must be at least 3 digits");
    } else {
      
      setCvError(""); // Clear any previous error
    }
    setcv(inputValue);
  };


  const handleOpenFirstDialog = () => {
    // Validate input fields before opening the dialog
    if (!cardHolderName) {
      setCardHolderNameError("Please fill this field");
      return;
    }
    if (!cardNumber) {
      setCardNumberError("Please fill this field");
      return;
    }
    if (!cv) {
      setCvError("Please fill this field");
      return;
    }
    if (!date) {
      setDateError("Please fill this field");
      return;
    }

    // If all fields are filled, open the dialog
    setOpenFirstDialog(true);
  };

  const handleCloseFirstDialog = () => {
    setOpenFirstDialog(false);
  };

  const handleOpenSecondDialog = () => {
    setOpenSecondDialog(true);
  };

  const handleCloseSecondDialog = () => {
    setOpenSecondDialog(false);
  };

  const formatDate = (date) => {
    if (date) {
      // Convert the date object to a Day.js object and then format it
      const dayjsDate = dayjs(date);
      return dayjsDate.format("MM/YY");
    }
    return "Select a date";
  };

  return (
    <>
      <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
        <div className="leftside">
          <img src={image} alt="" />
        </div>
        <div className="rightside">
          <TextField
            id="outlined-basic"
            label="CARD HOLDER NAME"
            variant="outlined"
            placeholder="E.g. Jane Appselled"
            style={{ width: "30vw" }}
            value={cardHolderName}
            onChange={handleCardHolderNameChange}
            autoFocus
            required
            error={!!cardHolderNameError} // Set error state
            helperText={cardHolderNameError}
          />

          <TextField
            id="outlined-basic"
            label="CARD NUMBER"
            variant="outlined"
            placeholder="E.g. 1234 4567 8901 2345"
            style={{ width: "30vw" }}
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
            error={!!cardNumberError}
            helperText={cardNumberError}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker", "DatePicker", "DatePicker"]}
              >
                <DatePicker
                  label={"EXP DATE"}
                  views={["month", "year"]}
                  value={date}
                  onChange={(newDate) => {
                    setdate(newDate);
                    setDateError("");
                  }}
                  inputFormat="MM/yyyy"
                  sx={{ width: "18.5vw " }}
                  error={!!dateError}
                  helperText={dateError}
                />
              </DemoContainer>
            </LocalizationProvider>
            <TextField
              id="outlined-basic"
              label="CV NUMBER"
              variant="outlined"
              placeholder="E.g 123"
              value={cv}
              onChange={handleCvChange} // Use the custom handler
              style={{ width: "10vw", marginTop: "8px" }}
              required
              error={!!cvError} // Set error state
              helperText={cvError}
            />
          </div>
          <Button
            variant="contained"
            style={{ width: "30vw", backgroundColor: "black" }}
            size="large"
            onClick={handleOpenFirstDialog}
          >
            Confirm
          </Button>

          {/* Use the first ConfirmationDialog component */}
          <ConfirmationDialog
            open={openFirstDialog}
            onClose={handleCloseFirstDialog}
            title="FRONT SIDE OF YOUR CARD"
            content={
              <>
                <div className="frontCard">
                  <img src={cardImg} alt="" />
                  <div class="textContainer">
                    <h2 style={{ color: "white" }}>{cardNumber}</h2>
                    <div style={{ display: "flex", gap: "250px" }}>
                      <h3>{cardHolderName}</h3>
                      <h3>{formatDate(date)}</h3>
                    </div>
                  </div>
                </div>
              </>
            }
            onBacksideClick={handleOpenSecondDialog}
            backgroundColor="red"
          />

          {/* Use the second ConfirmationDialog component */}
          <ConfirmationDialog
            open={openSecondDialog}
            onClose={handleCloseSecondDialog}
            title="BACK SIDE OF YOUR CARD"
            content={
              <>
                <div className="backCard">
                  <img src={cardImg} alt="" />
                  <div class="textContainerBack">
                    <h3>{cv}</h3>
                  </div>
                </div>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Body;
