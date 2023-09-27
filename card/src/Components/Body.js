import React from 'react'
import './body.css'
import image from '../assets/Rectangle 1.png'
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
const Body = () => {
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
            placeholder='E.g. Jane Appselled'
            style={{ width: "30vw" }}
          />
          <TextField
            id="outlined-basic"
            label="CARD NUMBER"
            variant="outlined"
            placeholder='E.g. 1234 4567 8901 2345'
            style={{ width: "30vw" }}
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
                  sx={{ width: "18.5vw " }}
                />
              </DemoContainer>
            </LocalizationProvider>
            <TextField
              id="outlined-basic"
              label="CARD NUMBER"
              variant="outlined"
              placeholder='E.g 123'
              style={{ width: "10vw", marginTop: "8px" }}
            />
          </div>
          <Button variant="contained" style={{ width: "30vw",backgroundColor:'black' }} size='large'>
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
}

export default Body