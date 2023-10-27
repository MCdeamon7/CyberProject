import React from "react";
import QRCode from "react-qr-code";
import styles from "./qrcode.module.css";
import TryHarder from "../TryHarder";


function QRcodeGenerator(props) {

    let value = "hey shitty people"
    let time = 1

    return (
        
        <>
        {/* {Object.keys(user).length === 0 ? ( */}
        {false ? (
            //TODO: create a button that generate random qrcodes
            <TryHarder />
        ) : (
            <section>
                <h2>Scan me!</h2>
                <QRCode value={value} size="250" />
                <h2>Code valid for {time} hours</h2>
		    </section>
        )}
    </>
    )
}

export default QRcodeGenerator;