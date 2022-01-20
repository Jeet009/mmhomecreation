import TopBannerComponent from "../components/TopBannerComponent";

function About() {
  return (
    <div className="extraMargin">
      <TopBannerComponent
        data={{
          h2: "About Us",
          imgUrl:
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        }}
      />
    </div>
  );
}

export default About;
