import React from "react";
import styled from "styled-components";
import Card from "../includes/Card";

function Spotlight() {
    return (
        <Container>
            <Section className="wrapper">
                <TopSection>
                    <Heading>Deals on Rice,Atta,Oil and Biscuits</Heading>
                    <Button>
                        <span>See More</span>{" "}
                        <img
                            className="arrow"
                            src={
                                require("../../assets/images/images/arrow-right.svg")
                                    .default
                            }
                            alt="arrow"
                        />
                    </Button>
                </TopSection>
                <MiddleSection>
                    <Card />
                </MiddleSection>
                <BottomSecton>
                    <LeftSection>
                        <ImgContainer>
                            <img
                                src={require("../../assets/images/images/Group 57.png")}
                                alt="image"
                            />
                        </ImgContainer>
                        <Div>
                            <Images>
                                <Img
                                    src={require("../../assets/images/images/189-1896593_logo-nestle-png-transparent-png.png")}
                                    className="nestle"
                                    alt="nestle"
                                />
                                <Imgs
                                    src={require("../../assets/images/images/amul-logo-636E7B5DCD-seeklogo.com.png")}
                                    className="amul"
                                    alt="image"
                                />
                            </Images>
                            <Title>Chocolates and biscuits</Title>
                            <Free>get up to 20%</Free>
                        </Div>
                    </LeftSection>
                    <RightSection>
                        <One>
                            <Left>
                                <H6>Farmlite oats</H6>
                                <Off>instant 10% off</Off>
                            </Left>
                            <Right className="right">
                                <ImgSection>
                                    <img
                                        src={require("../../assets/images/images/chocolate-variant-500x500.png")}
                                        alt="image"
                                    />
                                </ImgSection>
                                <Nolta
                                    src={require("../../assets/images/images/download (2).png")}
                                    alt="image"
                                />
                            </Right>
                        </One>
                        <One className="items">
                            <Left className="left">
                                <ImgSection className="dalda">
                                    <img
                                        src={require("../../assets/images/images/chocolate-variant-500x500.png")}
                                        alt="image"
                                    />
                                </ImgSection>
                                <Nolta
                                    className="nolta"
                                    src={require("../../assets/images/images/Image 136.png")}
                                    alt="image"
                                />
                            </Left>
                            <Right>
                                <H6>dalda oil range</H6>
                                <Off>flat 100 savings</Off>
                            </Right>
                        </One>
                    </RightSection>
                </BottomSecton>
            </Section>
        </Container>
    );
}

export default Spotlight;
const Container = styled.div`
    width: 100%;
    padding: 40px 0;
    height: 100vh;
`;
const Section = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;
const TopSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Heading = styled.h2`
    width: 80%;
    font-size: 35px;
    font-weight: 600;
    @media all and (max-width: 768px) {
        font-size: 25px;
    }
    @media all and (max-width: 640px) {
        font-size: 20px;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
    @media all and (max-width: 360px) {
        font-size: 18px;
    }
`;
const Button = styled.div`
    width: 20%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    span {
        color: #000;
        font-weight: 500;
        @media all and (max-width: 768px) {
            font-size: 13px;
        }
    }
    img.arrow {
        display: block;
        width: 30px;
        @media all and (max-width: 768px) {
            width: 18px;
        }
    }
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const MiddleSection = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 980px) {
        overflow: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    @media all and (max-width: 480px) {
        flex-direction: column;
    }
`;
const BottomSecton = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1080px) {
        flex-wrap: wrap;
    }
