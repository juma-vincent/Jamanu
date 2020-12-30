import React from "react";
import MenuItem from "../menuItem/menuItem";
import "./home-directory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHomeDirectoryCategories } from "../../redux/home-directory/home-directory.selectors";


const HomeDirectory = ({ categories }) => {
  return (
    <div className="home-directory">
      {categories.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectHomeDirectoryCategories,
});

export default connect(mapStateToProps)(HomeDirectory);
