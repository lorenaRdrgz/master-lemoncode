import React from "react";
import {getTotalScore} from "./averageService";
import classes from "./totalScoreComponent.scss"

export const TotalScoreComponent = () => {
  const [totalScore, setTotalScore] = React.useState(0);

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30];
    setTotalScore(getTotalScore(scores));
  }, []);

  return (
    <div className={classes.resultBackground}>
      <span>Students total score: {totalScore}</span>
    </div>
  );
};
