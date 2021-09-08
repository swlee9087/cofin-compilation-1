import React from "react";
import Nav from './Nav'

const Login = () => (<div>
    <h1>로그인</h1>
<form>
        <ul>
            <li>                
                <label for="id">아이디</label>                
                <input type="text" id="id" />
            </li>
            <li>
                <label for="pw">비밀번호</label>
                <input type="password" id="pw" />
            </li>
                <input type="submit" title="로그인" value="로그인" />            
        </ul>
    </form>
</div>
)
export default Login;