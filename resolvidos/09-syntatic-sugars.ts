function getFirstFiveRatings(ratings: string[]) {
  const existsFirstFiveRatings = ratings.length >= 5;
  if (existsFirstFiveRatings) {
    return ratings.slice(0, 5);
  } else {
    return [];
  }
}

function sumFirstFiveRatings(ratings: string[]) {
  const existsRatings = Boolean(ratings);

  if (existsRatings) {
    const firstFiveRatings = getFirstFiveRatings(ratings);

    if (!firstFiveRatings) return { error: "there must be at least 5 ratings" };

    let ratingsSum: number = 0;

    for (let i = 0; i < firstFiveRatings.length; i++) {
      ratingsSum += Number(ratings[i]);
    }

    return { ratingsSum, created_at: Number(new Date()) };
  }

  return { error: "ratings is required" };
}

const appRatings = ["5", "3", "4", "4", "5", "1", "5", "4", "4", "3"];
sumFirstFiveRatings(appRatings);
