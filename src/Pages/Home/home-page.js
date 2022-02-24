/* eslint-disable react-hooks/exhaustive-deps */

import Navbar from "../../components/navbar/navbar";
import "../../styles/home-page-styles.css";
import WelcomeText from "../../components/welcome-text-home/welcome-text";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <WelcomeText />
    </>
  );
}
