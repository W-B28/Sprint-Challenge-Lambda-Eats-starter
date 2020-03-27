import React from "react";

function Home(props) {
  // const routeToShop = event => {
  //   props.history.push("/item-list");
  // };

  // console.log(routeToShop);

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
        alt="Picture of Pizza"
      />

    </div>
  );
}
 // onClick={routeToShop}
export default Home;
