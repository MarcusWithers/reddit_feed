import Article from "@/components/Article";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("all");

  const handleInputChange = (event) => {
    event = event.target.value;
    console.log(event);
    if (event != "") {
      setSubreddit(event);
    } else {
      setSubreddit("");
    }
  };

  useEffect(() => {
    if (subreddit != "") {
      fetch("https://www.reddit.com/r/" + subreddit + ".json").then(
        (response) => {
          if (response.status != 200) {
            console.log("Error, fetch didn't work");
            return;
          }
          response.json().then((data) => {
            if (data != null) {
              setArticles(data.data.children);
              // console.log(data); // data object
              // console.log(subreddit); // input value
            }
          });
        }
      );
    }
  }, [subreddit]);

  return (
    <>
      <Head>
        <title>Reddit Feed</title>
      </Head>
      <div className="bg-[rgb(36,36,36)] h-[100%] text-white px-10 ">
        <Header input={subreddit} handleInputChange={handleInputChange} />
        <section id="article" className="max-w-7xl mx-auto ">
          {articles != null
            ? articles.map((article, index) => (
                <Article key={index} articleData={article.data} />
              ))
            : ""}
        </section>
      </div>
    </>
  );
}
