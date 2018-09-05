import React, {Component} from 'react';
import isHash from 'validator/lib/isHash';
import isLowercase from 'validator/lib/isLowercase';
import {ToastContainer, toast} from 'react-toastify';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import history from './history';
import KeyAccountsModal from './eosio/KeyAccountsModal';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      open: false
    };
    this.submit = this.submit.bind(this);
    this.changeTerm = this.changeTerm.bind(this);
  }
  notify = () =>
    toast.error('Not found!', {
      position: toast.POSITION.TOP_RIGHT
    });
  changeTerm(event) {
    this.setState({term: event.target.value});
  }
  onOpenModal = () => {
    this.setState({open: true});
  };

  onCloseModal = () => {
    this.setState({open: false});
  };
  submit(event) {
    event.preventDefault();
    if (this.state.term.substring(0, 3) == 'EOS' && this.state.term.length == 53) {
      this.onOpenModal();
    } else if (isHash(this.state.term, 'sha256') && this.state.term.substring(0, 2) == '00') {
      history.push(`/block/${this.state.term}`);
    } else if (isHash(this.state.term, 'sha256') && this.state.term.length == 64) {
      history.push(`/transaction/${this.state.term}`);
    } else if (this.state.term.length <= 12 && isLowercase(this.state.term)) {
      history.push(`/account/${this.state.term}`);
    }
  }
  renderModal() {
    if (this.state.term.substring(0, 3) == 'EOS' && this.state.term.length == 53) {
      return <KeyAccountsModal public_key={this.state.term} onCloseModal={this.onCloseModal} open={this.state.open} />;
    } else return null;
  }

  render() {
    return (
      <div>
        <header className="header shadow-sm bg-light">
          <div className="header-block header-block-collapse d-lg-none d-xl-none">
            <button className="collapse-btn" id="sidebar-collapse-btn">
              <FontAwesomeIcon icon="bars" />
            </button>
          </div>
          <div className="header-block header-block-search w-100 pr-2">
            <form role="search" className="float-left w-100" onSubmit={this.submit}>
              <div className="row">
                <div className="col pr-0 pl-2">
                  <input
                    type="text"
                    placeholder="Search by ACCOUNT/PUBKEY/TX"
                    className="w-100 form-control"
                    onChange={this.changeTerm}
                    name="search"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                </div>
                <div className="col-auto pl-1 pr-3">
                  <button className="btn btn-primary text-light" type="summit">
                    <FontAwesomeIcon icon="search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </header>
        {this.renderModal()}
      </div>
    );
  }
}

export default Header;
