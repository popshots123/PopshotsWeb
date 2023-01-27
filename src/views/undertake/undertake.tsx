import React from "react";
import styled from "styled-components";
import HeadLogo from "../../assets/images/home/mobile/head-logo.png";
import PopShotImg from "../../assets/images/home/window/PopShots.png";
import { getLink } from "../../api/undertake";

class UndertakeView extends React.Component<any, any> {
  state = { type: "" };

  init = () => {
    let location = window.location;
    let search = location.hash.split("?s=");
    console.log(search[1]);
    this.getGoUrl(search[1]);
  };

  getGoUrl = async (data:any) => {
    let query = {
      shortUrl: data,
    };

    let info = await getLink(query);
    if(info.code === 200 && info.data != ''){
      console.log(info)
      window.location.href = info.data
    }else{
        alert(info.msg)
    }
  };


  componentDidMount() {
    this.init()
  }

  render() {
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
        </MobileHeadBlock>
      </>
    );
  }
}

export default UndertakeView;

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
  padding: 1.34rem 0 0 0.94rem;
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
  color: #ffffff;
  line-height: 0.24rem;
  margin-top: 0.4rem;
  text-align: center;
`;
const PopButton = styled.img`
  position: relative;
  display: block;
  /* width: 3.8rem; */
  height: 1.04rem;
  margin: 1.9rem auto 0 auto;
`;

const PopPhone = styled.img`
  width: 6.3rem;
  height: 10.42rem;
  display: block;
  margin-top: 0.78rem;
  margin-left: 0.2rem;
`;

const PopAnnotations = styled.div`
  position: absolute;
  bottom: 0.1rem;

  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 0.14rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.2rem;
  text-align: center;
  padding: 0.84rem 0 0.56rem 0;
  color: #2e7e8f;
  text-decoration: underline;
`;

const PopLogoText = styled.img`
  position: relative;
  width: 5.9rem;
  display: block;
  margin: 0 auto;
  margin-top: 1.6rem;
`;

const Qvideo = styled.div`
  display: block;
  width: 120%;
  position: absolute;
  bottom: 0;
  left: -1.6rem;
  video {
    width: 100%;
  }
`;
