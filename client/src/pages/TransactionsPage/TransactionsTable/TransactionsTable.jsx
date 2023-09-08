import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { bindActionCreators } from 'redux';
import { getTransactions, isDiscount } from '../../../store/slices/transactionSlice';
import Spinner from '../../../components/Spinner/Spinner';
import styled from './TransactionsTable.module.sass';

function TransactionsTable() {
  const { isFetching, error, transactions } = useSelector(
    ({ transactionsList }) =>  transactionsList
  );
  const { data: { displayName } } = useSelector(({ userStore }) => userStore);

  const dispatch = useDispatch();
  const { getTransactionsList, isDisc } = bindActionCreators(
    {
      getTransactionsList: getTransactions, 
      isDisc: isDiscount 
    },
    dispatch,
  );
  useEffect(() => {
    getTransactionsList();
  }, []);

  return (
    <>
      {error && <div>ERROR!!!</div>}
      {isFetching && <Spinner />}
      {!isFetching && !error && !transactions.length && (
        <div>List of transactions i empty</div>
      )}
      {!isFetching && !error && transactions.length && (
        <div className={styled.container}>
          <table>
            <caption>Transaction Table</caption>
            <thead>
              <tr>
                <th key={1}>Amount</th>
                <th key={2}>Data</th>
                <th key={3}>Operation Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td key={1}>${t.amount}</td>
                  <td key={2}>{format(new Date(t.createdAt), 'd.MM.yyyy')}</td>
                  <td key={3}>
                    <span
                      className={
                        t.operationType === 'EXPENSE'
                          ? styled.expense
                          : styled.income
                      }
                    >
                      {t.operationType}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td key={1}>
                  Total: $
                  {transactions.reduce(
                    (accum, t) => accum + Number(t.amount),
                    0,
                  )}
                </td>
                <td key={2}></td>
                <td key={3}></td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
      <div className={styled.discount}>
        {transactions.reduce((accum, t) => accum + Number(t.amount), 0) >=
        300 ? (
          <div>
            {displayName}, congratulations, create the next contest within 3
            days with a 5% discount
          </div>
        ) : null}
      </div>
    </>
  );
}

export default TransactionsTable;
