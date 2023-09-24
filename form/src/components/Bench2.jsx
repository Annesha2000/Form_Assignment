import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

function Bench2() {
    
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const navigate = useNavigate();
    const handleStartDateChange = (date) => {
        setSelectedStartDate(date);
    };


    const handleBack = () => {
        // Navigate to the appropriate route based on the selected value

        navigate('/bench1');

    };

    const handleSubmit = () => {
        // Navigate to the appropriate route based on the selected value
        
                navigate('/submit');
                
    };

    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const handleEndDateChange = (date) => {
        setSelectedEndDate(date);
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
                    <div style={{ color:'#fff', marginLeft: '30px', marginRight: '30px' }}>
                        <h5> Bench Data Form</h5>

                    </div>

                </div>

                <Form onSubmit={(event) => {
                    event.preventDefault();



                }}
                >
                    <h3><b>Previous Project Details</b></h3>
                    


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="ProjectName">
                            <Form.Label>16. Project Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your answer" required />
                        </Form.Group>
                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="WhatResouce">
                            <Form.Label>17. What role did you play as a resource?</Form.Label>
                            
                            <p><input type="radio" name="resource" value="billable" required /> Billable Resource</p>
                            <p><input type="radio" name="resource" value="shadow" /> Shadow Resource</p>
                        </Form.Group>
                    </div>


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="ProjectStart">
                            <Form.Label>18. When did your previous <b>project's tagging start? (Date)</b></Form.Label>
                            
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
                        <Form.Group className="mb-3" controlId="ProjectEnd">
                            <Form.Label>19. When did your previous <b>project's tagging end? (Date)</b></Form.Label>
                            

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
                        <Form.Group className="mb-3" controlId="ProjectManagerName">
                            <Form.Label>20. Please provide the <b>Name</b>Name of the Project Manager or Lead</Form.Label>
                            <Form.Control type="text" placeholder="Enter your answer" required />
                        </Form.Group>
                    </div>


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="ProjectManagerEmail">
                            <Form.Label>21.Please provide the <b>Email</b> address of the Project Manager or Lead</Form.Label>
                            <Form.Control type="email" placeholder="Enter your answer" required />
                        </Form.Group>

                    </div>

                    

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="ReleaseDetails">
                            <Form.Label>22. Reason for Release from the previous project? Details Expected:</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Enter your answer" required />
                        </Form.Group>

                    </div>


                    

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="ProjectTechnology">
                            <Form.Label>23. Which technologies are you working on in this project?</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Enter your answer" required />
                        </Form.Group>

                    </div>


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="ProjectRemark">
                            <Form.Label>24. Any Comment / Remarks /Concerns </Form.Label>
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

export default Bench2;