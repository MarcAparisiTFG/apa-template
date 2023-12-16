import Image from "next/image";
import NavBar from "./NavBar/page";
import Content from "./Content/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <NavBar></NavBar>
      <Content></Content>
      <Footer></Footer>
    </main>
  );
}
