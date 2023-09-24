import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import RatingStars from 'react-rating-stars-component'



function Bench1() {

    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const handleEndDateChange = (date) => {
        setSelectedEndDate(date);
    };

    const [rating, setRating] = useState(0);
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };


    const [status, setStatus] = useState('');
    const [showSubmit, setShowSubmit] = useState(false);
    const navigate = useNavigate();

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        setShowSubmit(e.target.value === 'yes');
    };


    const handleBack = () => {
        // Navigate to the appropriate route based on the selected value

        navigate('/');

    };

    const handleSubmit = () => {
        // Navigate to the appropriate route based on the selected value

        navigate('/submit');

    };

    const handleNext = () => {
        // Navigate to the appropriate route based on the selected value

        navigate('/bench2');

    };

    return (
        <div
            style={{
                backgroundImage: 'url("/assets/2.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
                position: 'relative',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
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

                <Form onSubmit={(event) => {
                    event.preventDefault();



                }}
                >
                    <h3><b>Form for bench candidates</b></h3>
                    <h10>As you are currently on the bench (not assigned to a Shadow Project or a Billable Project), <b>the information
                        you provide is of utmost importance, and we kindly request that it be as detailed and accurate as possible.</b>
                        Additionally, I will include an extra field for you to share any additional information.</h10>


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="BenchCalls">
                            <Form.Label>8. Are you attending my bench calls?</Form.Label>

                            <p><input type="radio" name="yesorno" value="yes" required /> Yes</p>
                            <p><input type="radio" name="yesorno" value="no" /> No</p>
                        </Form.Group>
                    </div>





                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="CurrentlyWorking">
                            <Form.Label>9. What are you currently working on? <b>(Provide Detailed Info /bullet points) </b></Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Enter your answer" required />
                        </Form.Group>
                    </div>


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="OtherActivity">
                            <Form.Label>10. Are you currently under any other training or activity apart from bench?
                                (For example: GCP/ AWS Level 1/ AWS Level 2/ CAF/ any other training)</Form.Label>

                            <p><input type="radio" name="yesorno" value="yes" required /> Yes</p>
                            <p><input type="radio" name="yesorno" value="no" /> No</p>
                        </Form.Group>
                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="WhichOtherActivity">
                            <Form.Label>11. Which other activity are you currently engaged in apart from being on bench?</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Enter your answer" required />
                        </Form.Group>
                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="ActivityCompleteDate">
                            <Form.Label>12. What is the date of completion for this above mentioned activity?</Form.Label>

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
                        <Form.Group className="mb-3" controlId="RateYorself">
                            <Form.Label>13. Rate yourself on Preparedness for immediate Project Interview.</Form.Label>

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
                        <Form.Group className="mb-3" controlId="DigiDashboard">
                            <Form.Label>14. Are you updating Digi Dashboard? </Form.Label>

                            <p><input type="radio" name="yesorno" value="yes" required /> Yes</p>
                            <p><input type="radio" name="yesorno" value="no" /> No</p>
                        </Form.Group>
                    </div>


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="PreviousProject">
                            <Form.Label>15. Were you involved in any previous project? </Form.Label>

                            <p><input type="radio" name="status" value="yes" onChange={handleStatusChange} required /> Yes</p>
                            <p><input type="radio" name="status" value="no" onChange={handleStatusChange} /> No</p>
                        </Form.Group>
                    </div>


                    <div style={{ marginTop: '50px' }}>

                        <Button onClick={handleBack} style={{ background: '#03787c', color: 'white', marginRight: '30px'}}>
                            Back
                        </Button>

                        {showSubmit ? (
                            <Button onClick={handleNext} style={{ background: '#03787c', color: 'white', }}>
                                Next
                            </Button>
                        ) : (
                            <Button onClick={handleSubmit} style={{ background: '#03787c', color: 'white', }}>
                                Submit
                            </Button>

                        )}

                    </div>



                </Form>
            </div>
        </div >
    );
}

export default Bench1;