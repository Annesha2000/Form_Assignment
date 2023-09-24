import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import RatingStars from 'react-rating-stars-component';

function Project() {

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const navigate = useNavigate();

    const handleStartDateChange = (date) => {
        setSelectedStartDate(date);
    };



    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const handleEndDateChange = (date) => {
        setSelectedEndDate(date);
    };


    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
      setRating(newRating);
    };
      
    const handleSubmit = () => {
        // Navigate to the appropriate route based on the selected value
        
                navigate('/submit');
                
    };

    const handleBack = () => {
        // Navigate to the appropriate route based on the selected value

        navigate('/');

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
                        backgroundColor: '#03fca5',
                        backgroundSize: 'cover',
                        width: '100%',
                        margin: '0px',
                        marginBottom: '20px',

                        backgroundPosition: 'center',
                        height: '50px',
                    }}
                >
                    <div style={{ color:'#fff', marginLeft: '30px', marginRight: '30px' }}>
                        <h5> Bench Data Form</h5>

                    </div>

                </div>
                  

                <h5><b>For Project Resouces</b></h5>

                <Form onSubmit={(event) => {
                    event.preventDefault();



                }}
                >

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="CurrentProjectName">
                            <Form.Label>8. Current Project Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your answer" required />
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
                        <Form.Group className="mb-3" controlId="ManagerName">
                            <Form.Label>11. Please provide the <b>Name</b> of the Project Manager or Lead</Form.Label>
                            <Form.Control type="text" placeholder="Enter your answer" required />
                        </Form.Group>
                    </div>


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="ManagerEmail">
                            <Form.Label>12.Please provide the <b>Email</b> address of the Project Manager or Lead</Form.Label>
                            <Form.Control type="email" placeholder="Enter your answer" required />
                        </Form.Group>

                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="Feedback">
                            <Form.Label>13. Are you receiving regular <b>feedback on your performance</b>?</Form.Label>
                           
                            <p><input type="radio" name="yesorno" value="yes" required /> Yes</p>
                            <p><input type="radio" name="yesorno" value="no" /> No</p>
                        </Form.Group>
                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="TechnicalTask">
                            <Form.Label>14. How often do you get Technical Tasks?</Form.Label>

                            

                            <p><input type="radio" name="status" value="Always" required /> Always</p>
                            <p><input type="radio" name="status" value="VeryOften" /> Very Often </p>
                            <p><input type="radio" name="status" value="Often" /> Often </p>
                            <p><input type="radio" name="status" value="Sometimes" /> Sometimes</p>
                            <p><input type="radio" name="status" value="Seldom" /> Seldom </p>
                            <p><input type="radio" name="status" value="Never" /> Never </p>


                        </Form.Group>
                    </div>


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="Satisfaction">
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
                            <Form.Control as="textarea" rows={4} placeholder="Enter your answer" required />
                        </Form.Group>

                    </div>


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="Remark">
                            <Form.Label>17. Any Comment / Remarks /Concerns </Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Enter your answer" required />
                        </Form.Group>

                    </div>






                    <div style={{ marginTop: '50px' }}>
                    <Button onClick={handleBack} style={{ background: '#03787c', color: 'white', marginRight: '30px'}}>
                            Back
                        </Button>
                    
                        <Button onClick={handleSubmit} style={{background: '#03787c', color: 'white',}}>
                            Submit
                        </Button>

                    </div>



                </Form>
            </div>
        </div >
    );
}

export default Project;