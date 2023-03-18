import { Fragment } from "react";
import AvaliableMeals from "./AvaliableMeals";
import MealsSummary from "./MealsSummary";

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvaliableMeals />
    </Fragment>
  );
}

export default Meals;
