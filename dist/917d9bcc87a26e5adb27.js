import"./index.css";import"./homePage.css";import"./index.html";import React from"react";import{createRoot}from"react-dom/client";import MyApp from"./App";import MainContent from"./HomePage";import SignUp from"./RegistrationPage.js";var div=document.createElement("div");div.setAttribute("id","app"),document.body.appendChild(div);var root=createRoot(document.querySelector("#app"));import{Navigation}from"./App";root.render(React.createElement(Navigation,null));var navDomNode=document.getElementById("navigation"),navRoot=createRoot(navDomNode);navRoot.render(React.createElement(Navigation,null));var commentDomNode=document.getElementById("comments"),commentRoot=createRoot(commentDomNode);commentRoot.render(React.createElement(Comments,null));