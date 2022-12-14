import MiniProfile from "./FeedComponents/MiniProfile/MiniProfile";
import Posts from "./FeedComponents/Posts/Posts";
import Stories from "./FeedComponents/Stories/Stories";
import Suggestions from "./FeedComponents/Suggestions/Suggestions";

function Feed() {
  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto `}
    >
      {/*Section*/}

      <section className="col-span-2">
        {/*Stories*/}
        <Stories />

        {/*Post*/}
        <Posts />
      </section>

      {/*Section*/}

      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed top-20">
          {/*Mini Profile*/}
          <MiniProfile />

          {/*Suggestions*/}
          <Suggestions />
        </div>
      </section>
    </main>
  );
}

export default Feed;
