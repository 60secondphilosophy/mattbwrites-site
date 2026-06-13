/*
 * Air Hockey Game Page
 * Embedded game for bonus content
 */

import { Game } from "../components/Game";
import NavBar from "@/components/NavBar";

export default function AirHockey() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f0ece0" }}>
      <NavBar />

      {/* Game Container */}
      <div style={{ padding: "2rem", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "calc(100vh - 56px)" }}>
        <div style={{ width: "100%", maxWidth: "1000px" }}>
          <Game />
        </div>
      </div>
    </div>
  );
}
