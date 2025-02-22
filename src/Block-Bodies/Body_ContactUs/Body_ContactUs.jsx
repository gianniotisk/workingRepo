import React, { useState} from "react";
import styles from "./Body_ContactUs.module.css";

export default function Body_ContactUs(){

    return(
        <main className={styles.wholeBody}>
            <header className={styles.title}>Contact Details</header>


            <section className={styles.contactInformation}>
            <p>
                Company Name :  <strong>Finch Limited Company</strong>
            </p>
            <p>
                Part of : <strong>Sierra Nevada Entertainement</strong>
            </p>
            <p>
                Company Email :  johndoe&#64;gmail.com
            </p>
            <p>
                Company Building Address : Leontos Sofou 27, Thessaloniki, Greece
            </p>
            </section>

            {/* How a Google Map would look. It needs a Map API key from Google. */}

            {/* <section className={styles.googleMap}>
                <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=testKey&q=Leontos+Sofou+27,+Thessaloniki,+Greece"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
            </section>  */}
        </main>
    );
}