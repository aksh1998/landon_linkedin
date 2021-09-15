import React from 'react';
import footeLinksData from './data/footer_links.json'
const Footer = () => {
    return (
        <footer className="scene">
            <article className="content">
                <div id="socialmedia">
                    <ul className="group">
                        {
                            footeLinksData.map(links =>
                                <li><a href={links.href}><img className="icon" src={links.src} alt={links.alt} /></a></li>
                            )
                        }
                    </ul>
                </div>
            </article>
        </footer>
    );
}

export default Footer;
