import HomePageHeader from "./HomePageHeader";

export default function SeatBooking() {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "I", "J", "K"];
    const seatsPerRow = 10;
    const renderSeats = () => {
      return rows.map((row) => (
        <div key={row}>
          {Array.from({ length: seatsPerRow }, (_, index) => {
            const seat = `${row}${index + 1}`;
            return <div key={seat}>{seat}</div>;
          })}
        </div>
      ));
    };
    return (
      <div>
        <HomePageHeader />
        <div>SCREEN</div>
        <div>{renderSeats()}</div>
      </div>
    );
  }