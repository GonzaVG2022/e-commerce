import React from "react";
import styled from "styled-components";
import {Facebook} from "react-bootstrap-icons"
import {Whatsapp} from "react-bootstrap-icons"
import {Twitter} from "react-bootstrap-icons"
import {Instagram} from "react-bootstrap-icons"
import {Tiktok} from "react-bootstrap-icons"
import {Youtube} from "react-bootstrap-icons"

const Footer = () => {
  return (
    <>
        <FooterContainer>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col">
                                <h4>company</h4>
                                <ul>
                                    <li><a href="#">about us</a></li>
                                    <li><a href="#">our services</a></li>
                                    <li><a href="#">privacy policy</a></li>
                                    <li><a href="#">affiliate program</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>get help</h4>
                                <ul>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">shipping</a></li>
                                    <li><a href="#">returns</a></li>
                                    <li><a href="#">order status</a></li>
                                    <li><a href="#">payment options</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>online shop</h4>
                                <ul>
                                    <li><a href="#">watch</a></li>
                                    <li><a href="#">bag</a></li>
                                    <li><a href="#">shoes</a></li>
                                    <li><a href="#">dress</a></li>
                                </ul>
                            </div> 
                            <div className="footer-col">
                                <h4>follow us</h4>
                                <div className="social-links">
                                    <a href="#"><i className="hhh"><Facebook/></i></a>
                                    <a href="#"><i className="hhh"><Whatsapp/></i></a>
                                    <a href="#"><i className="hhh"><Twitter/></i></a>
                                    <a href="#"><i className="hhh"><Instagram/></i></a>
                                    <a href="#"><i className="hhh"><Tiktok/></i></a>
                                    <a href="#"><i className="hhh"><Youtube/></i></a>  
                                </div>
                            </div>
                        </div>
                    </div>
            </footer>
        </FooterContainer>
    </>
  )
}

export default Footer

const FooterContainer = styled.div`

.container{
	max-width: 1170px;
	margin:auto;
}
.row{
	display: flex;
	flex-wrap: wrap;
}
ul{
	list-style: none;
}
.footer{
	background: silver;
    border: 4px solid #137ea7;
   
    padding: .8rem;
    margin: .8rem; 
}
.footer-col{
   width: 22%;
   padding: 0 15px;
}
.footer-col h4{
	font-size: 18px;
	color: black;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.footer-col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: #137ea7;
	height: 3px;
	box-sizing: border-box;
	width: 70px;
}
.footer-col ul li:not(:last-child){
	margin-bottom: 10px;
}
.footer-col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 300;
	color: black;
	display: block;
	transition: all 0.3s ease;
}
.footer-col ul li a:hover{
	color: #ffffff;
	padding-left: 8px;
      
}

.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 30px 40px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: #24262b;
	background-color: #ffffff;
}
.hhh{
	font-size:25px;
    display:flex;
    justify-content:center;
    padding-top: 8px;
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}


 
`
