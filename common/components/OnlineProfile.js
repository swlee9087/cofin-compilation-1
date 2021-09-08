import React from "react";
import img from "../images/beecat.jpg";
import Nav from './Nav'

const OnlineProfile = () => (<div><Nav/>
<img src={img} width="300" alt="beecat" align="center"></img>
    <h1>Siwon Lee</h1>
    <p>Email : sw_lee9087@naver.com </p>
    <h2>Who am I? </h2>
    <p>모르게쒀오. <sup>피곤하면 자오.</sup><sub><sub>자주 자오.<sub><sub>아주 많이 자오.</sub></sub></sub></sub></p>
    <hr/>
    <h2>Github    </h2>
        <ul>
            <li><a href="https://github.com/swlee9087" target="_blank">Github</a></li>
        </ul>
    <h2>Skills</h2>
    <ul>
        <li>Languages
            <ul>
                <li>Java</li>
                <li>Python</li>
                <li>HTML</li>
                <li>MySQL</li>
            </ul>
        </li>
        <li>Tools (since July 2021)
            <ul>
                <li>IntelliJ IDEA</li>
                <li>Pycharm </li>
                <li>Spring Framework</li>
                <li>Powershell</li>
                <li>GitHub</li>
                <li>Docker</li>
                <li>HeidiSQL</li>
                <li>MongoDB Compass</li>
                <li>Postman</li>
                <li>VSCode</li>
            </ul>
        </li>
    </ul>
    <h2>Academic</h2>
    <table>
        <caption>학력사항</caption>
        <thead>
            <tr>
                <th>출신학교</th>
                <th>전공</th>
                <th>기간</th>
                <th>졸업구분</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Shanghai Singapore Intl School</td>
                <td>Intl Baccalaureate</td>
                <td>2006.09 ~ 2008.06</td>
                <td>Graduated</td>
            </tr>
            <tr>
                <td>University of New South Wales</td>
                <td>Accounting</td>
                <td>2009.03 ~ 2012.11</td>
                <td>Transferred Out</td>
            </tr>
            <tr>
                <td>Lixin University of Accounting and Finance</td>
                <td>Accounting</td>
                <td>2013.09 ~ 2017.06</td>
                <td>Graduated</td>
            </tr>
        </tbody>
    </table>
</div>
)

export default OnlineProfile;