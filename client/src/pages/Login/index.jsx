import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loginThunk from "../../redux/thunk/login";

const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const { auth } = useSelector((state) => state);

    const dispatch = useDispatch();

    function handleChangeInput(e) {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(loginThunk(login));
    }

    useEffect(() => {
        if (auth?.user) {
            navigate("/");
        }
    }, [auth?.user, navigate]);

    return (
        <div className="login-page">
            <form onSubmit={handleSubmit}>
                <div className="logo">
                    <img
                        src="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/305629391_614522767042544_2353778875476360919_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=WYpjs2iY4cYAX_folKn&_nc_ht=scontent.fvca1-4.fna&_nc_e2o=s&oh=00_AfD56mtt5Mx1mML6hwoCnSOWpFOmlJ89Dy4ArYbS9kH8ZQ&oe=6528FA1D"
                        alt="logo"
                    />
                </div>
                <h2 className="name">Quản lý dự án</h2>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Email"
                        value={login.email}
                        name="email"
                        onChange={handleChangeInput}
                        required
                    />
                    <i className="bx bxs-envelope"></i>
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                        value={login.password}
                        onChange={handleChangeInput}
                        autoComplete="on"
                        required
                    />
                    <i className="bx bxs-lock-alt"></i>
                </div>
                <button>Đăng nhập</button>
                <a href="/">Quên mật khẩu</a>
                <p>
                    Bạn chưa có tài khoản?{" "}
                    <Link to={"/register"}>Đăng kí tại đây</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
