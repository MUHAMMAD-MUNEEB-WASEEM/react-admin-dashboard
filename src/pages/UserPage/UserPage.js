import React from 'react'
import './UserPage.css'

//material ui
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";

function UserPage() {
    return (
        <div className="userPage">
            
            <div className="userTitle__container">
                <h1 className="user__title">Edit User</h1>
                <button className="user__button">Create</button>
            </div>

            <div className="userContainer">

                <div className="userContainer__show">

                    <div className="userShow__top">
                        
                        <img className="userShowTop__img" src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                        <div className="userShowTop__title">
                            <span className="userShowTitle__username">Julie</span>
                            <span className="userShowTitle__title">Electrical Engineer</span>
                        </div>

                    </div>

                    <div className="userShow__bottom">
                       
                       <span className="userShowBottom__title">Account Details</span>
                       
                        <div className="userShowBottom__info">
                            <PermIdentity className="userShow__icon" />
                            <span className="userShowBottomInfo__title">Juliann99</span>
                        </div>

                        <div className="userShowBottom__info">
                            <CalendarToday className="userShow__icon" />
                            <span className="userShowBottomInfo__title">10.12.1999</span>
                        </div>

                        <span className="userShowBottom__title">Contact Details</span>

                        <div className="userShowBottom__info">
                            <PhoneAndroid className="userShow__icon" />
                            <span className="userShowBottomInfo__title">+1 193 1343 40</span>
                        </div>
                        <div className="userShowBottom__info">
                            <MailOutline className="userShow__icon" />
                            <span className="userShowBottomInfo__title">Julia99@gmail.com</span>
                        </div>
                        <div className="userShowBottom__info">
                            <LocationSearching className="userShow__icon" />
                            <span className="userShowBottomInfo__title">New York | USA</span>
                        </div>
                       
                    </div>
                </div>

                <div className="userContainer__update">

                </div>
            </div>
        </div>
    )
}

export default UserPage
