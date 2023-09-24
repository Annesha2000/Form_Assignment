import { React, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import RatingStars from 'react-rating-stars-component';

function Shadow() {


    //-------------------Start Date----------------------------
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    useEffect(() => {
        // Retrieve the saved rating value from localStorage when the component mounts
        const savedSelectedStartDate = localStorage.getItem('selectedStartDate');
        if (savedSelectedStartDate) {
          setSelectedStartDate(new Date(savedSelectedStartDate));
        }
      }, []);
    const handleStartDateChange = (date) => {
        setSelectedStartDate(date);
        localStorage.setItem('selectedStartDate', date);
    };


    //------------------End Date----------------
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    useEffect(() => {
        // Retrieve the saved rating value from localStorage when the component mounts
        const savedSelectedEndDate = localStorage.getItem('selectedEndDate');
        if (savedSelectedEndDate) {
          setSelectedEndDate(new Date(savedSelectedEndDate)); 
        }
      }, []);
    const handleEndDateChange = (date) => {
        setSelectedEndDate(date);
        localStorage.setItem('selectedEndDate', date);
    };

    //---------------Rating----------------------
    const [rating, setRating] = useState(0);
    useEffect(() => {
        // Retrieve the saved rating value from localStorage when the component mounts
        const savedRating = localStorage.getItem('rating');
        if (savedRating) {
          setRating(parseInt(savedRating)); // Parse the saved value as a float
        }
      }, []);
    const handleRatingChange = (newRating) => {
        setRating(newRating);
        localStorage.setItem('rating', newRating.toString());
    };
    
    
    //-----------------------next and back button--------------
    const navigate = useNavigate();
    const handleSubmit = () => {

        navigate('/submit');

    };
    const handleBack = () => {

        navigate('/');

    };

    //    -----------------ShadowProjectName-----------------
    const [shadowProjectName, setShadowProjectName] = useState('');
    useEffect(() => {
        // Retrieve the saved value from localStorage when the component mounts
        const savedShadowProjectName = localStorage.getItem('shadowProjectName');
        if (savedShadowProjectName) {
            setShadowProjectName(savedShadowProjectName);
        }
    }, []);

    const handleShadowProjectNameChange = (e) => {
        const newValue = e.target.value;
        setShadowProjectName(newValue);

        // Save the value to localStorage whenever it changes
        localStorage.setItem('shadowProjectName', newValue);
    };


    //    -------------------ShadowManagerName-----------------
    const [shadowManagerName, setShadowManagerName] = useState('');
    useEffect(() => {
        // Retrieve the saved value from localStorage when the component mounts
        const savedShadowManagerName = localStorage.getItem('shadowManagerName');
        if (savedShadowManagerName) {
            setShadowManagerName(savedShadowManagerName);
        }
    }, []);

    const handleShadowManagerNameChange = (e) => {
        const newValue = e.target.value;
        setShadowManagerName(newValue);

        // Save the value to localStorage whenever it changes
        localStorage.setItem('shadowManagerName', newValue);
    };



    //    -------------------ShadowManagerEmail-----------------
    const [shadowManagerEmail, setShadowManagerEmail] = useState('');
    useEffect(() => {
        // Retrieve the saved value from localStorage when the component mounts
        const savedShadowManagerEmail = localStorage.getItem('shadowManagerEmail');
        if (savedShadowManagerEmail) {
            setShadowManagerEmail(savedShadowManagerEmail);
        }
    }, []);

    const handleShadowManagerEmailChange = (e) => {
        const newValue = e.target.value;
        setShadowManagerEmail(newValue);

        // Save the value to localStorage whenever it changes
        localStorage.setItem('shadowManagerEmail', newValue);
    };


    //    -------------------Feedback-----------------
    const [feedback, setFeedback] = useState('');
    useEffect(() => {
        // Retrieve the saved value from localStorage when the component mounts
        const savedFeedback = localStorage.getItem('feedback');
        if (savedFeedback) {
            setFeedback(savedFeedback);
        }
    }, []);

    const handleFeedbackChange = (e) => {
        const newValue = e.target.value;
        setFeedback(newValue);

        // Save the value to localStorage whenever it changes
        localStorage.setItem('feedback', newValue);
    };

    
    //    -------------------TechnicalTask----------------
    const [technicalTask, setTechnicalTask] = useState('');
    useEffect(() => {
        // Retrieve the saved value from localStorage when the component mounts
        const savedTechnicalTask = localStorage.getItem('technicalTask');
        if (savedTechnicalTask) {
            setTechnicalTask(savedTechnicalTask);
        }
    }, []);

    const handleTechnicalTaskChange = (e) => {
        const newValue = e.target.value;
        setTechnicalTask(newValue);

        // Save the value to localStorage whenever it changes
        localStorage.setItem('technicalTask', newValue);
    };

    
    
    //    -------------------Technology----------------
    const [technology, setTechnology] = useState('');
    useEffect(() => {
        // Retrieve the saved value from localStorage when the component mounts
        const savedTechnology = localStorage.getItem('technology');
        if (savedTechnology) {
            setTechnology(savedTechnology);
        }
    }, []);

    const handleTechnologyChange = (e) => {
        const newValue = e.target.value;
        setTechnology(newValue);

        // Save the value to localStorage whenever it changes
        localStorage.setItem('technology', newValue);
    };




    //    -------------------Remark----------------
    const [remark, setRemark] = useState('');
    useEffect(() => {
        // Retrieve the saved value from localStorage when the component mounts
        const savedRemark = localStorage.getItem('remark');
        if (savedRemark) {
            setRemark(savedRemark);
        }
    }, []);

    const handleRemarkChange = (e) => {
        const newValue = e.target.value;
        setRemark(newValue);

        // Save the value to localStorage whenever it changes
        localStorage.setItem('remark', newValue);
    };


    return (
        <div
            style={{
                backgroundImage: 'url("/assets/2.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                minHeight: '100vh', // Ensure the background covers the entire viewport height
                position: 'relative', // Required to position the form over the background
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background for the form
                    padding: '20px',
                    borderRadius: '10px',
                    marginLeft: '130px',

                    width: '80%',
                    height: '100%',

                }}
            >
                <div
                    style={{
                        backgroundColor: '#03787c',
                        backgroundSize: 'cover',
                        width: '100%',
                        margin: '0px',
                        marginBottom: '20px',

                        backgroundPosition: 'center',
                        height: '50px',
                    }}
                >
                    <div style={{ color: '#fff', marginLeft: '30px', marginRight: '30px' }}>
                        <h5> Bench Data Form</h5>

                    </div>

                </div>


                <h5><b>For shadow Resouces</b></h5>

                <Form onSubmit={(event) => {
                    event.preventDefault();



                }}
                >

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="ShadowProjectName">
                            <Form.Label>8. Current Project Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your answer" value={shadowProjectName} onChange={handleShadowProjectNameChange} required />
                        </Form.Group>
                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="ShadowStart">
                            <Form.Label>9. When is shadow tagging start date?</Form.Label>

                            <div>
                                <DatePicker
                                    selected={selectedStartDate}
                                    onChange={handleStartDateChange}
                                    dateFormat="MM/dd/yyyy"
                                    placeholderText="Select a date"
                                    isClearable
                                    required
                                />
                            </div>


                        </Form.Group>
                    </div>



                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="ShadowEnd">
                            <Form.Label>10. What is the shadow tagging end date?</Form.Label>

                            <div>
                                <DatePicker
                                    selected={selectedEndDate}
                                    onChange={handleEndDateChange}
                                    dateFormat="MM/dd/yyyy"
                                    placeholderText="Select a date"
                                    isClearable
                                    required
                                />
                            </div>

                        </Form.Group>

                    </div>




                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="ShadowManagerName">
                            <Form.Label>11. Please provide the <b>Name</b> of the Project Manager or Lead</Form.Label>
                            <Form.Control type="text" placeholder="Enter your answer" value={shadowManagerName} onChange={handleShadowManagerNameChange} required />
                        </Form.Group>
                    </div>


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="ShadowManagerEmail">
                            <Form.Label>12.Please provide the <b>Email</b> address of the Project Manager or Lead</Form.Label>
                            <Form.Control type="email" placeholder="Enter your answer" value={shadowManagerEmail} onChange={handleShadowManagerEmailChange} required />
                        </Form.Group>

                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="Feedback">
                            <Form.Label>13. Are you receiving regular <b>feedback on your performance</b>?</Form.Label>

                            <p><input type="radio" name="feedback" value="yes" checked={feedback === 'yes'} onChange={handleFeedbackChange} required /> Yes</p>
                            <p><input type="radio" name="feedback" value="no" checked={feedback === 'no'} onChange={handleFeedbackChange} required /> No</p>
                        </Form.Group>
                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="TechnicalTask">
                            <Form.Label>14. How often do you get Technical Tasks?</Form.Label>


                            <p><input type="radio" name="technicalTask" value="Always" checked={technicalTask === 'Always'} onChange={handleTechnicalTaskChange} required /> Always</p>
                            <p><input type="radio" name="technicalTask" value="VeryOften" checked={technicalTask === 'VeryOften'} onChange={handleTechnicalTaskChange}/> Very Often </p>
                            <p><input type="radio" name="technicalTask" value="Often" checked={technicalTask === 'Often'} onChange={handleTechnicalTaskChange}/> Often </p>
                            <p><input type="radio" name="technicalTask" value="Sometimes" checked={technicalTask === 'Sometimes'} onChange={handleTechnicalTaskChange}/> Sometimes</p>
                            <p><input type="radio" name="technicalTask" value="Seldom" checked={technicalTask === 'Seldom'} onChange={handleTechnicalTaskChange}/> Seldom </p>
                            <p><input type="radio" name="technicalTask" value="Never" checked={technicalTask === 'Never'} onChange={handleTechnicalTaskChange}/> Never </p>


                        </Form.Group>
                    </div>


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="Rating">
                            <Form.Label>15. On a scale of satisfaction, to what extent does your manager express contentment with your work? (is happy with your work)?</Form.Label>


                            <RatingStars

                                count={10} // Number of stars in the rating scale
                                value={rating} // Current rating value
                                onChange={handleRatingChange} // Callback function for rating change
                                size={60} // Size of the stars
                                color="rgba(255, 255, 255, 0.7)" // Star color
                                activeColor="#03787c" // Active (selected) star color
                                isHalf={false} // Enable half-star ratings
                                required // Make the star rating field compulsory
                            />


                        </Form.Group>
                    </div>


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="Technology">
                            <Form.Label>16. Which technologies are you working on in this project?</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Enter your answer" value={technology} onChange={handleTechnologyChange}  required />
                        </Form.Group>

                    </div>


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="Remark">
                            <Form.Label>17. Any Comment / Remarks /Concerns </Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Enter your answer" value={remark} onChange={handleRemarkChange} required />
                        </Form.Group>

                    </div>






                    <div style={{ marginTop: '50px' }}>
                        <Button onClick={handleBack} style={{ background: '#03787c', color: 'white', marginRight: '30px' }}>
                            Back
                        </Button>
                        <Button onClick={handleSubmit} style={{ background: '#03787c', color: 'white', }}>
                            Submit
                        </Button>

                    </div>



                </Form>
            </div>
        </div >
    );
}

export default Shadow;