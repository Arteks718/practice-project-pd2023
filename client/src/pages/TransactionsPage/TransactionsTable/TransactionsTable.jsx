import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTransactionsThunk } from '../../../store/slices/transactionSlice';
import Spinner from '../../../components/Spinner/Spinner';
function TransactionsTable({
  isFetching,
  error,
  transactions,
  getTransactions,
}) {
  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <table>
      <caption>Transaction Table</caption>
      <thead>
        <tr>
          <th key={1}>Amount</th>
          <th key={2}>Operation Type</th>
          <th key={3}>Data</th>
        </tr>
      </thead>
      <tbody>
        {error ? <p>ERROR</p> : null}
        {isFetching ? (
          <p>Test</p>
        ) : (
          transactions.map((t) => (
            <tr key={t.id}>
              <td key={1}>{t.amount}</td>
              <td key={2}>{t.operationType}</td>
              <td key={3}>{new Date(t.createdAt).toUTCString()}</td>
            </tr>
          ))
        )}
      </tbody>
      <tfoot>
        <tr>
          <td key={1}>{transactions.reduce((accum, t) => accum + Number(t.amount), 0)}</td>
          <td key={2}></td>
          <td key={3}></td>
        </tr>
      </tfoot>
    </table>
  );
}

const mapStateToProps = ({ transactionsList }) => {
  return transactionsList;
};

const mapDispatchToProps = (dispatch) => ({
  getTransactions: () => dispatch(getTransactionsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsTable);
