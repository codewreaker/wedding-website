import React from "react";
import {Link} from 'gatsby';

const payments = '/payments';
const Giving = ({ branstyle, func }) => {
    const givingOptions = [
        { img: "/assets/images/brand/payments.png", url: payments, alt: 'Cash Gift', func: console.log },
        { img: "/assets/images/brand/bank.png", url: '#giving', alt: 'In Person', func:(e)=>{
            e.preventDefault()
            func({bool:true, desc: 'Account Details'}) }
        },
        { img: "/assets/images/brand/zola.png", url: 'https://prezola.com/wishlists/10224144/', alt: 'Zola', func: console.log },
        { img: "/assets/images/brand/amazon.png", url: 'https://www.amazon.co.uk/wedding/share/izzynshilovely', alt: 'Amazon', func: console.log },
    ]
    return (
        <React.Fragment>
            <ul className={`brand-list ${branstyle}`}>
                {givingOptions.map(({ img, url, alt, func }, idx) => (
                    <li key={`giving-${idx}`} onClick={(e)=>func(e, url)}>
                        <Link to={url} target="_blank"><img src={img} alt={alt} /></Link>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
}
export default Giving;
