import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const handleSubmit = () => {
        history.push('/home');
    }
    return (
        <div>
            <main className="login_main">
                <article className="login_article">
                    <div className="login_left_div">
                        <img alt="Image1" className="login_random_images one" src="https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg"/>
                    </div>
                    <div className="login_right_main">
                    <div className="login_right_div">
                        <p className="login_heading">Instagram</p>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Phone number, username, or email"/>
                            <input type="password" placeholder="Password"/>
                            <Button type="submit" className='login_button' variant="contained" color="primary">
                                Log In
                            </Button>
                    </form>
                    <div className="login_dummy_div">
                       <span className='login_or'>OR</span> 
                    </div>
                    <div className="login_facebook">
                        <FacebookIcon color="primary"/>
                        <span>Login in with facebook</span>
                    </div>
                    <a className="login_forgot_password" href="#">Forgot password?</a>
                    </div>
                    <div className="login_register">
                        <span>Don't have an account? </span>
                        <span className="login_signup">&nbsp;Sign up</span>
                    </div>
                    <p>Get the app.</p>
                    <img className="login_images" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"/>
                    <img className="login_images" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"/>
                    </div>
                    
                </article>
                <div className="login_footer">
                        <ul className="login_footer_list">
                            <li>
                                About
                            </li>
                            <li>Jobs</li>
                            <li>Blogs</li>
                            <li>Help</li>
                            <li>API</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Accounts</li>
                            <li>Top Accounts</li>
                            <li>Hastags</li>
                        </ul>
                    </div>
                    <div className="login_footer"> 
                        <ul className="login_footer_list">
                            <li>Beauty</li>
                            <li>Dance & Performance</li>
                            <li>Fitness</li>
                            <li>Food & Drink</li>
                            <li>Home & Garden</li>
                            <li>Music</li>
                            <li>Visual Arts</li>
                        </ul>
                    </div>
                    <div className="login_copyright">
                        <p>English &#169;2020 Instagram from Facebook</p>
                    </div>
            </main>
        </div>
    )
}

export default Login
