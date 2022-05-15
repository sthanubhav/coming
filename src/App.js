import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";

const App = () => {
  const [days, setDays] = useState(10);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const countdown = () => {
      const endDate = new Date("December 25, 2022 00:00:00").getTime();
      const today = new Date().getTime();

      const timeDiff = endDate - today;

      const seconds = 1000;
      const minutes = seconds * 60;
      const hours = minutes * 60;
      const days = hours * 24;

      let timeDays = Math.floor(timeDiff / days);
      let timeHours = Math.floor((timeDiff % days) / hours);
      let timeMinutes = Math.floor((timeDiff % hours) / minutes);
      let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

      timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
      timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
      timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

      setDays(timeDays);
      setHours(timeHours);
      setMinutes(timeMinutes);
      setSeconds(timeSeconds);
      setIsLoading(false);
    };

    setInterval(countdown, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="area">
          <div className="context">
            <h1>Coming Soon!!</h1>
            <h2>Website in under Development. Please wait patiently.</h2>
            <div className="countdown">
              <article>
                <p>{days}</p>
                <h3>Days</h3>
              </article>
              <article>
                <p>{hours}</p>
                <h3>Hours</h3>
              </article>
              <article>
                <p>{minutes}</p>
                <h3>Minutes</h3>
              </article>
              <article>
                <p>{seconds}</p>
                <h3>Seconds</h3>
              </article>
            </div>
            <div className="social">
              <SocialIcon
                href="#"
                title="Facebook"
                network="facebook"
                bgColor="#ffffff"
              />
              <SocialIcon
                href="#"
                title="Instagram"
                network="instagram"
                bgColor="#ffffff"
              />
              <SocialIcon
                href="#"
                title="Twitter"
                network="twitter"
                bgColor="#ffffff"
              />
            </div>
          </div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default App;
