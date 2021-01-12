import React from "react";
import CategoryItem from "../category-item/category-item";
import "./categories.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCategories } from "../../redux/category-data/category-data.selectors";
import axios from 'axios'



const Categories = ({ categoryData }) => {
  return (
    <div className="categories">
      {categoryData.map(({ id, ...otherSectionProps }) => (
        <CategoryItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categoryData: selectCategories,
});

export default connect(mapStateToProps)(Categories);