`;
const Div = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media all and (max-width: 1080px) {
        width: 300px;
    }
    @media all and (max-width: 980px) {
        margin-left: 30px;
    }
    @media all and (max-width: 480px) {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media all and (max-width: 360px) {
        width: 249px;
    }
`;
const Title = styled.h5`
    color: #302e2e;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 15px;
    letter-spacing: 0.01rem;
    bottom: 25px;
    left: 7px;
    position: absolute;
    @media all and (max-width: 480px) {
        left: 70px;
    }
    @media all and (max-width: 360px) {
        left: 47px;
    }
`;
const Free = styled.div`
    background-color: #017f01;
    color: #fff;
    text-align: center;
    width: 160px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    text-transform: capitalize;
    @media all and (max-width: 1280px) {
        width: 141px;
        text-transform: capitalize;
        font-size: 12px;
        margin-left: 8px;
    }
    @media all and (max-width: 1080px) {
        width: 171px;
        padding: 4px;
    }
`;
const LeftSection = styled.div`
    padding: 20px 50px;
    width: 58%;
    background-color: #eef3e9;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media all and (max-width: 1080px) {
        width: 100%;
        margin-bottom: 30px;
    }
    @media all and (max-width: 480px) {
        padding: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
const ImgContainer = styled.div`
    width: 350px;
    @media all and (max-width: 1280px) {
        width: 255px;
    }
    @media all and (max-width: 1080px) {
        width: 330px;
    }
    @media all and (max-width: 360px) {
        width: 200px;
    }
`;
const Images = styled.div`
    position: relative;
    display: flex;
`;
const Img = styled.img`
    width: 100px;
    @media all and (max-width: 1080px) {
        width: 150px;
    }
`;
const Imgs = styled.img`
    top: 10px;
    width: 35px;
    left: 73px;
    position: absolute;
    @media all and (max-width: 1080px) {
        top: 18px;
        width: 43px;
        left: 106px;
    }
`;
const RightSection = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    @media all and (max-width: 1080px) {
        width: 100%;
        margin-bottom: 30px;
        flex-direction: row;
        justify-content: space-between;
    }
    @media all and (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

const One = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e1f6e1;
    &:last-child {
        margin-bottom: 0;
    }
    @media all and (max-width: 1080px) {
        width: 48%;
        &:first-child {
            margin-bottom: 0;
        }
    }
    @media all and (max-width: 768px) {
        width: 100%;
        &:first-child {
            margin-bottom: 30px;
        }
    }
    @media all and (max-width: 480px) {
        flex-direction: column-reverse;
        padding: 40px 0;
    }
    &.items {
        flex-direction: column;
        padding: 40px 0;
    }
`;
const Left = styled.div`
    width: 40%;
    padding: 25px 20px;
    &.left {
        padding: 5px 0;
        position: relative;
    }
    @media all and (max-width: 980px) {
        padding: 25px 0 21px 16px;
    }
    @media all and (max-width: 768px) {
        width: 45%;
    }
    @media all and (max-width: 480px) {
        padding: 0;
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
`;
const H6 = styled.h6`
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 10px;
`;
const Off = styled.span`
    background-color: #357756;
    color: #fff;
    font-size: 14px;
    padding: 5px 10px;
    text-transform: capitalize;
`;
const Right = styled.div`
    width: 40%;
    position: relative;
    padding: 5px 0;
    @media all and (max-width: 360px) {
        width: 42%;
    }
    &.right {
        @media all and (max-width: 768px) {
            width: 45%;
        }
        @media all and (max-width: 480px) {
            width: 56%;
        }
    }
`;
const ImgSection = styled.div`
    width: 180px;
    @media all and (max-width: 1280px) {
        width: 129px;
    }
    &.dalda {
        margin-left: 30px;
        @media all and (max-width: 768px) {
            margin-left: 15px;
        }
        @media all and (max-width: 480px) {
            margin-left: 0px;
        }
    }

    @media all and (max-width: 768px) {
        width: 180px;
    }
`;
const Nolta = styled.img`
    width: 40px;
    position: absolute;
    right: 0;
    top: 7px;
    @media all and (max-width: 480px) {
        right: -66px;
        top: -24px;
    }
    &.nolta {
        position: absolute;
        width: 69px;
        left: -6px;
        top: -7px;
        @media all and (max-width: 480px) {
            left: 2px;
            top: -31px;
        }
    }
`;
