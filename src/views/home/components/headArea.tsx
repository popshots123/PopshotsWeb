import React, { FC } from "react";
import styled from "styled-components";

import Circles from "../../../assets/images/home/window/head-background.png";
import HeadLogo from "../../../assets/images/home/window/head-logo.png";
import HeadButton from "../../../assets/images/home/window/head-button.png";
import HeadIosButton from "../../../assets/images/home/window/head-ios-button.png";

import HeadIcon1 from "../../../assets/images/home/window/head-icon1.png";
import HeadPhone from "../../../assets/images/home/window/head-phone.png";
import ContentImg from "../../../assets/images/home/window/content.png";

import PopShotImg from "../../../assets/images/home/window/PopShots.png"

const HeadArea: React.FC = () => {
  const jumpOut = (webUrl: any) => {
    console.log(webUrl);
    window.open(webUrl);
  };
  return (
    <>
      <Block>
      <Qvideo autoPlay loop muted src="./qvideo.mp4"></Qvideo>
        <FlexCenter>
          <LeftBlock>
            <PopText>
              <PopLogo src={HeadLogo}></PopLogo>
              <PopLogoText src={PopShotImg}></PopLogoText>
              <PopContent>
                <img src={ContentImg} alt="" />
              </PopContent>
            </PopText>
            <PopButton
              onClick={jumpOut.bind(
                this,
                "https://play.google.com/store/apps/details?id=com.start.pop"
              )}
              src={HeadButton}
            />
            {/* <PopButton onClick={jumpOut.bind(this, "/")} src={HeadIosButton} /> */}
            <Agreement>
            <span
                onClick={jumpOut.bind(
                  this,
                  "https://www.app-privacy-policy.com/live.php?token=yvVQTONdZyKEBQn3zholTUcedrY9SpO5"
                )}
              >
                Terms of Service
              </span>
              <span> & </span>
              <span
                onClick={jumpOut.bind(
                  this,
                  "http://privacypolicy.popshots.xyz/"
                )}
              >
                Privacy Policy.
              </span>
            </Agreement>
          </LeftBlock>
          <RightBlock>
          
            <PopAnnotations>
             
            </PopAnnotations>
          </RightBlock>
        </FlexCenter>
       
      </Block>
    </>
  );
};

export default HeadArea;

const Block = styled.div`
position: relative;
  background: #000000;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
  cursor: default;
`;

const FlexCenter = styled.div`
position: relative;
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;
`;

const LeftBlock = styled.div`
  width: 50%;
`;

const PopText = styled.div`
  /* display: flex; */
  /* align-items: center;
  justify-content: start; */
  margin-top: 1.1rem;
  margin-bottom: 0.8rem;
`;
const PopLogo = styled.img`
  width: 0.6rem;
  height: 0.6rem;
  display: block;
`;
const PopLogoText = styled.img`
  width: 4.75rem;
  margin-top: 0.3rem;
`
const PopInfo = styled.div`
  margin-left: 0.2rem;
`;
const PopTitle = styled.div`
  font-size: 0.32rem;
  font-weight: bold;
  color: #232028;
  line-height: 0.32rem;
  margin-bottom: 0.04rem;
`;
const PopContent = styled.div`
  font-size: 0.18rem;
  font-weight: 400;
  color: #EDF5F8;
  line-height: 0.3rem;
  margin-top: 0.1rem;
  img{
    width: 3.5rem;
  }
`;
const PopButton = styled.img`
  width: 2.67rem;
  margin-top: 0.3rem;
  margin-left: 0rem;
  cursor: pointer;
`;

const RightBlock = styled.div`
  width: 50%;
`;

const PopIcon1 = styled.img`
  width: 0.51rem;
  height: 0.54rem;
  display: block;
  margin-top: 0.49rem;
  margin-left: 2.5rem;
`;

const PopPhone = styled.img`
  width: 3.17rem;
  height: 5.64rem;
  display: block;
  margin-top: 0.78rem;
`;
const PopAnnotations = styled.div`
  font-size: 0.1rem;
  font-weight: 400;
  color: #232028;
  line-height: 0.1rem;
  margin-left: 1.06rem;
  margin-top: 0.35rem;
  text {
    text-decoration: underline;
  }
`;

const Qvideo = styled.video`
  display: block;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const Agreement = styled.div`
  color: #797BA0;
  margin-top: 0.8rem;
  text-align: left;
  font-size: 0.12rem;
  margin-left: 0.4rem;
  text-decoration:underline;
  cursor: pointer
`