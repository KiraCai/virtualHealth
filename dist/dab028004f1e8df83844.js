import"./index.css";import"./homePage.css";import"./index.html";import React from"react";import ReactDOM from"react-dom";import{BrowserRouter as Router,Routes,Route,Link}from"react-router-dom";import{createRoot}from"react-dom/client";import MyApp from"./App";import MainContent from"./HomePage";import SignUp from"./RegistrationPage";var div=document.createElement("div");div.setAttribute("id","app"),document.body.appendChild(div);var root=createRoot(document.querySelector("#app"));import{Navigation,Basement}from"./App";root.render(React.createElement(Basement,null));var navDomNode=document.getElementById("navig"),navRoot=createRoot(navDomNode);navRoot.render(React.createElement(MyApp,null));