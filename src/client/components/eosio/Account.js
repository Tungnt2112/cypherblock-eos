import React from 'react';

// import MarketInfo from './MarketInfo';
import AccountInfo from './AccountInfo';
import Wallet from './Wallet';
import SmartContract from './SmartContract';
import ErrorBoundary from '../ErrorBoundary';
import ActionsCard from './ActionsCard';

const Account = ({match}) => {
  return (
    <article className="content dashboard-page">
      <section className="section">
        <div className="row m-0">
          <div className="col col-12 col-sm-12 col-md-12 col-l-7 col-xl-8 stats-col pd-col">
            <div className="card sameheight-item stats mbc p-1" data-exclude="xs">
              <ErrorBoundary>
                <AccountInfo account_name={match.params.account_name} />
              </ErrorBoundary>
            </div>
            <Wallet account_name={match.params.account_name} display="d-xl-none" />
            <ErrorBoundary>
              <ActionsCard
                account_name={match.params.account_name}
                notifyOnNetworkStatusChange={false}
                showRefetch={true}
                isLive={false}
              />
            </ErrorBoundary>
          </div>
          <div className={`col col-12 col-sm-12 col-md-12 col-l-5 col-xl-4 history-col pd-col`}>
            <Wallet account_name={match.params.account_name} display="d-none d-xl-block" />
          </div>

          {/* <Wallet data={data} /> */}
          {/* <MarketInfo
              cmc={cmc}
              eosioramfee={eosioramfee}
              eosioram={eosioram}
              global_data={global_data}
              table_rows={table_rows}
            /> */}
        </div>
      </section>
    </article>
  );
};

export default Account;
