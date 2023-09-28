import React,{useState} from 'react'
import './body.css'
import image from '../assets/Rectangle 1.png'
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import ConfirmationDialog from './Confirm';
import cardImg from '../assets/Frame 2.png'
import format from "date-fns/format";
import { isDate } from "date-fns";
import dayjs from "dayjs";


const Body = () => {
  const [openFirstDialog, setOpenFirstDialog] = useState(false);
  const [openSecondDialog, setOpenSecondDialog] = useState(false);
  const [cardHolderName, setCardHolderName] = useState(""); 
  const [cardNumber, setCardNumber] = useState(""); 
  const [cv, setcv] = useState('')
  const [date, setdate] = useState('')

  const handleOpenFirstDialog = () => {
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
            value={cardHolderName} // Bind the card holder name value to the state
            onChange={(e) => setCardHolderName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="CARD NUMBER"
            variant="outlined"
            placeholder="E.g. 1234 4567 8901 2345"
            style={{ width: "30vw" }}
            value={cardNumber} // Bind the card number value to the state
            onChange={(e) => setCardNumber(e.target.value)}
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
                  onChange={(newDate) => setdate(newDate)}
                  inputFormat="MM/yyyy"
                  sx={{ width: "18.5vw " }}
                />
              </DemoContainer>
            </LocalizationProvider>
            <TextField
              id="outlined-basic"
              label="CV NUMBER"
              variant="outlined"
              placeholder="E.g 123"
              value={cv}
              onChange={(e) => setcv(e.target.value)}
              style={{ width: "10vw", marginTop: "8px" }}
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
}

export default Body