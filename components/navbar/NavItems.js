import React, { useState } from "react";
import Link from "next/link";
import { FcApproval, FcIdea, FcFinePrint, FcCollaboration, FcNews } from "react-icons/fc";
import { RiArrowDropDownLine } from "react-icons/ri";
export const Discover = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <li className="nav-item dropdown discover" onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <a className="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <h3>Discover</h3>
                <RiArrowDropDownLine fontSize="2rem"></RiArrowDropDownLine>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul className="dropdown-container">
                    <li className="dropdown-subcontainer">
                        <Link href="/who_we_are" className="dropdown-item">
                            <FcFinePrint fontSize="2rem"></FcFinePrint>
                            <div>
                                <h4>Who we are?</h4>
                                <p>
                                    Get to Know the E-Cell,
                                    <br />
                                    who we are and what we do.
                                </p>
                            </div>
                        </Link>
                        <Link href="/events" className="dropdown-item">
                            <FcFinePrint fontSize="2rem"></FcFinePrint>
                            <div>
                                <h4>Events</h4>
                                <p>
                                    Discover the buzzing events
                                    <br />
                                    happening throughout the year!
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className="dropdown-subcontainer">
                        <Link href="/gallery" className="dropdown-item">
                            <FcFinePrint fontSize="2rem"></FcFinePrint>
                            <div>
                                <h4>Gallery</h4>
                                <p>
                                    A glimpse of our culture through <br /> our E-Album!
                                </p>
                            </div>
                        </Link>
                        <Link href="/team" className="dropdown-item">
                            <FcFinePrint fontSize="2rem"></FcFinePrint>
                            <div>
                                <h4>Meet the team</h4>
                                <p>
                                    Get to know the Core Team <br /> of E-Cell.
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className="dropdown-subcontainer">
                        <Link href="/past_speakers" className="dropdown-item">
                            <FcFinePrint fontSize="2rem"></FcFinePrint>
                            <div>
                                <h4>Past speakers</h4>
                                <p>
                                    Witness our expansive lineup of <br /> prominent speakers and guests!
                                </p>
                            </div>
                        </Link>
                        <a className="dropdown-item" href="https://esummit.ecelliitbhu.com/sponsors/index.html" target="_blank" rel="noopener noreferrer">
                            <FcFinePrint fontSize="2rem"></FcFinePrint>
                            <div>
                                <h4>Sponsors and Associates</h4>
                                <p>
                                    Meet our facilitators who support us <br />
                                    to make the best of E-Cell!
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    );
};

export const Initiatives = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <li className="nav-item dropdown design" onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <a className="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <h3>Initiatives</h3>
                <RiArrowDropDownLine fontSize="2rem"></RiArrowDropDownLine>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul className="dropdown-container">
                    <li className="dropdown-subcontainer">
                        <a className="dropdown-item" href="/grow-your-resume" target="_blank" rel="noopener noreferrer">
                            <FcApproval fontSize="2rem"></FcApproval>
                            <div>
                                <h4>Grow Your Resume</h4>
                                <p>
                                    Reach out to us for getting interns
                                    <br /> for your budding startup!
                                </p>
                            </div>
                        </a>

                        <a className="dropdown-item" href="https://ecelliitbhu.notion.site/Startup-Services-Portal-33cd37c10e204f7c9b1cd2c465016429" target="_blank" rel="noopener noreferrer">
                            <FcApproval fontSize="2rem"></FcApproval>
                            <div>
                                <h4>Startup Services Portal</h4>
                                <p>
                                    Access the startup services for IIT BHU <br /> entrepreneurs provided by E-Cell Associations.
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className="dropdown-subcontainer">
                        <a className="dropdown-item" href="https://iaan.ecelliitbhu.com">
                            <FcApproval fontSize="2rem"></FcApproval>
                            <div>
                                <h4>IIT BHU Alumni Angel Network</h4>
                                <p>
                                    An initiative by IIT BHU Alumni
                                    <br /> and E-Cell IIT BHU
                                </p>
                            </div>
                        </a>

                        <Link href="/mentorship_pool" passHref className="dropdown-item">
                            <FcApproval fontSize="2rem"></FcApproval>
                            <div>
                                <h4>Startup Mentor Pool</h4>
                                <p>
                                    {`Elevate Your Journey:`}
                                    <br /> {`Join Our Startup Mentor Pool for Guided Success!`}
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className="dropdown-subcontainer">
                        <Link href="/cd" passHref className="dropdown-item">
                            <FcApproval fontSize="2rem"></FcApproval>
                            <div>
                                <h4>
                                    Campus Ambassador's <br /> Program
                                </h4>
                                <p>
                                    {`Join our initiative of creating & motivating`}
                                    <br /> {`the entrepreneurs of your college!`}
                                </p>
                            </div>
                        </Link>
                        <Link href="/coming_soon" passHref className="dropdown-item">
                            <FcApproval fontSize="2rem"></FcApproval>
                            <div>
                                <h4>Scale</h4>
                                <p>
                                    Link with alumni, use our incubators,
                                    <br />
                                    pitch to Angel Investors & VCs!
                                </p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </li>
    );
};

export const Incubators = () => {
    return (
        <li className="nav-item dropdown contact-nav">
            <Link href="/IncubatorsMain" passHref className="nav-link">
                <h3>Incubators</h3>
            </Link>
        </li>
    );
};

