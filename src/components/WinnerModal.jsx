import { Square } from "./Square.jsx";

export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;
  const winnerText = winner === false ? "It's a tie!" : `${winner} wins!`;
  const squareWinner =
    winner === false ? <Square>🫱🏿‍🫲🏻</Square> : <Square>{winner}</Square>;
  return (
    <>
      <section className="winner">
        <div className="text">
          <h2>{winnerText}</h2>
          <header className="win">{squareWinner}</header>

          <footer>
            <button onClick={resetGame}>Restart</button>
          </footer>
        </div>
      </section>
    </>
  );
}
