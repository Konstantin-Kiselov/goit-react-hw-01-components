import PropTypes from "prop-types";

function TransactionHistory({ items }) {
  // console.log(items);

  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className="title">Type</th>
          <th className="title">Amount</th>
          <th className="title">Currency</th>
        </tr>
      </thead>

      <tbody className="box">
        {items.map(({ amount, currency, type, id }) => {
          return (
            <tr key={id}>
              <td className="item">{type}</td>
              <td className="item">{amount}</td>
              <td className="item">{currency}</td>
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
