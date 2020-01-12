import React from "react";
import View from "./View";
import { getCurrentUser } from "../utils/auth";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Profile = () => {
    const { name } = getCurrentUser();

    return (
        <View title="Your Profile">
            <p>Welcome back to your profile, {name}!</p>
            <p>
                This is a client-only route. You could set up a form to save
                information about a user here.
            </p>

            <AniLink paintDrip to="app/details" hex="#663399">
                Go back to Details
            </AniLink>
        </View>
    );
};

export default Profile;
