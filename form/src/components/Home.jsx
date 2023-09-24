import { React, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


function Home() {

//--------------BenchStatus----------------
    const [benchStatus, setBenchStatus] = useState('');
    useEffect(() => {
        // Retrieve the saved value from localStorage when the component mounts
        const savedBenchStatus = localStorage.getItem('benchStatus');
        if (savedBenchStatus) {
            setBenchStatus(savedBenchStatus);
        }
    }, []);

     const handleBenchStatusChange = (e) => {
        const newValue = e.target.value;
        setBenchStatus(newValue);
        localStorage.setItem('benchStatus', newValue);
    };

//-------------------------next button------------------
    const navigate = useNavigate();
    const handleNext = () => {
        // Navigate to the appropriate route based on the selected value
        switch (benchStatus) {
            case 'OnBench':
                navigate('/bench1');
                break;
            case 'Shadow':
                navigate('/shadow');
                break;
            case 'Billable':
                navigate('/project');
                break;
            default:
                // Handle other cases or show an error message
                break;
        }
    };

//    -------------------Business Email-----------------
    const [businessEmail, setBusinessEmail] = useState('');
    useEffect(() => {
        // Retrieve the saved value from localStorage when the component mounts
        const savedBusinessEmail = localStorage.getItem('businessEmail');
        if (savedBusinessEmail) {
            setBusinessEmail(savedBusinessEmail);
        }
    }, []);
    const handleBusinessEmailChange = (e) => {
        const newValue = e.target.value;
        setBusinessEmail(newValue);
        localStorage.setItem('businessEmail', newValue);
    };


    
    //    -------------------BaseLocation-----------------
    const [baseLocation, setBaseLocation] = useState('');
    useEffect(() => {
        // Retrieve the saved value from localStorage when the component mounts
        const savedBaseLocation = localStorage.getItem('baseLocation');
        if (savedBaseLocation) {
            setBaseLocation(savedBaseLocation);
        }
    }, []);

    const handleBaseLocationChange = (e) => {
        const newValue = e.target.value;
        setBaseLocation(newValue);

        // Save the value to localStorage whenever it changes
        localStorage.setItem('baseLocation', newValue);
    };


    
    //    -------------------BaseLocationDescription-----------------
    const [baseLocationDescription, setBaseLocationDescription] = useState('');
    useEffect(() => {
        // Retrieve the saved value from localStorage when the component mounts
        const savedBaseLocationDescription = localStorage.getItem('baseLocationDescription');
        if (savedBaseLocationDescription) {
            setBaseLocationDescription(savedBaseLocationDescription);
        }
    }, []);

    const handleBaseLocationDescriptionChange = (e) => {
        const newValue = e.target.value;
        setBaseLocationDescription(newValue);

        // Save the value to localStorage whenever it changes
        localStorage.setItem('baseLocationDescription', newValue);
    };


    
    //    -------------------Certification-----------------
    const [certification, setCertification] = useState('');
    useEffect(() => {
        // Retrieve the saved value from localStorage when the component mounts
        const savedCertification = localStorage.getItem('certification');
        if (savedCertification) {
            setCertification(savedCertification);
        }
    }, []);

    const handleCertificationChange = (e) => {
        const newValue = e.target.value;
        setCertification(newValue);

        // Save the value to localStorage whenever it changes
        localStorage.setItem('certification', newValue);
    };


    
    //    -------------------BaseLocationYesOrNo-----------------
    const [baseLocationYesOrNo, setBaseLocationYesOrNo] = useState('');
    useEffect(() => {
        // Retrieve the saved value from localStorage when the component mounts
        const savedBaseLocationYesOrNo = localStorage.getItem('baseLocationYesOrNo');
        if (savedBaseLocationYesOrNo) {
            setBaseLocationYesOrNo(savedBaseLocationYesOrNo);
        }
    }, []);

    const handleBaseLocationYesOrNoChange = (e) => {
        const newValue = e.target.value;
        setBaseLocationYesOrNo(newValue);

        // Save the value to localStorage whenever it changes
        localStorage.setItem('baseLocationYesOrNo', newValue);
    };


    //    -------------------Full Name-----------------
    const [fullName, setFullName] = useState('');
    useEffect(() => {
        // Retrieve the saved value from localStorage when the component mounts
        const savedFullName = localStorage.getItem('fullName');
        if (savedFullName) {
            setFullName(savedFullName);
        }
    }, []);

    const handleFullNameChange = (e) => {
        const newValue = e.target.value;
        setFullName(newValue);

        // Save the value to localStorage whenever it changes
        localStorage.setItem('fullName', newValue);
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
                        height: '200px',
                    }}
                >
                    <div style={{ color: '#fff', marginLeft: '30px', marginRight: '30px' }}>
                        <h1> Bench Data Form</h1>
                        <p><h10>Dear Team,</h10></p>
                        <p><h10> Your latest information is crucial for us to provide you with the best support and stay connected. Please take a moment to update your details to ensure accuracy. Your contribution matters!
                        </h10></p>
                        <p><h10>Thank you for your cooperation</h10></p>
                    </div>

                </div>

                <Form onSubmit={(event) => {
                    event.preventDefault();



                }}
                >

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="FullName">
                            <Form.Label>1. Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your answer" required value={fullName} onChange={handleFullNameChange}  />
                        </Form.Group>
                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="BusinessEmail">
                            <Form.Label>2. Business Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your answer" value={businessEmail} onChange={handleBusinessEmailChange} required />
                        </Form.Group>
                    </div>



                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="BaseLocation">
                            <Form.Label>3. Base Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter your answer" value={baseLocation} onChange={handleBaseLocationChange}required />
                        </Form.Group>

                    </div>




                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="BaseLocationYesOrNo">
                            <Form.Label>4. Are you reporting to your base location?</Form.Label>
                            {/* <Form.Control required /> */}
                            <p><input type="radio" name="yesorno" value="yes" checked={baseLocationYesOrNo === 'yes'} onChange={handleBaseLocationYesOrNoChange} required /> Yes</p>
                            <p><input type="radio" name="yesorno" value="no" checked={baseLocationYesOrNo === 'no'} onChange={handleBaseLocationYesOrNoChange}/> No</p>
                        </Form.Group>
                    </div>


                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="BaseLocationDescription">
                            <Form.Label>5. In Case your selection to the above question was <b>NO</b>. Could you provide an explanation for why you are not currently reporting to the designated base location?</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Enter your answer" value={baseLocationDescription} onChange={handleBaseLocationDescriptionChange}/>
                        </Form.Group>

                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="Certification">
                            <Form.Label>6. Enter Certification Achieved so far (comma separated) </Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Enter your answer" value={certification} onChange={handleCertificationChange}/>
                        </Form.Group>
                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <Form.Group className="mb-3" controlId="BenchStatus">
                            <Form.Label>7. What is your current bench status?</Form.Label>

                            

                            <p><input type="radio" name="benchstatus" value="OnBench" checked={benchStatus === 'OnBench'} onChange={handleBenchStatusChange} required /> {' '}On Bench</p>
                            <p><input type="radio" name="benchstatus" value="Shadow" checked={benchStatus === 'Shadow'} onChange={handleBenchStatusChange} /> {' '}On Shadow Project (On project but not billable yet)</p>
                            <p><input type="radio" name="benchstatus" value="Billable" checked={benchStatus === 'Billable'} onChange={handleBenchStatusChange} /> {' '}On Billable Project (Have confirmation Email)</p>


                        </Form.Group>


                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <Button type="submit" style={{ background: '#03787c', color: 'white', }} onClick={handleNext} >
                            Next
                        </Button>

                    </div>



                </Form>
            </div>
        </div >
    );
}

export default Home;