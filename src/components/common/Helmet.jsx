import React from "react";
import { Helmet } from 'react-helmet'

const PageHelmet = ({ pageTitle }) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{pageTitle ||  "Izzy n Inshi"}</title>
                <meta name="description" content="Wedding website for Israel and Nhyira" />
            </Helmet>
        </React.Fragment>
    )
}

export default PageHelmet;