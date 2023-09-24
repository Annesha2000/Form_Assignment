import { React } from "react";

function Submit() {
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
                    <div style={{ color:'#fff', marginLeft: '30px', marginRight: '30px' }}>
                        <h5> Bench Data Form</h5>

                    </div>

                </div>
                  

                <h5><b>Form Submitted!!</b></h5>

                
            </div>
        </div >
    );
}

export default Submit;