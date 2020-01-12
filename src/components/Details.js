import React from "react";
import View from "./View";
import { getCurrentUser } from "../utils/auth";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Details = () => {
    const { name, legalName, email } = getCurrentUser();

    return (
        <View title="Your Details">
            <p>
                This is a client-only route. You can get additional information
                about a user on the client from this page.
            </p>
            <ul>
                <li>Preferred name: {name}</li>
                <li>Legal name: {legalName}</li>
                <li>Email address: {email}</li>
            </ul>

            <AniLink paintDrip to="app/profile" hex="#663399">
                Go back to Details
            </AniLink>
        </View>
    );
};

export default Details;
