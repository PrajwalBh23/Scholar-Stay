import axios from 'axios';
import React,{useState,useEffect} from 'react';
// import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Header from './Header.js';
import './Rooms.css';
import Checkbox from '@mui/material/Checkbox';
import house from '../images/House_sample.jpg'
import map from '../images/map1.jpeg'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

function Rooms() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [roomData, setRoomData] = useState([]);

    useEffect(() => {
        // Make a GET request to fetch room data
        axios.get('http://localhost:5000/stay/rooms')
            .then(response => {
                const fetchedRooms = response.data.rooms;
                setRoomData(fetchedRooms);
            })
            .catch(error => {
                console.error('Error fetching room data from backend:', error);
            });
    }, []);

    return (
        <>
            <Header/>
            <div>
                <Box display="flex" marginTop="7%" width="100%" flexDirection="row">
                    <Typography sx={{ fontFamily: "fantasy" }} width={"25%"} >
                        <div className="filter">
                            <div className="main"><h2>Filters</h2></div>
                            <div className="contain">
                                <div className="head">Property Type</div>
                                <ul>
                                    <li><Checkbox {...label} />Single Room</li>
                                    <li><Checkbox {...label} />Shared Room</li>
                                </ul>
                            </div>
                            <div className="contain">
                                <div className="head">Available For</div>
                                <ul>
                                    <li><Checkbox {...label} />Girls</li>
                                    <li><Checkbox {...label} />Boys</li>
                                    <li><Checkbox {...label} />Prefer Not to say</li>
                                </ul>
                            </div>
                            <div className="contain">
                                <div className="head">Price</div>
                                <ul>
                                    <li><Checkbox {...label} />1000-2000</li>
                                    <li><Checkbox {...label} />2000-3000</li>
                                    <li><Checkbox {...label} />3000-5000</li>
                                    <li><Checkbox {...label} />More than 5000</li>
                                </ul>
                            </div>
                            <div className="contain">
                                <div className="head">Furniture Status</div>
                                <ul>
                                    <li><Checkbox {...label} />Un-Furnished</li>
                                    <li><Checkbox {...label} />Semi-Furnished</li>
                                    <li><Checkbox {...label} />Fully-Furnished</li>
                                </ul>
                            </div>
                            <div className="contain">
                                <div className="head">Including Bills</div>
                                <ul>
                                    <li><Checkbox {...label} />Electricity</li>
                                    <li><Checkbox {...label} />Water</li>
                                </ul>
                            </div>
                            <div className="contain">
                                <div className="head">Deposite</div>
                                <ul>
                                    <li><Checkbox {...label} />No Deposit</li>
                                    <li><Checkbox {...label} />1 Month Deposit</li>
                                    <li><Checkbox {...label} />2 Month Deposit</li>
                                    <li className='Setprop'><Checkbox {...label} />3 Month Deposit</li>
                                </ul>
                            </div>
                        </div>
                    </Typography>
                    <Typography sx={{ fontFamily: "fantasy" }} width={"75%"} variant="h2" height={'100%'}>


                        {/* 1  */}
                        {roomData.map((room, index) => (
                            <div key={index} className="result">
                            <div className="box">
                                <img src={house} alt="not showing" />
                                <div className="info">
                                    <div className="price">₹{room.price}</div>
                                    <div className="address">{room.address}</div>

                                    <div className="buttons">
                                        <button className='button2'>{room.share}-{room.sharing}</button>
                                        <button className='button2'>{room.semiFurnished}</button>
                                        <button className='button2'>{room.gender}</button>
                                    </div>
                                    <br></br>

                                    <div className="extra">2 Bedrooms with Separate Common Area & Seprate Washroom</div>

                                    {/* <br></br> */}
                                    <div className="availablity">Available Now</div>
                                    <button className='button'>{room.experience} Years Experience of Renting</button>
                                </div>
                                <div className="map">
                                    <img src={map} alt="" />
                                </div>
                            </div>
                            <div className="block">

                                <div className="owner1">

                                    <span><VerifiedRoundedIcon style={{ verticalAlign: 'text-top',marginTop:'-2px', marginRight:'2px', color:'#0073e6' }}/> </span>
                                    <span className='inner-block'>{room.name}<i style={{fontSize:'small', color:'#0073e6'}}>Owner details</i></span>

                                </div>

                                <div className="corner">
                                    <a href="/detail" className='noUnderline'>View More</a>
                                </div>
                            </div>
                        </div>
                        ))}
                        
                        
                    </Typography>
                </Box>
            </div >
        </>
    )
}

export default Rooms;