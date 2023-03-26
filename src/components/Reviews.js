import React from "react";
import fivestars from "../../src/images/five-stars.png";

function Review({ review }) {
  return (
    <div className="review-container">
      <p>
        Rating:{" "}
        <img className="stars" src={fivestars} alt="review rating: 5 stars" />
      </p>
      <p>{review.text}</p>
      <p>- {review.reviewer}</p>
      <hr />
    </div>
  );
}

export default function Reviews() {
  const reviews = [
    {
      text: "Great experience!!! We ordered Octopus Salad, Short Rib dish, Snapper with delicate lemon sauce, everything was amazing, traditional flavors of Italian cuisine in a very cozy and familiar restaurant, spectacular desserts ALL made at home, the service and the atmosphere make definitely make it La Perla Di Pompano!! Thanks to the Chef Manuela and the waiter Gianni for the excellent service.",
      reviewer: "Oscar O.",
      rating: 4.5,
      date: " Feb. 2023",
    },
    {
      text: "Went to La Perla di Pompano last night for the first time and loved it! It offers amazing traditional Sicilian homemade pasta. I had the lobster stuffed ravioli with spinach & shrimp with marinara sauce. It was cooked perfectly, pasta done just right with melt in your mouth filling. And don't get me started on the fresh made daily dessert cart! The setting is lovely reminded me of my last trip to Siciliy and impeccable service. Bravo to chef Manuela and her front of the house team..👏👏 I highly recommend it..❤️❤️",
      reviewer: "Chantal V.",
      rating: 5,
      date: "Dec. 2022",
    },
    {
      text: "Had an amazing dinner here last night. Started with a nice Chianti and they brought homemade bruschetta and a nice bread basket.  Dinner and service blew me away.  Delicious home made Tagliatelle with Calamari, Shrimp and Seafood.  Just when I thought the food couldn't be any better, I took a bite of the Veal Piccata.  That was truly the best veal dish I've ever had.  It was so tender and the perfect amount of lemon, butter sauce and capers.  Came with perfectly cooked spinach and potatoes. The entire experience was amazing.  Can't wait to return.",
      reviewer: "A.L. Harris",
      rating: 5,
      date: "Oct. 2022",
    },
    {
      text: "Great service and food. Got a nice bottle of wine that was recommended by the server. Fresh bruschetta brought to the table along with fresh bread. Ordered soup, salad, veal Marsala and Bolognese. Finished the night with a cannoli.",
      reviewer: "Erik S.",
      rating: 5,
      date: "April 2022",
    },
    {
      text: "By far the best Italian restaurant  around..I had the meatball with ricotta cheese and the veal saltibucca that was so great just used a fork to cut..home made break..bill and the owner is so great..more restaurants should have this kind of service and food..love this place will return",
      reviewer: "Shad M.",
      rating: 5,
      date: "Nov. 2022",
    },
    {
      text: "No other Italian restaurant will ever compare.  AUTHENTIC! The service was impeccable, yet comfortable. Wine selection was awesome. Home made bread and desserts.  Holy Cannoli! Our Italian server was very knowledgeable. So many southern regional options.  Lobster ravioli,  chicken with an amazing sauce Florentine.  Our kids were with us and asked for a few things not mentioned on the menu and the waiter made them feel so special by giving them exactly what they wanted. Even slicing and serving their chocolate cake for them at the table.  We almost passed the place up, it's so tiny, but how lucky we were to find it. Coming from Cleveland very close to  Little Italy,  I don't think I will ever find anything close to home like this place. We had no reservation but the owner quickly came and set up a table for 5 of us. We could tell his restaurant is his pride and joy",
      reviewer: "Mandi B.",
      rating: 5,
      date: "Oct 2022",
    },
    {
      text: "Wonderful dinner with great friends. Lovely atmosphere,  great menu, terrific service from our humorous waiter! Good bottle of wine, calamari w shrimp and octopus appetizers. We had chicken and eggplant parm, a veal dish, a short rib dish and a pasta dish. Coffee and Tirimisu  to end a lovely evening",
      reviewer: "Nancy K.",
      rating: 5,
      date: "March 2022",
    },
    {
      text: "One of the best Italian restaurants in a town with many good ones. Very authenic and fresh with reasonable prices. Deserts are homemade and delicious. The staff is very personable and friendly.",
      reviewer: "Dan J.",
      rating: 5,
      date: "Dec 2022",
    },
    {
      text: "We went to La Perla for the first time and we were very impressed. The food superb, so was the service and the ambience. We will be back . Highly recommend, very authentic Italian food, definitely not your American Italian fare.",
      reviewer: "Sibylle K.",
      rating: 5,
      date: "Feb 2023",
    },
    {
      text: "Amazing food and outstanding customer service. Beautiful resta for a romantic night or just a family dinner. The food is amazing and the variety of wines is great. Will definitely recommend 100%",
      reviewer: "Jessica G.",
      rating: 5,
      date: "March 2023",
    },
  ];

  return (
    <>
      <h1>What our customers say...</h1>
      <hr />
      <div>
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
      <div className="review-bottom"></div>
    </>
  );
}
