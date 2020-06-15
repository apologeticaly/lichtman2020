import React from 'react';

function Newsletter () {
    return(

        <div className="section">
            
        <div id="label">
            <p id="micro">SIGN UP FOR OUR NEWSLETTER!</p>
        </div>
        <section class="newsletter">
        <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="content">
                    <form>
                        <div class="input-group">
                            <input type="email" class="form-control" placeholder="*Coming Soon*"></input>
                            
                            <span class="input-group-btn">
                                <button class="btn" type="submit">SUBSCRIBE NOW</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-sm-12">
                <div className="disclaimer">
                    <p id="micromicro">We will never share your info</p>
                </div>
            </div>
        </div>
        </div>
        </section>
        </div>
    );
    }
export default Newsletter;