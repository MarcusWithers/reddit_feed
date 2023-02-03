import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RedditLogo from "../images/reddit-logo.png";

type Props = {
  articleData: [];
};

export default function Article({ articleData }: Props) {
  return (
    <Link href={"https://reddit.com" + articleData.permalink} target="_blank">
      <article className="flex items-center p-5 my-5 space-x-2 border border-white rounded-md relative">
        {articleData.thumbnail.includes("https") ? (
          <motion.img
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            src={articleData.thumbnail}
            width="300"
            height="300"
            className="object-cover min-h-[300px] min-w-[300px]"
          />
        ) : (
          <motion.img
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            src={RedditLogo.src}
            width="300"
            height="300"
            className="min-w-[300px] min-h-[300px]"
          />
        )}

        <div className="space-y-5 ">
          <h3 className="hover:bg-red-500 text-2xl inline">
            {articleData.title}
          </h3>
          <span className="flex">
            {" "}
            <ArrowUpIcon className="h-6 w-6 text-red-500 mr-1" />{" "}
            <p>Upvotes - {articleData.ups}</p>
          </span>
          <p className="mt-auto">{articleData.subreddit_name_prefixed}</p>
        </div>
      </article>
    </Link>
  );
}
