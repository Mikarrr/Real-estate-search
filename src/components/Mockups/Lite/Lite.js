import LiteFilter from "./LiteFilter";
import RealEstateList from "./RealEstateList";

const Lite = () => {
  return (
    <section className="mockupLite">
      <div className="mockupLeft"></div>
      <div className="mockupRight">
        <div className="mockupList">
          <RealEstateList />
        </div>
      </div>
    </section>
  );
};

export default Lite;
