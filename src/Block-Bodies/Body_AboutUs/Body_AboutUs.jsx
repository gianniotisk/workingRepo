import React, { useState} from "react";
import styles from "./Body_AboutUs.module.css";
import { Link } from "react-router-dom";
import FINCHER from "../../assets/General/fincher.png";


export default function Body_AboutUs(){

    return(
        <main>
            <header className={styles.title}>About us</header>

            <img src={FINCHER} className={styles.finchImage} alt="David Fincher photo"></img>

            <section className={styles.fincher}>
                <h2 className={styles.subTitle}> Who are we</h2>
                <p>
                    Our website is named after the great American director David Andrew Leo Fincher.
                    Born in August 28, 1962, Fincher has been active in films especially psychological thrillers.
                    Some of his works consist of movies like <em>Fight Club</em> and <em>The Social Network</em>.
                    <br /><br />
                    Apart from cinema, Fincher has also directed numerous musric videos,
                    including Madonna&apos;s <em>Express Yourself</em> in 1989 and <em>Vogue</em> in 1990.
                </p>
            </section>

            <h2 className={styles.subTitle}> Team Purpose</h2>
            <section>
                
                <p className={styles.purpose}>
                    In Finch, we are tasked with providing the most accurate film news,
                    in order to help connect audiences with all the latest hollywood news and beyond.
                </p>
            </section>

            <aside className={styles.newsletter}>
            <p>
                Want to keep in touch with the latest updates?
                <br/>Fill out our newsletter form to receive newsletter updates and promotions.
            </p>
            <button className={styles.newsletterButton}>
            <Link
                to={{
                    pathname: "/Newsletter",
                }}
            >
                Finch Newsletter
            </Link>
            </button>
            </aside>

        </main>
    );
}