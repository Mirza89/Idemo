import React, { Component } from 'react';
import './nav.css';
import RB from '../Logo/RB.png';
import 'tachyons';
import Modal from 'react-modal';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

Modal.setAppElement('#root');
class Nav extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      showModal1: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal1 = this.handleOpenModal1.bind(this);
    this.handleCloseModal1 = this.handleCloseModal1.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleOpenModal1 () {
    this.setState({ showModal1: true });
  }

  handleCloseModal1 () {
    this.setState({ showModal1: false });
  }


  render(){
  return (
  <div>
      <nav className='flex justify-between bb black-10 black'>
    <img src={RB} alt='logo' className='pointer' height="80px"/>
    <p style={{fontSize: '30px'}} className='ma4 tc'>Book your room and enjoy the rooms </p>
      <div className='flex-grow pa3 flex items-center'>
    <p id="signIn" className='f6 link dib black dim mr3 mr4-ns pointer' onClick={this.handleOpenModal}>Sign In</p>
    <Modal id="ModalOne" isOpen={this.state.showModal} onRequestClose={this.handleCloseModal} >
          <SignIn />
    </Modal>
    <p className='f6 dib black bg-animate hover-bg-black no-underline pv2 ph4 br-pill ba pointer' onClick={this.handleOpenModal1}>Sign Up</p>
    <Modal id="ModalOne" isOpen={this.state.showModal1} onRequestClose={this.handleCloseModal1} >
          <SignUp />
    </Modal>
      </div>
    </nav>
  </div>

  );
  }
}

export default Nav;
