import React, { useEffect, useState } from "react";
import backgroundImage from "../images/bg-image/homeLogo.png";
import axios from "axios";
import { BASE_URL } from "../constants/constant";
import divimage from "../images/icons/1div.svg";
import Minus from "../images/icons/--.svg";
import Plus from "../images/icons/+.svg";
import Footer from "./Footer";

const Home = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  const [questions, setQuestions] = useState("hidden");
  const [question, setQuestion] = useState("");
  const [questions2, setQuestions2] = useState("hidden");
  const [question2, setQuestion2] = useState("");
  const [questions3, setQuestions3] = useState("hidden");
  const [question3, setQuestion3] = useState("");
  const [questions4, setQuestions4] = useState("hidden");
  const [question4, setQuestion4] = useState("");
  const [questions5, setQuestions5] = useState("hidden");
  const [question5, setQuestion5] = useState("");
  const [questions6, setQuestions6] = useState("hidden");
  const [question6, setQuestion6] = useState("");

  const [price, setPrice] = useState("$9.99");
  const [price2, setPrice2] = useState("$12.99");
  const [price3, setPrice3] = useState("$14.99");
  const [date, setDate] = useState("/month");

  const fetchMOvies = async () => {
    try {
      const responce = await axios.get(`${BASE_URL}movie/popular`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      });

      setMovies(responce.data.results);
    } catch (error) {
      console.error(error.massage);
    }
  };
  useEffect(() => {
    fetchMOvies();
  }, []);

  return (
    <div className="  bg-black">
      <div
        className="flex h-[550px] w-full justify-center bg-cover bg-center  "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute top-[550px] px-4 text-center text-white sm:px-8 md:px-16 lg:px-24 xl:px-32  ">
        <div className="">
          <h1 className=" mb-4 text-4xl sm:text-5xl lg:text-6xl">
            The Best Streaming Experience
          </h1>
          <p className="lg:text-2xlz mb-8 text-lg sm:text-xl">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <button className="rounded bg-red-700 px-6 py-3 text-lg font-bold text-white hover:bg-red-900">
            Start Watching Now
          </button>
        </div>
      </div>
      <div className="mt-[500px] pl-4 pr-4 sm:mt-40 sm:pl-8 sm:pr-8 md:mt-72 md:pl-16 md:pr-16 lg:mt-80 lg:pl-32 lg:pr-32">
        <h1 className="font-Manrope sm:leading-12 lg:leading-14 text-left text-2xl font-bold leading-10 tracking-normal text-white sm:text-3xl md:text-4xl lg:text-4xl">
          Explore our wide variety of categories
        </h1>
        <p className="font-Manrope text-left text-base font-normal leading-6 tracking-normal text-gray-600 sm:text-lg sm:leading-7 md:text-xl lg:text-[18px] lg:leading-8">
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new
        </p>
      </div>
      <div className="m-5 grid grid-cols-4 px-4 text-white sm:px-8 md:px-16 lg:px-24 xl:px-32 ">
        {movies.slice(0, 4).map((movie) => (
          <div key={movie.id} className="">
            <img
              className=" rounded-lg"
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              alt=""
            />
            <h2>{movie.original_title}</h2>
          </div>
        ))}
      </div>
      <div className=" pl-4 pr-4 pt-5 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32">
        <h1 className="font-Manrope sm:leading-12 lg:leading-14 text-left text-2xl font-bold leading-10 tracking-normal text-white sm:text-3xl md:text-4xl lg:text-4xl">
          We Provide you streaming experience across various devices.
        </h1>
        <p className="font-Manrope text-left text-base font-normal leading-6 tracking-normal text-gray-600 sm:text-lg sm:leading-7 md:text-xl lg:text-[18px] lg:leading-8">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>

      <div className=" grid grid-cols-1 gap-2 pl-4 pr-4 pt-5 text-white md:pl-16 md:pr-16 lg:grid-cols-2 lg:pl-32 lg:pr-32 xl:grid-cols-3  ">
        <div className=" rounded-xl border-2 border-red-500 p-11">
          <div className="flex items-center space-x-3 ">
            <img src={divimage} alt="image" />
            <h3 className="font-manrope leading-1.5 md:leading-1.75 text-left text-base font-semibold tracking-normal text-white md:text-xl lg:text-2xl">
              Smartphone
            </h3>
          </div>
          <p className=" font-manrope leading-1.5 lg:leading-1.75 mt-1 text-left text-base font-normal tracking-normal text-gray-600 md:text-lg lg:text-xl">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
        <div className=" rounded-xl border-2 border-red-500 p-11">
          <div className="flex items-center space-x-3 ">
            <img src={divimage} alt="image" />
            <h3 className="font-manrope leading-1.5 md:leading-1.75 text-left text-base font-semibold tracking-normal text-white md:text-xl lg:text-2xl">
              Smartphone
            </h3>
          </div>
          <p className=" font-manrope leading-1.5 lg:leading-1.75 mt-1 text-left text-base font-normal tracking-normal text-gray-600 md:text-lg lg:text-xl">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
        <div className=" rounded-xl border-2 border-red-500 p-11">
          <div className="flex items-center space-x-3 ">
            <img src={divimage} alt="image" />
            <h3 className="font-manrope leading-1.5 md:leading-1.75 text-left text-base font-semibold tracking-normal text-white md:text-xl lg:text-2xl">
              Smartphone
            </h3>
          </div>
          <p className=" font-manrope leading-1.5 lg:leading-1.75 mt-1 text-left text-base font-normal tracking-normal text-gray-600 md:text-lg lg:text-xl">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
        <div className=" rounded-xl border-2 border-red-500 p-11">
          <div className="flex items-center space-x-3 ">
            <img src={divimage} alt="image" />
            <h3 className="font-manrope leading-1.5 md:leading-1.75 text-left text-base font-semibold tracking-normal text-white md:text-xl lg:text-2xl">
              Smartphone
            </h3>
          </div>
          <p className=" font-manrope leading-1.5 lg:leading-1.75 mt-1 text-left text-base font-normal tracking-normal text-gray-600 md:text-lg lg:text-xl">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
        <div className=" rounded-xl border-2 border-red-500 p-11">
          <div className="flex items-center space-x-3 ">
            <img src={divimage} alt="image" />
            <h3 className="font-manrope leading-1.5 md:leading-1.75 text-left text-base font-semibold tracking-normal text-white md:text-xl lg:text-2xl">
              Smartphone
            </h3>
          </div>
          <p className=" font-manrope leading-1.5 lg:leading-1.75 mt-1 text-left text-base font-normal tracking-normal text-gray-600 md:text-lg lg:text-xl">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
        <div className=" rounded-xl border-2 border-red-500 p-11 ">
          <div className="flex items-center space-x-3 ">
            <img src={divimage} alt="image" />
            <h3 className="font-manrope leading-1.5 md:leading-1.75 text-left text-base font-semibold tracking-normal text-white md:text-xl lg:text-2xl">
              Smartphone
            </h3>
          </div>
          <p className=" font-manrope leading-1.5 lg:leading-1.75 mt-1 text-left text-base font-normal tracking-normal text-gray-600 md:text-lg lg:text-xl">
            StreamVibe is optimized for both Android and iOS smartphones.
            Download our app from the Google Play Store or the Apple App Store
          </p>
        </div>
      </div>
      <div className=" mt-7 pl-4 pr-4 pt-5 md:flex md:justify-between md:pl-16 md:pr-16 lg:pl-32 lg:pr-32">
        <div>
          <h1 className="font-Manrope sm:leading-12 lg:leading-14 text-left text-2xl font-bold leading-10 tracking-normal text-white sm:text-3xl md:text-4xl lg:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="font-Manrope text-left text-base font-normal leading-6 tracking-normal text-gray-600 sm:text-lg sm:leading-7 md:text-xl lg:text-[18px] lg:leading-8">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <div>
          <button className="mt-3 rounded bg-red-700 px-6 py-3 text-lg font-bold text-white hover:bg-red-900">
            Ask a Question
          </button>
        </div>
      </div>
      <div className="mt-20  flex grid-cols-2 flex-col gap-7 pl-4 pr-4 pt-5 md:grid md:pl-16 md:pr-16 lg:pl-32 lg:pr-32">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg  bg-[#262626] p-3">
                <h1 className="text-base font-semibold leading-6 text-white">
                  01
                </h1>
              </div>
              <h1 className="text-lg font-medium leading-normal text-white">
                What is StreamVibe?
              </h1>
            </div>
            <button
              className={`${questions}`}
              onClick={() => {
                setQuestions("hidden");
                setQuestion("");
              }}
            >
              <img src={Minus} alt="btn" />
            </button>
            <button
              className={`${question}`}
              onClick={() => {
                setQuestion("hidden");
                setQuestions("");
              }}
            >
              <img src={Plus} alt="btn" />
            </button>
          </div>
          <p
            className={`mt-2 text-sm font-normal leading-normal text-slate-600 ${questions}`}
          >
            StreamVibe is a streaming service that allows you to watch movies
            and shows on demand.
          </p>
          <span className="mt-7 block h-px w-full bg-red-700"></span>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg  bg-[#262626] p-3">
                <h1 className="text-base font-semibold leading-6 text-white">
                  02
                </h1>
              </div>
              <h1 className="text-lg font-medium leading-normal text-white">
                How much does StreamVibe cost?
              </h1>
            </div>
            <button
              className={`${questions2}`}
              onClick={() => {
                setQuestions2("hidden");
                setQuestion2("");
              }}
            >
              <img src={Minus} alt="btn" />
            </button>
            <button
              className={`${question2}`}
              onClick={() => {
                setQuestion2("hidden");
                setQuestions2("");
              }}
            >
              <img src={Plus} alt="btn" />
            </button>
          </div>
          <p
            className={` mt-2 text-sm font-normal leading-normal text-slate-600 ${questions2}`}
          >
            StreamVibe is a streaming service that allows you to watch movies
            and shows on demand.
          </p>
          <span className="mt-7 block h-px w-full bg-red-700"></span>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg  bg-[#262626] p-3">
                <h1 className="text-base font-semibold leading-6 text-white">
                  03
                </h1>
              </div>
              <h1 className="text-lg font-medium leading-normal text-white">
                What content is available on StreamVibe?
              </h1>
            </div>
            <button
              className={`${questions3}`}
              onClick={() => {
                setQuestions3("hidden");
                setQuestion3("");
              }}
            >
              <img src={Minus} alt="btn" />
            </button>
            <button
              className={`${question3}`}
              onClick={() => {
                setQuestion3("hidden");
                setQuestions3("");
              }}
            >
              <img src={Plus} alt="btn" />
            </button>
          </div>
          <p
            className={` mt-2 text-sm font-normal leading-normal text-slate-600 ${questions3}`}
          >
            StreamVibe is a streaming service that allows you to watch movies
            and shows on demand.
          </p>
          <span className="mt-7 block h-px w-full bg-red-700"></span>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg  bg-[#262626] p-3">
                <h1 className="text-base font-semibold leading-6 text-white">
                  04
                </h1>
              </div>
              <h1 className="text-lg font-medium leading-normal text-white">
                How can I watch StreamVibe?
              </h1>
            </div>
            <button
              className={`${questions4}`}
              onClick={() => {
                setQuestions4("hidden");
                setQuestion4("");
              }}
            >
              <img src={Minus} alt="btn" />
            </button>
            <button
              className={`${question4}`}
              onClick={() => {
                setQuestion4("hidden");
                setQuestions4("");
              }}
            >
              <img src={Plus} alt="btn" />
            </button>
          </div>
          <p
            className={` mt-2 text-sm font-normal leading-normal text-slate-600 ${questions4}`}
          >
            StreamVibe is a streaming service that allows you to watch movies
            and shows on demand.
          </p>
          <span className="mt-7 block h-px w-full bg-red-700"></span>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg  bg-[#262626] p-3">
                <h1 className="text-base font-semibold leading-6 text-white">
                  05
                </h1>
              </div>
              <h1 className="text-lg font-medium leading-normal text-white">
                How do I sign up for StreamVibe?
              </h1>
            </div>
            <button
              className={`${questions5}`}
              onClick={() => {
                setQuestions5("hidden");
                setQuestion5("");
              }}
            >
              <img src={Minus} alt="btn" />
            </button>
            <button
              className={`${question5}`}
              onClick={() => {
                setQuestion5("hidden");
                setQuestions5("");
              }}
            >
              <img src={Plus} alt="btn" />
            </button>
          </div>
          <p
            className={` mt-2 text-sm font-normal leading-normal text-slate-600 ${questions5}`}
          >
            StreamVibe is a streaming service that allows you to watch movies
            and shows on demand.
          </p>
          <span className="mt-7 block h-px w-full bg-red-700"></span>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg  bg-[#262626] p-3">
                <h1 className="text-base font-semibold leading-6 text-white">
                  06
                </h1>
              </div>
              <h1 className="text-lg font-medium leading-normal text-white">
                What is the StreamVibe free trial?
              </h1>
            </div>
            <button
              className={`${questions6}`}
              onClick={() => {
                setQuestions6("hidden");
                setQuestion6("");
              }}
            >
              <img src={Minus} alt="btn" />
            </button>
            <button
              className={`${question6}`}
              onClick={() => {
                setQuestion6("hidden");
                setQuestions6("");
              }}
            >
              <img src={Plus} alt="btn" />
            </button>
          </div>
          <p
            className={` mt-2 text-sm font-normal leading-normal text-slate-600 ${questions6}`}
          >
            StreamVibe is a streaming service that allows you to watch movies
            and shows on demand.
          </p>
          <span className="mt-7 block h-px w-full bg-red-700"></span>
        </div>
      </div>

      <div className="Price  mx-auto  pl-4 pr-4 pt-5 md:grid md:pl-16 md:pr-16 lg:pl-32 lg:pr-32 ">
        <div className="mb-10 items-center justify-between md:flex">
          <div>
            <h1 className="text-2xl font-bold leading-normal text-white md:text-[28px]">
              Frequently Asked Questions
            </h1>
            <p className=" text-base font-normal leading-normal text-slate-500 ">
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <div className="mt-5 flex w-48 items-center justify-between rounded-lg bg-black p-2">
            <button
              className="rounded-l bg-[#1a1a1a] px-4 py-2 font-bold text-white hover:bg-red-700"
              onClick={() => {
                setPrice("$11.99");
                setPrice2("$15.99");
                setPrice3("$17.99");
                setDate("/month");
              }}
            >
              Monthly
            </button>
            <button
              className="rounded-r bg-[#1a1a1a] px-4 py-2 font-bold text-white hover:bg-red-700"
              onClick={() => {
                setPrice("$111.1");
                setPrice2("$222.2");
                setPrice3("$333.3");
                setDate("/year");
              }}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:flex-row lg:gap-5">
          <div className="rounded-lg bg-[#1A1A1A] p-6">
            <h1 className="mb-2 text-lg font-medium leading-normal text-white">
              Basic Plan
            </h1>
            <p className="mb-7 text-sm font-normal leading-normal text-slate-600">
              Enjoy an extensive library of movies and shows, featuring a range
              of content, including recently released titles.
            </p>
            <div className="mb-7 flex items-end gap-1">
              <h1 className="text-2xl font-semibold text-white md:text-3xl lg:text-[40px]">
                {price}
              </h1>
              <span className=" text-sm font-medium text-slate-600 md:text-base lg:text-lg">
                {date}
              </span>
            </div>
            <div className="flex gap-3">
              <button className="rounded-lg bg-[#141414] px-5 py-[14px] text-sm font-semibold leading-normal text-white hover:bg-red-600 md:px-6 md:py-[16px] md:text-base lg:px-6 lg:py-[18px] lg:text-lg">
                Start Free Trial
              </button>
              <button className="rounded-lg bg-red-600 px-5 py-[14px] text-sm font-semibold leading-normal text-white hover:bg-red-400 md:px-6 md:py-[16px] md:text-base lg:px-6 lg:py-[18px] lg:text-lg">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-[#1A1A1A] p-6">
            <h1 className="mb-2 text-lg font-medium leading-normal text-white">
              Standard Plan
            </h1>
            <p className="mb-7 text-sm font-normal leading-normal text-slate-600">
              Access to a wider selection of movies and shows, including most
              new releases and exclusive content
            </p>
            <div className="mb-7 flex items-end gap-1">
              <h1 className="text-2xl font-semibold text-white md:text-3xl lg:text-[40px]">
                {price2}
              </h1>
              <span className=" text-sm font-medium text-slate-600 md:text-base lg:text-lg">
                {date}
              </span>
            </div>
            <div className="flex gap-3">
              <button className="rounded-lg bg-[#141414] px-5 py-[14px] text-sm font-semibold leading-normal text-white hover:bg-red-600 md:px-6 md:py-[16px] md:text-base lg:px-6 lg:py-[18px] lg:text-lg">
                Start Free Trial
              </button>
              <button className="rounded-lg bg-red-600 px-5 py-[14px] text-sm font-semibold leading-normal text-white hover:bg-red-400 md:px-6 md:py-[16px] md:text-base lg:px-6 lg:py-[18px] lg:text-lg">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-[#1A1A1A] p-6">
            <h1 className="mb-2 text-lg font-medium leading-normal text-white">
              Premium Plan
            </h1>
            <p className="mb-7 text-sm font-normal leading-normal text-slate-600">
              Access to a widest selection of movies and shows, including all
              new releases and Offline Viewing
            </p>
            <div className="mb-7 flex items-end gap-1">
              <h1 className="text-2xl font-semibold text-white md:text-3xl lg:text-[40px]">
                {price3}
              </h1>
              <span className=" text-sm font-medium text-slate-600 md:text-base lg:text-lg">
                {date}
              </span>
            </div>
            
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
