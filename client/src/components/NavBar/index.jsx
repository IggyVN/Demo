import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

const NavBar = ({ nav, setNav }) => {
    const p = useLocation();
    let opacity = nav ? "1" : "0";
    let transitionDelay = nav ? "0.5s" : "0s";
    return (
        <div className="nav">
            <div
                className="top"
                style={{
                    opacity: opacity,
                    transitionProperty: "opacity",
                    transitionDelay: transitionDelay,
                }}
            >
                <div className="logo">
                    <img
                        src="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/305629391_614522767042544_2353778875476360919_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=WYpjs2iY4cYAX_folKn&_nc_ht=scontent.fvca1-4.fna&_nc_e2o=s&oh=00_AfD56mtt5Mx1mML6hwoCnSOWpFOmlJ89Dy4ArYbS9kH8ZQ&oe=6528FA1D"
                        alt="logo"
                    />
                </div>
                <div className="info">
                    <h3>Quản lý dự án</h3>
                    <p>WorkSpace</p>
                </div>
                <div className="icon" onClick={() => setNav(false)}>
                    <i className="bx bx-chevron-left"></i>
                </div>
            </div>
            <div
                className="mid"
                style={{
                    opacity: opacity,
                    transitionProperty: "opacity",
                    transitionDelay: transitionDelay,
                }}
            >
                <Link
                    to={"/activate"}
                    className={`item ${p.pathname === "/activate" ? "active" : ""
                        }`}
                >
                    <i className="bx bx-run"></i>
                    <p>Hoạt động</p>
                </Link>

                <div className="line"></div>
                <Link
                    to={"/"}
                    className={`item ${p.pathname === "/" ? "active" : ""}`}
                >
                    <i className="bx bx-home"></i>
                    <p>Tổng quan</p>
                </Link>
                <Link
                    to={"/board"}
                    className={`item ${p.pathname.startsWith("/board") ? "active" : ""
                        }`}
                >
                    <i className="bx bx-grid-alt"></i>
                    <p>Dự án</p>
                </Link>
                <div className="item">
                    <i className="bx bx-calendar-minus"></i>
                    <p>Lịch trình</p>
                </div>
            </div>

            <div
                className="bot"
                style={{
                    opacity: opacity,
                    transitionProperty: "opacity",
                    transitionDelay: transitionDelay,
                }}
            >
                {/* <div className="item">
                    <i className="bx bx-help-circle"></i>
                    <p>Giúp đỡ</p>
                </div> */}
                <div className="item">
                    <i className="bx bx-cog"></i>
                    <p>Cài đặt</p>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
