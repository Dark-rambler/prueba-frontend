import React from "react";
import { IJoke } from "../interfaces/jokes.interface";
import useFetch from "../utils/useFetch";
import { Select } from "@mantine/core";

const ChuckNorrisJokes: React.FC = () => {
  const { data, loading, error, refetch } = useFetch<IJoke>(
    "https://api.chucknorris.io/jokes/random"
  );

  const categories = useFetch<{
    data: string[];
  }>("https://api.chucknorris.io/jokes/categories");

  return (
    <div>
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-lg w-full text-center transform transition-all hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight">
          Chuck Norris Jokes
        </h1>
        <Select
          label="Select a category"
          placeholder="Categories"
          data={categories.data as string[]}
          onChange={(value) => {
            refetch(`https://api.chucknorris.io/jokes/random?category=${value}`);

          }}
        />
        <div className="mb-8">
          {loading ? (
            <div className="animate-pulse text-xl text-gray-500">
              Loading...
            </div>
          ) : error ? (
            <div className="text-red-500 text-xl font-semibold">
              Error fetching joke
            </div>
          ) : (
            <div className="flex flex-col items-center  ">
              <img src={data?.icon_url} alt="" className="mb-4" />
              <p className="text-xl text-gray-800 font-medium">{data?.value}</p>
            </div>
          )}
        </div>

        <button
          onClick={refetch}
          className="bg-blue-600 text-white px-8 py-4 cursor-pointer rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold shadow-md hover:shadow-lg"
        >
          Get Another Joke
        </button>
      </div>
    </div>
  );
};

export default ChuckNorrisJokes;
