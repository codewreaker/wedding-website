import React, { useEffect } from "react";

const monzoLink = 'https://monzo.me/israelagyemanprempeh/50.00?d=Your%20presence%20at%20our%20wedding%20is%20all%20that%20we%20wished%20for,%20we%20are%20grateful%20for%20this%20cash%20donation%20toward%20our%20new%20journey.%20Please%20do%20adjust%20the%20amount%20as%20needed'
const Giving = ({ branstyle }) => {
    const givingOptions = [
        { img: "/assets/images/brand/payments.png", url: monzoLink, alt: 'Cash Gift', func: console.log },
        { img: "/assets/images/brand/amazon.png", url: 'https://www.amazon.com/wedding/share/izzyninshi', alt: 'Amazon', func: console.log },
        { img: "/assets/images/brand/zola.png", url: 'https://prezola.com/wishlists/10224144/', alt: 'Zola', func: console.log },
        { img: "/assets/images/brand/brand-01.png", url: '#', alt: 'In Person', func: console.log }
    ]
    return (
        <React.Fragment>
            <ul className={`brand-list ${branstyle}`}>
                {givingOptions.map(({ img, url, alt, func }, idx) => (
                    <li key={`giving-${idx}`} onClick={(e)=>func(e, url)}>
                        <a href={url} target="__blank"><img src={img} alt={alt} /></a>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
}
export default Giving;
