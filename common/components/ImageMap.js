import React from "react";
import img from "../images/kids.jpg"

const ImageMap = () => (
<div>
    <img src={img} alt="" usemap="#favorites"/>
    <map name="favorites">
        <area shape="rect" coords="10,10,160,200" href="http://cafe.naver.com/" target="_blank" alt="Naver Cafe"/>
        <area shape="rect" coords="220,10,380,200" href="http://Facebook.com/" target="_blank" alt="Facebook"/>
    </map>
</div>
)
export default ImageMap;