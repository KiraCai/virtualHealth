import"./index.css";import"./homePage.css";import"./index.html";import React from"react";import ReactDOM from"react-dom/client";import{BrowserRouter as Router,Routes,Route}from"react-router-dom";import{MyApp,Basement,Navigation}from"./App";import MainApp from"./HomePage";import SignUp from"./RegistrationPage";import Layout from"./Layout";import Home from"./Home";import Blogs from"./Blogs";var div=document.createElement("div");div.setAttribute("id","app"),document.body.appendChild(div);var root=ReactDOM.createRoot(document.getElementById("app"));root.render(React.createElement(Router,null,React.createElement(Routes,null,React.createElement(Route,{path:"/",element:React.createElement(Layout,null)},React.createElement(Route,{index:!0,element:React.createElement(Home,null)}),React.createElement(Route,{path:"blogs",element:React.createElement(Blogs,null)})),React.createElement(Route,{path:"/signup",element:React.createElement(SignUp,null)}))));