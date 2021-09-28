import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  // console.log(items);

  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>

      <tbody className="box">
        {items.map(({ amount, currency, type, id }) => {
          return (
            <tr className={s.st} key={id}>
              <td className={s.item}>{type}</td>
              <td className={s.item}>{amount}</td>
              <td className={s.item}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
