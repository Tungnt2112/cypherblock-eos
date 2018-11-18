import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {renderAccountLink} from '../utils/Tools';
import {renderStake2Vote, renderDecayedPercent, renderDecayedPercentProxy} from '../utils/RenderColors';

const block_timestamp_epoch = 946684800000;
const seconds_per_day = 24 * 60 * 60;
let stake2vote = 0;
let nextDecayTimestamp = 0;
let nextDecayDate = null;

const NoVote = ({isDarkMode}) => {
  return (
    <div
      className={`card sameheight-item stats mbc  pb-1 shadow-sm ${isDarkMode ? 'bg-dark-1 ' : ''}`}
      style={{marginLeft: 2, marginRight: 2}}
      data-exclude="xs"
    >
      <div className="card-header card-header-sm shadow-sm bg-white ">
        <div className="header-block pl-2">
          <FontAwesomeIcon icon="gavel" className="mr-2 text-info" />
          <h1 className="title text-info">
            Voter info
            {/* <Link to={`/account/${account_name}`}>{account_name}</Link> */}
          </h1>
        </div>
      </div>
      <div className={`card-block text-danger ftz-12 ${isDarkMode ? 'bg-dark-1' : ''} `}>
        <div> No producer voted</div>
      </div>
    </div>
  );
};

