import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import View from "../components/View";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Index = () => (
    <Layout>
        <View title="Simple Authentication Example">
            <p>
                For the full experience, go to
                {` `}
                <Link to="/app/profile">your profile</Link>.
            </p>

            <AniLink paintDrip to="index2" hex="#663399">
                Go to index2
            </AniLink>
        </View>
    </Layout>
);

export default Index;
