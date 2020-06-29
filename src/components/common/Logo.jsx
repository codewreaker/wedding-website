import React from "react";
import { Link } from 'gatsby'

export const Logo = () => (
    <div className="logo">
        <Link to="/contact">
            <img src="/assets/images/logo/monogram-gold-date.png" alt="MonoGram" />
        </Link>
    </div>
)

