import React, {Component} from 'react';
import {Query} from 'react-apollo';
import {CSSTransitionGroup} from 'react-transition-group';
import {ToastContainer, toast} from 'react-toastify';
import GetTransaction from '../../queries/GetTransaction';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Action from './Action';
import {convertUTCDateToLocalDate, renderBlockLink} from '../utils/Tools';
import {formatBandUnits, formatCPUUnits} from '../utils/FormatUnits';
import {renderBlockNum} from '../utils/RenderColors';
var action_digests_tmp = '';
import BlockConfirmation from './BlockConfirmation';

class Transaction extends Component {
  notify = () =>
    toast.error('Not found!', {
      position: toast.POSITION.TOP_RIGHT
    });
  render() {
    this.action_digests_tmp = '';
    return (
      <Query
        query={GetTransaction}
        variables={{
          id: this.props.id
        }}
      >
        {({loading, error, data}) => {
          if (loading)
            return (
              <section className="section">
                <div className="text-center">
                  <FontAwesomeIcon icon="spinner" spin className="text-info" />
                </div>
              </section>
              //   );
            );
          if (error)
            return (
              <section className="section">
                <div className="text-center">
                  <FontAwesomeIcon icon="spinner" spin className="text-info" />
                </div>
              </section>
            );
          const {transaction, chain} = data;
          if (transaction && chain) {
            this.action_digests_tmp = '';
            return (
              <div>
                <div className="card-block ">
                  <div className="row row-sm stats-container m-0">
                    <div className="col-12 col-sm-12 stat-col pr-1 pl-1">
                      <div className="stat-icon">
                        <FontAwesomeIcon icon="table" />
                      </div>
                      <div className="stat">
                        <div className="value ftz-11">{transaction.id}</div>
                        <div className="name">Transaction ID</div>
                      </div>
                      <div className="progress stat-progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: `0%`
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-12 col-sm-4 stat-col pr-1 pl-1">
                      {/* Block time */}
                      {/* <div className="stat-icon">
                          <FontAwesomeIcon icon="dollar-sign" />
                        </div> */}
                      <div className="row m-0">
                        <div className="col-6 col-sm-12 col-md-6 p-1">
                          <div className="stat">
                            <div className="value ftz-11">{renderBlockLink(transaction.block_num)}</div>
                            <div className="name">Block num</div>
                          </div>
                          <div className="progress stat-progress">
                            <div
                              className="progress-bar"
                              style={{
                                width: `0%`
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-6 col-sm-12 col-md-6 p-1">
                          <div className="stat">
                            <div className="value ftz-11">
                              {convertUTCDateToLocalDate(new Date(transaction.block_time)).toLocaleString()}
                            </div>
                            <div className="name">Block time</div>
                          </div>
                          <div className="progress stat-progress">
                            <div
                              className="progress-bar"
                              style={{
                                width: `0%`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Status */}
                      <div className="row m-0">
                        <div className="col-6 col-sm-12 col-md-6 p-1">
                          {/* <div className="stat-icon">
                              <FontAwesomeIcon icon="dollar-sign" />
                            </div> */}
                          <div className="stat">
                            <div className="value ftz-11">{transaction.trx.receipt.status}</div>
                            <div className="name">Transaction status</div>
                          </div>
                          <div className="progress stat-progress">
                            <div
                              className="progress-bar"
                              style={{
                                width: `0%`
                              }}
                            />
                          </div>
                        </div>
                        {/* Irriversible */}
                        <div className="col-6 col-sm-12 col-md-6 p-1">
                          {/* <div className="stat-icon">
                              <FontAwesomeIcon icon="dollar-sign" />
                            </div> */}
                          <div className="stat">
                            <div className="value ftz-11">
                              <BlockConfirmation block_num={transaction.block_num} />
                            </div>
                            <div className="name">Block status</div>
                          </div>
                          <div className="progress stat-progress">
                            <div
                              className="progress-bar"
                              style={{
                                width: `0%`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Status */}
                      <div className="row m-0">
                        <div className="col-6 col-sm-12 col-md-6 p-1">
                          {/* <div className="stat-icon">
                              <FontAwesomeIcon icon="dollar-sign" />
                            </div> */}
                          <div className="stat">
                            <div className="value ftz-11">
                              {formatCPUUnits(Number(transaction.trx.receipt.cpu_usage_us))}
                            </div>
                            <div className="name">CPU usage</div>
                          </div>
                          <div className="progress stat-progress">
                            <div
                              className="progress-bar"
                              style={{
                                width: `0%`
                              }}
                            />
                          </div>
                        </div>
                        {/* Irriversible */}
                        <div className="col-6 col-sm-12 col-md-6 p-1">
                          {/* <div className="stat-icon">
                              <FontAwesomeIcon icon="dollar-sign" />
                            </div> */}
                          <div className="stat">
                            <div className="value ftz-11">
                              {formatBandUnits(Number(transaction.trx.receipt.net_usage_words))}
                            </div>
                            <div className="name">Net usage</div>
                          </div>
                          <div className="progress stat-progress">
                            <div
                              className="progress-bar"
                              style={{
                                width: `0%`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-8  pr-0 pl-1">
                      <div className="card sameheight-item mb-0" data-exclude="xs">
                        <div className="card-header card-header-sm bg-light shadow-sm row m-0">
                          <div className="header-block pl-2 col">
                            <FontAwesomeIcon icon="tasks" className="mr-2 text-info" />
                            <h5 className="title text-info ftz-12">Actions</h5>
                          </div>
                        </div>
                        <div className="card-block pt-0">
                          <div className="no-more-tables">
                            <table className="table actions_font tablayout mb-0">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Time</th>
                                  <th>Type</th>
                                  <th>Info</th>
                                </tr>
                              </thead>
                              <CSSTransitionGroup
                                component="tbody"
                                transitionName="example"
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={300}
                              >
                                {transaction.traces
                                  .slice()
                                  .reverse()
                                  .map((trace) => {
                                    if (trace.receipt.act_digest !== this.action_digests_tmp) {
                                      this.action_digests_tmp = trace.receipt.act_digest;

                                      return (
                                        <Action
                                          key={trace.receipt.global_sequence}
                                          action_trace={trace}
                                          block_time={transaction.block_time}
                                          block_num={transaction.block_num}
                                          last_irreversible_block={transaction.last_irreversible_block}
                                          head_block_num={chain.head_block_num}
                                          get_block_status={true}
                                          trx_id={transaction.id}
                                          /* account_name={this.props.account_name} */
                                        />
                                      );
                                    }
                                    return null;
                                  })}
                              </CSSTransitionGroup>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            this.notify();
            return <ToastContainer autoClose={2000} />;
          }
        }}
      </Query>
    );
  }
}

export default Transaction;