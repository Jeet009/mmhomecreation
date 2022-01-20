import TopBannerComponent from "../components/TopBannerComponent";

function Contact() {
  return (
    <div className="extraMargin">
      <TopBannerComponent
        data={{
          h2: "Contact Us",
          imgUrl:
            "https://images.pexels.com/photos/4559707/pexels-photo-4559707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        }}
      />
    </div>
  );
}

export default Contact;
