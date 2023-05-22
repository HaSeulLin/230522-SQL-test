import React, { useState } from "react";

import { auth } from "../database/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/userSlice";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate("");

    const user = useSelector((state) => (state.user.user));
    const dispatch = useDispatch();

    // 회원가입
    const createAccount = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // 회원가입 성공
                const user = userCredential.user;
                dispatch(login(user))
                alert('회원가입에 성공했습니다. 새로 로그인 해주세요.')
            })
            .catch((error) => {
                // 회원가입 실패
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                if (errorCode === "auth/email-already-in-use") {
                    alert("동일한 이메일이 이미 존재합니다.");
                } else if (errorCode === "auth/weak-password") {
                    alert("비밀번호는 6자리 이상으로 설정해 주세요.");
                } else {
                    navigate('/');
                }
            });
    };
    // 로그인 (비동기 함수)
    const onLogin = () => {
        async function getLogin() {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                dispatch(login(user))
                navigate('/main');
            }
            catch (error) {
                // 로그인 실패
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                navigate('/');
            };
        }
        getLogin();
    };

    return (
        <div className="loginform">
            <h1>로그인 또는 회원가입 페이지입니다</h1>
            <form action="" onSubmit={createAccount}>
                <label htmlFor="">이메일</label>
                <input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <br />
                <label htmlFor="">비밀번호</label>
                <input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}    
                />
                <div className="loginform-btn">
                    <input type="submit" value="회원가입"  className='button'/>
                    <button type="button"
                        onClick={onLogin} className='button'
                    >로그인</button>
                </div>
            </form>
        </div>
    );
}
