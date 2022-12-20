import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faCheck,
  faCalendarDay,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  //setting calender to not show on default
  // Date State
  const [openDate, setOpenDate] = useState(false);

  // Destination State
  const [dest, setDest] = useState("");

  const [openOptions, setOpenOptions] = useState(false);

  // const default options for guests
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // const for calender to display dates user clicks on
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // const to inc or dec Number of adults, childeren or rooms
  const eventOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const nav = useNavigate();
  // const to handle the search and direct user to the search page

  const eventSearch = () => {
    nav("/hotels", { state: { dest, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listType" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Hotels</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faCheck} />
            <span>Must Do's</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi's</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              {" "}
              Who need's an excuse for a vacation?
            </h1>
            <p className="headerDesc"> Save 10% on your first booking!</p>
            <button className="headerBtn">SIGN UP/LOGIN</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />{" "}
                <input
                  type="text"
                  placeholder="Destination"
                  className="headerSearchInput"
                  onChange={(e) => setDest(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                <span
                  // onClick arrow function to change openDate to opposite so that each click will open/close the calender
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {" "}
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {/* openDate && means openDate is true */}
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {" "}
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optiontext">Adult</span>
                      <div className="counterContainer">
                        <button
                          disabled={options.adult <= 1}
                          className="optionBtn"
                          onClick={() => eventOption("adult", "dec")}
                        >
                          -
                        </button>
                        <span className="optionCounter">{options.adult}</span>
                        <button
                          className="optionBtn"
                          onClick={() => eventOption("adult", "inc")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optiontext">Children</span>
                      <div className="counterContainer">
                        <button
                          disabled={options.children <= 0}
                          className="optionBtn"
                          onClick={() => eventOption("children", "dec")}
                        >
                          -
                        </button>
                        <span className="optionCounter">
                          {options.children}
                        </span>
                        <button
                          className="optionBtn"
                          onClick={() => eventOption("children", "inc")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optiontext">Room</span>
                      <div className="counterContainer">
                        <button
                          disabled={options.room <= 1}
                          className="optionBtn"
                          onClick={() => eventOption("room", "dec")}
                        >
                          -
                        </button>
                        <span className="optionCounter">{options.room}</span>
                        <button
                          className="optionBtn"
                          onClick={() => eventOption("room", "inc")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtnAlt" onClick={eventSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
