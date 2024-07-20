import { useEffect, useState, useRef } from 'react'
import './IndEventReg.css'
import axios from 'axios'
import Navbar from '../navbar/Navbar'
import Logo from '../Logo/Logo'

function IndEventReg(){
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const [selectedEvent, setSelectedEvent] = useState("");

    const [ succMessage, setSuccMessage ] = useState("")

    const { name, id, email, phoneNumber } = user;

    const firstItemRef = useRef(null);

    const userID = id;
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 5;
    }

    const handleEventSelect = (selectedEvent) => {
        if (window.confirm("Are you sure you want to register for this event, This decision cannot be reversed")) 
            { 
                setSelectedEvent(selectedEvent);
                setSubmitted(true);
                firstItemRef.current.scrollIntoView();
            }
    }

    const [submitted, setSubmitted] = useState(false); 
    const [error, setError] = useState(false); 

    useEffect(() => {
        /*console.log('Event selected:', selectedEvent);*/
        handleSubmit();
      }, [selectedEvent]);

    const handleSubmit = async() => {

        if (selectedEvent=== "")
        {
            setError(true);
        } 
        else
        {
            setSubmitted(true);
            setError(false);
            const eventName = selectedEvent;
            handleEventSelect("");
            try
            {
                await axios.post("https://api-yixn.onrender.com/v2/submitFormSolo",{
                    name, email, phoneNumber, id, eventName
                })
                .then(res=>{
                    setSuccMessage(res.data.message);
                })
            }
            catch(e)
            {
                alert('server error')
            }
        }
    }

    const SuccessMessage = (succMessage) => {
        
        return ( 
            <div 
                className="success"
                style={{ 
                    display: submitted ? "" : "none", 
                }} 
            >
                <h1> {succMessage} </h1> 

            </div> 
        ); 
    }; 

    const errorMessage = () => { 
        /*error ? (console.log("error"))
        : (<></>)*/
    };


    return(
        <div className='Home'>
            <Navbar />

            <div className="box-main">
                <Logo />
                <h1 className="text-big">
                    Individual Event Registration
                </h1>
                <p className="text-small" ref={firstItemRef}>
                    Here you can register for all events and competitions that require a single person as the competitor.{"\n"}
                    For events relating to teams please check out the team event registration tab.
                </p>


                <div className="event-reg-box">
                    <div className='text-small'>
                        {errorMessage()}
                        {SuccessMessage(succMessage)}
                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            Table Tennis
                        </p>
                        <p className="text-small">
                            Table tennis, or ping pong, is a fast-paced indoor sport played on a table divided by a net. Players use paddles to hit a lightweight ball back and forth. It requires quick reflexes, strategic thinking, and precise ball control.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                        {(e)=>{
                            e.preventDefault()
                            handleEventSelect("Table Tennis");
                         }}>Register</button> 
                    </div>

                    <div className="ER-event">
                        <p className="text-big">
                            Chess
                        </p>
                        <p className="text-small">
                            Chess is a strategic board game for two players on a checkered 64-square board. Players aim to checkmate the opponent's king by strategically moving pieces.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        e.preventDefault()
                                                        handleEventSelect("Chess");
                                                    }}>Register</button> 

                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            Tekken
                        </p>
                        <p className="text-small">
                            Tekken ("Iron Fist") is a Japanese media franchise centered on a series of fighting games developed and published by Bandai Namco Entertainment (formerly Namco).
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        e.preventDefault()
                                                        handleEventSelect("Tekken");
                                                    }}>Register</button> 

                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            FIFA
                        </p>
                        <p className="text-small">
                            FIFA is a football video game franchise that was developed by EA Vancouver and EA Romania and published by EA Sports in which you can control a whole team of players to play against against person.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        e.preventDefault()
                                                        handleEventSelect("FIFA");
                                                    }}>Register</button> 

                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            Suturing
                        </p>
                        <p className="text-small">
                            Suturing is a medical procedure used to close wounds or surgical incisions with stitches. It involves using a needle and thread to sew tissue together, promoting healing and reducing the risk of infection.
                        </p>
                        <button href="#message" type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        e.preventDefault()
                                                        handleEventSelect("Suturing");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            MUN (UNSC)
                        </p>
                        <p className="text-small">
                            The UN Security Council seeks to address threats to international security. Its five permanent members, chosen in the wake of World War II, have veto power. The Security Council fosters negotiations, imposes sanctions, and authorizes the use of force, including the deployment of peacekeeping missions.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        e.preventDefault()
                                                        handleEventSelect("MUN (UNSC)");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            MUN (PNA)
                        </p>
                        <p className="text-small">
                        The National Assembly of Pakistan is the lower legislative house of the bicameral Parliament of
Pakistan, which also comprises the Senate of Pakistan (upper house). The National Assembly and the Senate both convene at Parliament House in Islamabad, Pakistan. The National Assembly is a democratically elected body consisting of a total of 336 members who are referred to as Members of the National Assembly (MNAs).
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        e.preventDefault()
                                                        handleEventSelect("MUN (PNA)");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            MUN (Crisis Committee)
                        </p>
                        <p className="text-small">
                            A crisis committee is a decision making body that has more power than a traditional committee. Whilst General Assemblies recommend and build consensus, focusing on creating and refining frameworks for the nations party to align their actions, crisis committees produce action.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        e.preventDefault()
                                                        handleEventSelect("MUN (CC)");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            Art Competition
                        </p>
                        <p className="text-small">
                            An art competition is an event where artists submit their artworks to be judged based on creativity, technique, and interpretation of a theme. It provides a platform for artists to showcase their talents, gain recognition, and often includes awards or prizes for outstanding entries.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        e.preventDefault()
                                                        handleEventSelect("Art Competition");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            Art Gallery
                        </p>
                        <p className="text-small">
                            An art gallery is a space where artworks are displayed for public viewing and sale. It serves as a venue for artists to exhibit their creations, ranging from paintings and sculptures to digital art and installations. Art galleries also play a role in cultural enrichment, education, and fostering appreciation for visual arts.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        e.preventDefault()
                                                        handleEventSelect("Art Gallery");
                                                    }}>Register</button> 
                    </div>
                    <div className="ER-event">
                        <p className="text-big">
                            Videography Competition
                        </p>
                        <p className="text-small">
                            A videography competition is an event where participants create and submit videos to be judged on creativity, technical skill, and storytelling. It provides a platform for filmmakers to showcase their talents, gain recognition, and often compete for awards or prizes.
                        </p>
                        <button type="submit" className='reg-btn' onClick=
                                                    {(e)=>{
                                                        e.preventDefault()
                                                        handleEventSelect("Videography competition");
                                                    }}>Register</button> 
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}

export default IndEventReg