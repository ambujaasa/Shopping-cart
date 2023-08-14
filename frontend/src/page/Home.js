import { useRef } from "react";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import AllProduct from "../component/AllProduct";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);

  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetables",
    []
  );

  /* const [setDataFilter] = useState([]);*/

  /*console.log(homeProductCartListVegetables);*/

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className=" md:flex gap-4 py-2">
        <div className=" md:w-1/2 ">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://static.thenounproject.com/png/4303174-200.png"
              className="h-7"
              alt={"homeimage"}
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The fasted delivery in
            <span className="text-red-700"> your Home</span>
          </h2>
          <p className="py-3 text-base">
            Online Grocery Market is a form of ecommerce that allows consumers
            to directly buy fresh food staffs or produce from a seller over the
            internet. An online grocery shop evokes the physical analogy of
            buying produce like it is done in a local market. An important
            advantage of online grocery shopping is that the total cost of your
            shopping cart is always displayed.
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center overflow-scroll scrollbar-none">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArrayFeature.map((el, index, loading) => (
                <HomeCard loading="Loading..." key={index + loading} />
              ))}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className=" ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className=" bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className=" bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>

        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all "
          ref={slideProductRef}
        >
          {homeProductCartList[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <CardFeature key={index} loading={"Loading..."} />;
              })}
        </div>
      </div>
      <AllProduct heading={"Your Product"} />
    </div>
  );
};

export default Home;
