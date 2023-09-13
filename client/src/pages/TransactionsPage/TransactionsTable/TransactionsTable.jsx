import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, differenceInDays } from 'date-fns';
import { bindActionCreators } from 'redux';
import {
  getTransactions,
  
} from '../../../store/slices/transactionSlice';
import Spinner from '../../../components/Spinner/Spinner';
import styles from './TransactionsTable.module.sass';
import CONSTANTS from '../../../constants';

function TransactionsTable() {
  const {
    transactionsList: { isFetching, error, transactions },
    userStore: {
      data: { firstName, lastName, role },
    },
  } = useSelector(({ transactionsList, userStore }) => ({
    transactionsList,
    userStore,
  }));

  const dispatch = useDispatch();
  const { getTransactionsList } = bindActionCreators(
    {
      getTransactionsList: getTransactions,
    },
    dispatch,
  );

  useEffect(() => {
    getTransactionsList();
  }, []);
  const totalSum = transactions.reduce(
    (accum, t) => accum + Number(t.amount),
    0,
  );

  const difDaysFromLastContest = differenceInDays(
    new Date(),
    new Date(transactions[transactions.length - 1]?.createdAt),
  );

  const isSpecOfferAct =
    role === CONSTANTS.CUSTOMER &&
    totalSum >= 300 &&
    difDaysFromLastContest < 3;

  return (
    <>
      {error && <div>ERROR!!!</div>}
      {isFetching && <Spinner />}
      {!isFetching && !error && !transactions.length && (
        <div>List of transactions i empty</div>
      )}
      {!isFetching && !error && transactions.length && (
        <div>
          <div className={styles.container}>
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
                    <td key={2}>
                      {format(new Date(t.createdAt), 'd.MM.yyyy')}
                    </td>
                    <td key={3}>
                      <span
                        className={
                          t.operationType === 'EXPENSE'
                            ? styles.expense
                            : styles.income
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
          {isSpecOfferAct && (
            <div className={styles.discount}>
              <div>
                {firstName} {lastName}, congratulations, create the next contest
                within 3 days with a 5% discount
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default TransactionsTable;
