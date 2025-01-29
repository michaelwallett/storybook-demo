import { getMessage } from "./serverSide";

export default async function Home() {
  const { hello } = await getMessage();

  return <div>{hello}</div>;
}
