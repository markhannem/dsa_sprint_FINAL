import "./List.css";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Search from "../../components/search/Search";
import Mail from "../../components/mail/Mail";
import useFetch from "../../hooks/fetch";

const List = () => {
  const location = useLocation();
  const [openDate, setOpenDate] = useState(false);
  const [dest, setDest] = useState(location.state.dest);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${dest}&min=${min || 0}&max=${max || 1000}`
  );

  const eventClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrap">
          <div className="search">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input type="text" placeholder={dest} />
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {" "}
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="listItem">
              <label> Options</label>
              <div className="listOptionContain">
                <div className="listOption">
                  <span className="optText">
                    Min Price <small>Per Night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="optInput"
                  />
                </div>
                <div className="listOption">
                  <span className="optText">
                    Max Price <small>Per Night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="optInput"
                  />
                </div>
                <div className="listOption">
                  <span className="optText">Adult</span>
                  <input
                    type="number"
                    className="optInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="listOption">
                  <span className="optText">Children</span>
                  <input
                    type="number"
                    className="optInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="listOption">
                  <span className="optText">Room</span>
                  <input
                    type="number"
                    className="optInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button onClick={eventClick}>Search</button>
          </div>
          <div className="result">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <Search item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Mail />
    </div>
  );
};

export default List;
