import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowDetails from "./shows/showdetails";
import ShowSelection from "./shows/ShowSelection";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [shows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState();

  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
