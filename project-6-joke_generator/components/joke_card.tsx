"use client"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

interface JokeResponse {
    setup: string;
    punchline: string;
}


const Joke_card = () => {
    const [joke, setJoke] = useState<string>("");
    useEffect(() => {
        fetchJoke();
    }, []);
    async function fetchJoke(): Promise<void> {
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            const data: JokeResponse = await response.json();
            setJoke(`${data.setup} - ${data.punchline}`);
        }
        catch (err) {
            console.error("Error Fetching jokes:", err);
            setJoke("Failed tofetch joke, please try again.");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#ffa500] to-[#ff6b6b] p-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
            <h1 className="text-3xl font-bold mb-4 text-[#333]">😂 Random Joke 👈</h1>
            <div className="bg-[#f5f5f5] rounded-lg p-6 mb-6 text-[#555] text-lg">
              {joke || "Loading..."}
            </div>
            <Button
              onClick={fetchJoke}
              className="bg-[#4caf50] hover:bg-[#43a047] cursor-pointer text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
               Get New Joke 😂
            </Button>
          </div>
        </div>
      );
}

export default Joke_card