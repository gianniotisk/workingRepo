import { useState, useEffect, useRef } from "react";

import "./util-bar.css"

import Search_Bar from "./search-bar";

import LOGO from "../../assets/Header/Logo.png";
import SIGNIN from "../../assets/Header/Signin.png";

export default function Util_Bar(){

    return(
        <div className="util-bar">
            <div className="container">

                {/* ----------- Logo Icon-------------- */}
                <img className="header-pic" src={LOGO} alt="Finch Logo" />

                {/* ----------- Search Bar ------------ */}
                <Search_Bar/>

                {/* ----------- Signin Icon ----------- */}
                <img className="header-pic" src={SIGNIN} alt="Sign In" />

            </div>
        </div>
    );
}