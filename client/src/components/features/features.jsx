import React from "react";
import { ReactComponent as TruckIcon } from "../../assets/icons/truck.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/locked.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as TrophyIcon } from "../../assets/icons/trophy.svg";
import { ReactComponent as HouseIcon } from "../../assets/icons/house.svg";
import "./features.scss";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature">
        <TruckIcon className="icon" />

        <div className="content">
          <h3>Instant delivery</h3>
          <p>
            We deliver your orders to your door step in less than 24 hours. We
            value your time and patience.
          </p>
        </div>
      </div>
      <div className="feature">
        <TrophyIcon className="icon" />
        <div className="content">
          <h3>Best quality farm produce</h3>
          <p>
            We take pride in offering the healthiest farm produce to all our
            customers. We thoroughly scrutinize our products beforehand to
            ensure a lasting value.
          </p>
        </div>
      </div>
      <div className="feature">
        <LockIcon className="icon" />

        <div className="content">
          <h3>Secure Payments</h3>
          <p>
            We guarantee safety of your personal data when making payments
            through an advanced payment technology.
          </p>
        </div>
      </div>
      <div className="feature">
        <LocationIcon className="icon" />
        <div className="content">
          <h3>Order from anywhere</h3>
          <p>
            No need to worry about your location, we've got you covered. Our
            delivery extends to every part of the country.
          </p>
        </div>
      </div>
      <div className="feature">
        <PhoneIcon className="icon" />
        <div className="content">
          <h3>Talk to us anytime</h3>
          <p>
            We value your calls and that's why we take time to answer instantly.
            Call us on 0712062516.
          </p>
        </div>
      </div>
      <div className="feature">
        <HouseIcon className="icon" />

        <div className="content">
          <h3>All in one roof</h3>
          <p>
            We numerous categories of farm produce in our centralized store.No
            need to look anywhere else
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
