import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import MobileHeadImage from "../../../assets/images/home/mobile/head-background.png";
import HeadLogo from "../../../assets/images/home/mobile/head-logo.png";
// import HeadButton from "../../../assets/images/home/mobile/head-button.png";
// import HeadIosButton from "../../../assets/images/home/mobile/head-ios-button.png";
import HeadPhone from "../../../assets/images/home/window/head-phone.png";

import PopShotImg from "../../../assets/images/home/window/PopShots.png"

import HeadButton from "../../../assets/images/home/window/head-button.png";
import HeadIosButton from "../../../assets/images/home/window/head-ios-button.png";

class MobileHeadArea extends React.Component<any, any> {
  state = { type: "" };

  jumpOut = (webUrl: any) => {
    window.open(webUrl);
  };

  judgePhoneType = () => {
    const ua = navigator.userAgent || "";
    let isAndroid = ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1; //android终端
    let isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    let type = "";
    if (isAndroid) {
      type = "android";
    }
    if (isIOS) {
      type = "ios";
    }
    this.setState({
      type: type,
    });
  };

  componentDidMount() {
    this.judgePhoneType();
  }

  goAndroid = () => {
    const query =
      window.location.href.split("?")[1] == undefined
        ? ""
        : "?" + window.location.href.split("?")[1];
    let url = `popshot://www.popshots.xyz/addfriends${query}`;
    let ifr = document.createElement("iframe");
    ifr.setAttribute("src", url); /***打开app的协议，有an同事提供***/
    ifr.style.display = "none";
    document.body.appendChild(ifr);

    // setTimeout(function () {
    //   location.href = "market://details?id=com.start.pop";
    // }, 3000);
  };

  render() {
    if (this.state.type == "android") {
      this.goAndroid();
    }
    const evokeByLocation = () => {
      const query =
        window.location.href.split("?")[1] == undefined
          ? ""
          : "?" + window.location.href.split("?")[1];
      if (this.state.type == "android") {
        let url = `https://www.popshots.xyz/addfriends${query}`;
        window.location.href = url;
      } else if (this.state.type == "ios") {
        let url = `https://www.popshots.xyz/addfriends${query}`;
        window.location.href = url;
      }
    };
    const radioActive = () => {
      evokeByLocation();
    };
    return (
      <>
        
        <MobileHeadBlock>
        <Qvideo>
        <video
              autoPlay
              preload="auto"
              controlsList="nodownload"
              muted
              loop
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="./qvideoMobile.mp4"
                type="video/mp4"
                data-wf-ignore="true"
              />
              您的浏览器不支持 video 标签。
            </video>
        </Qvideo>
          <PopText>
            <PopLogo src={HeadLogo}></PopLogo>
          </PopText>
          <PopLogoText src={PopShotImg}></PopLogoText>
              <PopContent>Share anything, anytime, anywhere.</PopContent>
          <PopButton
            src={this.state.type == "ios" ? HeadIosButton : HeadButton}
            onClick={() => {
              radioActive();
            }}
          />
          <PopAnnotations>
            <div
              onClick={this.jumpOut.bind(
                this,
                "https://www.app-privacy-policy.com/live.php?token=yvVQTONdZyKEBQn3zholTUcedrY9SpO5"
              )}
            >
              Terms of Service
            </div>
            <div> & </div>
            <div
              onClick={this.jumpOut.bind(
                this,
                "http://privacypolicy.popshots.io/"
              )}
            >
              Privacy Policy.
            </div>
          </PopAnnotations>
        </MobileHeadBlock>
      </>
    );
  }
}

export default MobileHeadArea;

const MobileHeadBlock = styled.div`
  width: 7.5rem;
  background: #000000;
  min-height: 100vh;
  position: relative;
`;

const PopText = styled.div`
 position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1.34rem 0 0 0.94rem ;
`;
const PopLogo = styled.img`
 position: relative;
  width: 1.04rem;
  height: 1.04rem;
`;

const PopInfo = styled.div`
  margin-left: 0.2rem;
`;
const PopTitle = styled.div`
  font-size: 0.4rem;
  font-weight: bold;
  color: #232028;
  line-height: 0.4rem;
  margin-bottom: 0.03rem;
`;
const PopContent = styled.div`
 position: relative;
  font-size: 0.24rem;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 0.24rem;
  margin-top: 0.4rem;
  text-align: center;
`;
const PopButton = styled.img`
 position: relative;
  display: block;
  width: 4.64rem;
  margin: 0.94rem auto 0 auto;
  
`;

const PopPhone = styled.img`
  width: 6.3rem;
  height: 10.42rem;
  display: block;
  margin-top: 0.78rem;
  margin-left: 0.2rem;
`;

const PopAnnotations = styled.div`
 position: relative;
  display: flex;
  justify-content: center;
  font-size: 0.2rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.2rem;
  text-align: center;
  padding: 0.84rem 0 0.56rem 0;
`;

const PopLogoText = styled.img`
 position: relative;
  width: 5.9rem;
  display: block;
  margin: 0 auto;
  margin-top: 1.6rem;
`

const Qvideo = styled.div`
  display: block;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  video{
    width: 100%;
  }
`;
