import React from 'react';

import './Alert-Success.css';

const alertSuccess = (props) =>{

    return (
        <section className="alert-post">
          <div className="alert-success">
              <h3 className="alert-heading">Well done!</h3>
              <p>Aww yeah, you successfully read this important alert message. An Email sent to your address..... </p>
              <p>Click the <strong>link</strong> sent to you for password resetting.</p>
          </div>
        </section>
      )

}

export default alertSuccess;
