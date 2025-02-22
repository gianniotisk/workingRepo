import React, { useState} from "react";
import styles from "./Body_Privacy.module.css";

export default function Body_Privacy(){

    return(
        <main className={styles.Wholebody}>
            <header className={styles.title}>PRIVACY NOTICE</header>

            <h1>
                Last updated [28/01/2025]
            </h1>


            This privacy notice for <strong>Finch Limited Company</strong>
            (doing business as <strong>Sierra Nevada Entertainment</strong>) (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
            describes how and why we might collect, store, use, and/or share (&quot;process&quot;)
            your information when you use our services (&quot;Services&quot;), such as when you:

            <ul>
            <li>
                Visit our website at <a href="www.Finch.com">www.Finch.com</a>, or any website of ours that links to this privacy notice
            </li>
            <li>
                Engage with us in other related ways ― including any sales, marketing, or events
            </li>
            </ul>

            <p>
                Questions or concerns?
                Reading this privacy notice will help you understand your privacy rights and choices.
                If you do not agree with our policies and practices, please do not use our Services.
                If you still have any questions or concerns, please contact us at <a href="johnDoe@gmail.com">johnDoe&#64;gmail.com</a>.
            </p>

            <br />
            <h2 className={styles.align}>
                SUMMARY OF KEY POINTS
            </h2>
            <br />

            <section>
                <p className={styles.align}>
                    <strong>
                        This summary provides key points from our privacy notice.
                    </strong>
                </p>

                <p>
                    <strong>What personal information do we process?</strong><br />
                    When you visit, use, or navigate our Services,
                    we may process personal information depending on how you interact with us and the Services,
                    the choices you make, and the products and features you use.

                </p>
            
                <p>
                    <strong>How do we process your information?</strong><br />
                    We process your information to provide, improve, and administer our Services,
                    communicate with you, for security and fraud prevention, and to comply with law.
                    We may also process your information for other purposes with your consent. We process your information only
                    when we have a valid legal reason to do so.
                </p>
            
                <p>
                    <strong>How do we keep your information safe?</strong><br />
                    We have organizational and technical processes and procedures in place
                    to protect your personal information. However, no electronic transmission over the
                    internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or
                    guarantee that hackers, cybercriminals, or other unauthorized third parties will not be
                    able to defeat our security and improperly collect, access, steal, or modify your information.
                </p>

                
                <p>
                    <strong>How do I exercise my rights?</strong><br />
                    The easiest way to exercise your rights is by filling out our data subject access
                    request form available here: <a href="" className={styles.link}>[DSAR Form URL]</a>, or by contacting us.
                    We will consider and act upon any request in accordance with applicable data protection laws.
                </p>

                
            </section>

            <p className={styles.align}>
            <em>
                This privacy policy was created by Termly’s Privacy Policy Generator.
            </em>
            </p>
        </main>
    );
}