class VoterInfo extends Component {
  renderVotedProducers(producers) {
    let items = [];
    producers.map((producer) => {
      items.push(
        <div className="d-inline-block mr-2 pl-1 ftz-12" key={producer}>
          {renderAccountLink(producer)}
        </div>
      );
    });
    return items;
  }
  render() {
    const {voteinfo, head_block_time, isDarkMode} = this.props;

    if (voteinfo && head_block_time) {
      const head_block_time_utc = new Date(head_block_time);
      stake2vote =
        voteinfo.staked *
        Math.pow(
          2,
          Math.floor(
            (new Date(head_block_time_utc + 'UTC').getTime() / 1000 - block_timestamp_epoch / 1000) /
              (seconds_per_day * 7)
          ) / 52
        );

      nextDecayTimestamp =
        block_timestamp_epoch +
        (Math.floor(
          (new Date(head_block_time_utc + 'UTC').getTime() / 1000 - block_timestamp_epoch / 1000) /
            (seconds_per_day * 7)
        ) +
          1) *
          (seconds_per_day * 7 * 1000);
      nextDecayDate = new Date(Number(nextDecayTimestamp)).toLocaleString();

      if (voteinfo.is_proxy == 0) {
        if (voteinfo.producers.length > 0 || voteinfo.proxy) {
          if (!voteinfo.proxy) {
            //vote normaly
            return (
              <div
                className={`card sameheight-item stats mbc  pb-1 shadow-sm ${isDarkMode ? 'bg-dark-1' : ''}`}
                style={{marginLeft: 2, marginRight: 2}}
                data-exclude="xs"
              >
                <div className="card-header card-header-sm shadow-sm bg-white ">
                  <div className="header-block pl-2">
                    <FontAwesomeIcon icon="gavel" className="mr-2 text-info" />
                    <h1 className="title text-info">
                      Voter info
                      {/* <Link to={`/account/${account_name}`}>{account_name}</Link> */}
                    </h1>
                  </div>
                </div>
                <div className="card-block row row-sm m-0 pb-0 pr-1 pl-1">
                  <div className="col-12 col-sm-12 col-md-5 pl-1 pr-1 m-0">
                    <div className="row m-0">
                      <div className="col-8 col-sm-8 col-md-8 pl-0 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="heart" />
                        </div>
                        <div className="stat">
                          <div className="value">
                            {Number(voteinfo.last_vote_weight).toLocaleString(undefined, {
                              maximumFractionDigits: 0
                            })}
                          </div>
                          <div className="name">Last vote weight</div>
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
                      <div className="col-4 col-sm-4 col-md-4 pl-0 pr-0 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="hand-holding-heart" />
                        </div>
                        <div className="stat">
                          <div className="value">{voteinfo.producers.length}</div>
                          <div className="name"> # producers</div>
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
                      <div className="col-8 col-sm-8 col-md-8 pl-0 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="sync-alt" />
                        </div>
                        <div className="stat">
                          <div className="value">
                            {renderStake2Vote(
                              stake2vote.toFixed(0),
                              Number(voteinfo.last_vote_weight).toFixed(0),
                              isDarkMode
                            )}
                          </div>
                          <div className="name">Current Stake2Vote</div>
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
                      <div className="col-4 col-sm-4 col-md-4 pl-0 pr-0 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="arrow-alt-circle-down" />
                        </div>
                        <div className="stat">
                          <div className="value">
                            {renderDecayedPercent(stake2vote, voteinfo.last_vote_weight)}
                            {/* {(((stake2vote - voteinfo.last_vote_weight) / stake2vote) * 100).toFixed(2)} % */}
                          </div>
                          <div className="name">Vote Decayed</div>
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
                      <div className="col-8 col-sm-8 col-md-8 pl-0 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="clock" />
                        </div>
                        <div className="stat">
                          <div className="value ftz-10">{nextDecayDate}</div>
                          <div className="name">Next decay time</div>
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
                  <div className="col-12 col-sm-12 col-md-7 pr-0 pl-2">
                    <div className="ftz-10 font-weight-bold border-bottom mr-2 text-info"> Producers</div>
                    <div
                      className={`card sameheight-item mb-1 border-0 ${isDarkMode ? 'bg-dark-1' : ''} `}
                      data-exclude="xs"
                    >
                      <div className="p-0"> {this.renderVotedProducers(voteinfo.producers)}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            // voted by proxy
            return (
              <div
                className={`card sameheight-item stats mbc  pb-1 shadow-sm ${isDarkMode ? 'bg-dark-1 ' : ''}`}
                style={{marginLeft: 2, marginRight: 2}}
                data-exclude="xs"
              >
                <div className="card-header card-header-sm bg-white shadow-sm ">
                  <div className="header-block pl-2">
                    <FontAwesomeIcon icon="gavel" className="mr-2 text-info" />
                    <h1 className="title text-info">
                      Voter info
                      {/* <Link to={`/account/${account_name}`}>{account_name}</Link> */}
                    </h1>
                  </div>
                </div>
                <div className="card-block row row-sm m-0 pr-1 pl-1">
                  <div className="col-12 col-sm-12 col-md-5 pl-1 pr-1 m-0">
                    <div className="row m-0">
                      <div className="col-8 col-sm-8 col-md-8 pl-0 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="heart" />
                        </div>
                        <div className="stat">
                          <div className="value">
                            {Number(voteinfo.last_vote_weight).toLocaleString(undefined, {
                              maximumFractionDigits: 0
                            })}
                          </div>
                          <div className="name">Last vote weight</div>
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
                      {/* render # vote */}
                      <div className="col-4 col-sm-4 col-md-4 pl-0 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="hand-holding-heart" />
                        </div>
                        <div className="stat">
                          <div className="value">{voteinfo.proxy_vote_info.producers.length}</div>
                          <div className="name"># producers</div>
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
                      {/* render decay */}
                      <div className="col-8 col-sm-8 col-md-8 pl-0 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="sync-alt" />
                        </div>
                        <div className="stat">
                          <div className="value">
                            {renderStake2Vote(
                              stake2vote.toFixed(0),
                              Number(voteinfo.last_vote_weight).toFixed(0),
                              isDarkMode
                            )}
                          </div>
                          <div className="name">Current Stake2Vote</div>
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
                      <div className="col-4 col-sm-4 col-md-4 pl-0 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="arrow-alt-circle-down" />
                        </div>
                        <div className="stat">
                          <div className="value">{renderDecayedPercent(stake2vote, voteinfo.last_vote_weight)}</div>
                          <div className="name">Vote decayed</div>
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
                      <div className="col-7 col-sm-8 col-md-8 pl-0 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="clock" />
                        </div>
                        <div className="stat">
                          <div className="value ftz-10">{nextDecayDate}</div>
                          <div className="name">Next decay time</div>
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
                      {/* render proxy */}
                      <div className="col-5 col-sm-4 col-md-4 pl-1 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="user-cog" />
                        </div>
                        <div className="stat">
                          <div className="value">{renderAccountLink(voteinfo.proxy)}</div>
                          <div className="name">Vote by proxy</div>
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
                  <div className="col-12 col-sm-12 col-md-7  pr-0 pl-2">
                    <div className="ftz-10 font-weight-bold border-bottom mr-2 text-info"> Producers</div>
                    <div
                      className={`card sameheight-item mb-1 border-0 ${isDarkMode ? 'bg-dark-1' : ''} `}
                      data-exclude="xs"
                    >
                      <div className="p-0"> {this.renderVotedProducers(voteinfo.proxy_vote_info.producers)}</div>
                    </div>
                  </div>
                </div>
                <div />
              </div>
            );
          }
        } else {
          return <NoVote isDarkMode={isDarkMode} />;
        }
      } else {
        /* render proxy */
        if (voteinfo.producers.length > 0 || voteinfo.proxy) {
          if (!voteinfo.proxy)
            return (
              <div
                className={`card sameheight-item stats mbc  pb-1 shadow-sm ${isDarkMode ? 'bg-dark-1 ' : ''}`}
                style={{marginLeft: 2, marginRight: 2}}
                data-exclude="xs"
              >
                <div className="card-header card-header-sm bg-white shadow-sm ">
                  <div className="header-block pl-2 pr-2">
                    <FontAwesomeIcon icon="gavel" className="mr-2 text-info" />
                    <h1 className="title text-info">
                      Voter info
                      {/* <Link to={`/account/${account_name}`}>{account_name}</Link> */}
                    </h1>
                  </div>
                  <span className="badge badge-pill badge-primary mb-2">Proxy</span>
                </div>
                <div className="card-block row row-sm m-0 pr-1 pl-1">
                  <div className="col-12 col-sm-12 col-md-5 pl-1 pr-1 m-0 stat-col">
                    <div className="row m-0">
                      <div className="col-8 col-sm-8 col-md-8 pl-0 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="heart" />
                        </div>
                        <div className="stat">
                          <div className="value ">
                            {Number(voteinfo.last_vote_weight).toLocaleString(undefined, {
                              maximumFractionDigits: 0
                            })}
                          </div>
                          <div className="name">Last vote weight</div>
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
                      <div className="col-4 col-sm-4 col-md-4 pl-0 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="hand-holding-heart" />
                        </div>
                        <div className="stat">
                          <div className="value">{voteinfo.producers.length}</div>
                          <div className="name"> #producers</div>
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
                      <div className="col-8 col-sm-8 col-md-8 pl-0 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="sync-alt" />
                        </div>
                        <div className="stat">
                          <div className="value">{renderStake2Vote(stake2vote.toFixed(0), isDarkMode)}</div>
                          <div className="name">Current Stake2Vote</div>
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
                      <div className="col-4 col-sm-4 col-md-4 pl-0 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="arrow-alt-circle-down" />
                        </div>
                        <div className="stat">
                          <div className="value">
                            {renderDecayedPercentProxy(
                              stake2vote,
                              voteinfo.last_vote_weight,
                              voteinfo.proxied_vote_weight
                            )}
                          </div>

                          <div className="name">Vote decayed</div>
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
                      <div className="col-8 col-sm-8 col-md-8 pl-0 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="clock" />
                        </div>
                        <div className="stat">
                          <div className="value ftz-10">{nextDecayDate}</div>
                          <div className="name">Next decay time</div>
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
                      <div className="col-8 col-sm-8 col-md-8 pl-0 pr-1 m-0 stat-col">
                        <div className="stat-icon d-inline-block d-md-none">
                          <FontAwesomeIcon icon="heart" />
                        </div>
                        <div className="stat">
                          <div className="value">
                            {Number(voteinfo.proxied_vote_weight).toLocaleString(undefined, {
                              maximumFractionDigits: 0
                            })}
                          </div>
                          <div className="name">Proxied vote weight</div>
                        </div>
                        <div className="progress stat-progress" />
                        <div
                          className="progress-bar"
                          style={{
                            width: `0%`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-7  pr-0 pl-2">
                    <div className="ftz-10 font-weight-bold border-bottom mr-2 text-info"> Producers</div>
                    <div
                      className={`card sameheight-item mb-1 border-0 ${isDarkMode ? 'bg-dark-1' : ''} `}
                      data-exclude="xs"
                    >
                      <div className="p-0"> {this.renderVotedProducers(voteinfo.producers)}</div>
                    </div>
                  </div>
                </div>
                <div />
              </div>
            );
          else {
            return <div />;
          }
        } else {
          return <NoVote isDarkMode={isDarkMode} />;
        }
      }
    } else {
      return <NoVote isDarkMode={isDarkMode} />;
    }
  }
}

export default VoterInfo;