export const Connect = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <li className="nav-item connect" onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <a className="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <h3>Connect</h3>
                <RiArrowDropDownLine fontSize="2rem"></RiArrowDropDownLine>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul className="dropdown-container">
                    <li className="dropdown-subcontainer">
                        <a className="dropdown-item" href="https://wa.me/+918793177332" target="_blank" rel="noopener noreferrer">
                            <FcCollaboration fontSize="2rem"></FcCollaboration>
                            <div>
                                <h4>For students</h4>
                                <p>
                                    Connect with us to request for <br /> any kind of startup assistance.
                                </p>
                            </div>
                        </a>

                        <a className="dropdown-item" href="https://wa.me/+919120787959" target="_blank" rel="noopener noreferrer">
                            <FcCollaboration fontSize="2rem"></FcCollaboration>
                            <div>
                                <h4>For startups</h4>
                                <p>
                                    Reach out to us for any startup assistance/ <br /> guidance/ referral and other opportunities!
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className="dropdown-subcontainer">
                        <a className="dropdown-item" href="https://wa.me/+918793177332" target="_blank" rel="noopener noreferrer">
                            <FcCollaboration fontSize="2rem"></FcCollaboration>
                            <div>
                                <h4>For alumni</h4>
                                <p>
                                    We’d love to network with our alums <br /> working towards the same cause!
                                </p>
                            </div>
                        </a>

                        <a className="dropdown-item" href="https://wa.me/+919120787959" target="_blank" rel="noopener noreferrer">
                            <FcCollaboration fontSize="2rem"></FcCollaboration>
                            <div>
                                <h4>For Investor and VCs</h4>
                                <p>
                                    Reach out to us for the full database of <br /> IIT BHU Entrepreneurs looking to raise funds!
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className="dropdown-subcontainer">
                        <a className="dropdown-item" href="https://wa.me/+918793177332" target="_blank" rel="noopener noreferrer">
                            <FcCollaboration fontSize="2rem"></FcCollaboration>
                            <div>
                                <h4>For corporates</h4>
                                <p>
                                    We welcome all Corporate <br /> collaborations and CSR Initiatives to
                                    <br />
                                    strengthen the startup community!
                                </p>
                            </div>
                        </a>
                        <a className="dropdown-item" href="https://wa.me/+918793177332" target="_blank" rel="noopener noreferrer">
                            <FcCollaboration fontSize="2rem"></FcCollaboration>
                            <div>
                                <h4>For internship listing</h4>
                                <p>
                                    Reach out to us to list your <br /> intership for hiring.
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    );
};
export const Learn = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <li className="nav-item dropdown learn" onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <h3>Learn</h3>
                <RiArrowDropDownLine fontSize="2rem"></RiArrowDropDownLine>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul className="dropdown-container">
                    <li className="dropdown-subcontainer">
                        <Link href={"/startup_help_book"} className="dropdown-item">
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}

                            <div>
                                <FcNews fontSize="2rem"></FcNews>
                                <div>
                                    <h4>Startup HelpBook</h4>
                                    <p>
                                        The Ultimate Guidebook for young <br /> entrepreneurs on starting up!
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <a className="dropdown-item" href="https://www.notion.so/ecelliitbhu/Entrepreneurship-Library-44a56c8083a24f9688554483b1aa3717" target="_blank" rel="noopener noreferrer">
                            <FcNews fontSize="2rem"></FcNews>
                            <div>
                                <h4>Resource Library</h4>
                                <p>
                                    Your go-to encyclopedia for all startup
                                    <br />
                                    resources- All at one place!
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className="dropdown-subcontainer">
                        <Link href="https://medium.com/ecelliitbhu/feature/home" className="dropdown-item" target="_blank" rel="noopener noreferrer">
                            <FcNews fontSize="2rem"></FcNews>
                            <div>
                                <h4>Blogs</h4>
                                <p>
                                    Visit the Official E-Cell <br /> Medium Blog
                                </p>
                            </div>
                        </Link>
                        <Link className="dropdown-item" href="https://issuu.com/ecelliitbhu" target="_blank" rel="noopener noreferrer">
                            <FcNews fontSize="2rem"></FcNews>
                            <div>
                                <h4>E-Digest Magazine</h4>
                                <p>
                                    Glance through the E-Cell <br />
                                    Quarterly Magazine{" "}
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className="dropdown-subcontainer">
                        <Link className="dropdown-item" href="https://ecelliitbhu.substack.com" target="_blank" rel="noopener noreferrer">
                            <FcNews fontSize="2rem"></FcNews>
                            <div>
                                <h4>Newsletter Archives</h4>
                                <p>
                                    Visit our E-Cell’s Weekly Newsletter <br />
                                    archive on Substack
                                </p>
                            </div>
                        </Link>
                        <Link href={"/FAQs"} className="dropdown-item">
                            <FcNews fontSize="2rem"></FcNews>
                            <div>
                                <h4>Frequently Asked Questions</h4>
                                <p>
                                    Get all your startup/ E-Cell <br /> related doubts answered!
                                </p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </li>
    );
};
export const Contact = () => {
    return (
        <li className="nav-item dropdown contact-nav">
            <Link href="/contacts" passHref className="nav-link">
                <h3>Contact</h3>
            </Link>
        </li>
    );
};
export const Team = () => {
    return (
        <li className="nav-item dropdown contact-nav">
            <Link href="/team" passHref className="nav-link">
                <h3>Team</h3>
            </Link>
        </li>
    );
};
export const Startups = () => {
    return (
        <li className="nav-item dropdown startups-nav">
            <Link href="/startups" passHref className="nav-link">
                <h3>Startups</h3>
            </Link>
        </li>
    );
};
