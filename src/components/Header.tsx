import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import RedditLogo from "../images/reddit-logo.png";

type Props = {};

export default function header({ input, change, handleInputChange }: Props) {
  return (
    <div className="w-[100] p-5 text-4xl border-b-2">
      <div className="flex justify-between">
        <motion.span
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
          className="before:content-['/r/'] flex items-center"
        >
          <form>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="input text-red-500 lowercase bg-none border-none outline-none color bg-[rgb(36,36,36)] pl-1"
            />
          </form>
          {/*<input
            type="text"
            className="input text-red-500 lowercase bg-none border-none outline-none color bg-[rgb(36,36,36)] pl-1"
            value={input}
            onChange={(e) => change(e.target.value)}
          />*/}
        </motion.span>
        <Link href="https://www.reddit.com/" target="_blank">
          <motion.img
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5 }}
            src={RedditLogo.src}
            width="75"
            height="75"
            className="min-w-[75px] min-h-[75px] animate-pulse"
          />
        </Link>
      </div>
    </div>
  );
}
