import ListDataSearch from "../components/ListDataSearch";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-bold">Home</h1>
        <div>
          <h6>Lists of user</h6>
          <ListDataSearch></ListDataSearch>
        </div>
      </div>
    </>
  );
}
