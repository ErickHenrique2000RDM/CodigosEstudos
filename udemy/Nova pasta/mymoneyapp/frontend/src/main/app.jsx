import React from 'react'
import '../common/template/dependencies'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Messages from '../common/msg/mensages'

export default props => (
        <div className='wrapper'>
            <Header></Header>
            <SideBar></SideBar>
            <div className='content-wrapper'>
                <Routes></Routes>
            </div>
            <Footer></Footer>
            <Messages></Messages>
        </div>
    )