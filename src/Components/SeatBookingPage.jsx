import HomePageHeader from "./HomePageHeader";
import styles from "./seatbookingpage.module.css";

export default function SeatBooking() {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const seatsPerRow = 10;

  const renderSeats = () => {
    return rows.map((row) => (
      <div key={row} className={styles.row}>
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
      <div className={styles.container}>
        <div className={styles.screen}>SCREEN</div>
        <div className={styles.seats}>{renderSeats()}</div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={`${styles.seat} ${styles.available}`}></div>
            <span>Available</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.seat} ${styles.selected}`}></div>
            <span>Selected</span>
          </div>
          <div className={styles.legendItem}>
            <div></div>
            <span>Unavailable</span>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.seatInfo}>
            <span>Seat Info:</span>
            <div></div>
          </div>
          <div className={styles.total}>Total (LKR):</div>
        </div>
      </div>
    </div>
  );
}
