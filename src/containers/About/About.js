
import React from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './About.css'



const aboutPage = () => {

  return (
    <div class="container">


      <header className="About-description">
        <h5> About </h5>
        <br/><br/>

        <p>
          The future has been a source of anxiety for me. Questions such as - what will I work as? What will I value? Is it going to be boring? Thrilling? How might I measure my impact? - swirl around in my head. <br/><br/>

    The following activity, created by Peter Scupelli, encourages us to explore the possibilities of our future. Through completing the activity, one creates 4 alternative futures, with each containing desirable and undesirable aspects of a future life. <br/><br/>

Finally, you can choose to submit your response to The Future, an archive of responses to this activity. You can visit the archive here. <br/>

        </p>

        <p className="author"><i>
          By Elliot Allard <br/>
          for the class SSUI F19
        </i>
        </p>
      </header>



    </div>

  );
};


export default aboutPage;

