import React, { useState } from "react";
import styled from "styled-components";

function Card() {
    const [count, setCount] = useState(1);
    if (count <= 0) {
        setCount(1);
    }
    const [items, setItems] = useState([
        {
            id: 1,
            save: "Save 20",
            image: require("../../assets/images/images/152-1522601_india-gate-basmati-rice-mini-mogra-10kg-price.png"),
            price: "380",
            dot: require("../../assets/images/images/Image 140.png"),
            title: "india gate rice 5kg",
        },
        {
            id: 2,
            save: "Save 42",
            image: require("../../assets/images/images/Image 143.png"),
            price: "123",
            dot: require("../../assets/images/images/Image 140.png"),
            title: "momos fillings",
            img: require("../../assets/images/images/download (2).png"),
        },
        {
            id: 3,
            save: "Save 8",
            image: require("../../assets/images/images/61dWH4rYxRL._SL1000_.png"),
            price: "70",
            dot: require("../../assets/images/images/Image 140.png"),
            title: "fine basen 1kg",
        },
        {
            id: 4,
            save: "Save 22",
            image: require("../../assets/images/images/MG_FOP.png"),
            price: "58",
            dot: require("../../assets/images/images/Image 140.png"),
            title: "aashirvad aatta 1kg",
            img: require("../../assets/images/images/download (2).png"),
        },
        {
            id: 5,
            save: "Save 105",
            image: require("../../assets/images/images/Sunflower-Oil.png"),
            price: "675",
            dot: require("../../assets/images/images/Image 140.png"),
            title: "gulab cooking oil",
        },
    ]);
    return (
        <>
            {items.map((data) => (
                <Container>
                    <Top>
                        <Badge>
                            <img src={data.img} alt="" />
                        </Badge>
                        <Save>{data.save}</Save>
                    </Top>
                    <ImgContainer>
                        <img src={data.image} alt="image" />
                    </ImgContainer>
                    <PriceSection>
                        <Price>${data.price}</Price>
                        <DotContainer>
                            <img src={data.dot} alt="" />
                        </DotContainer>
                    </PriceSection>
                    <Title>{data.title}</Title>
                    <QuantitySection>
                        <LeftSection>
                            QTY{" "}
                            <Count onClick={() => setCount(count - 1)}>-</Count>{" "}
                            <span>{count}</span>
                            <Count onClick={() => setCount(count + 1)}>+</Count>
                        </LeftSection>
                        <RightSection>Add to Cart</RightSection>
                    </QuantitySection>
                </Container>
            ))}
        </>
    );
}

export default Card;
const Container = styled.div`
    width: calc(19% - 10px);
    display: flex;
    flex-direction: column;
    border: 1px solid #888;
    padding: 10px 10px 10px 16px;
    max-height: 290px;
    height: 290px;
    justify-content: space-between;
    @media all and (max-width: 980px) {
        width: 40%;
        margin-right: 30px;
    }
    @media all and (max-width: 480px) {
        width: 90%;
        margin-bottom: 20px;
        margin-right: 0;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Badge = styled.div`
    width: 40px;
    @media all and (max-width: 1280px) {
        width: 20px;
    }
`;
const Save = styled.span`
    color: #017f01;
    font-weight: 500;
    @media all and (max-width: 1280px) {
        font-size: 12px;
    }
`;
const ImgContainer = styled.div`
    height: 130px;
    max-height: 130px;
    margin: 0 auto;
    width: 150px;
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    @media all and (max-width: 1280px) {
        height: 114px;
        max-height: 114px;
        margin: 0 auto;
        width: 115px;
    }
`;
const PriceSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Price = styled.div`
    color: #000;
    font-weight: 900;
`;
const DotContainer = styled.div`
    width: 20px;
`;
const Title = styled.h4`
    font-size: 16px;
    text-transform: capitalize;
    color: #000;
    font-weight: 600;
    @media all and (max-width: 980px) {
        font-size: 13px;
    }
    @media all and (max-width: 480px) {
        font-size: 16px;
    }
`;
const QuantitySection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 210px;
    @media all and (max-width: 1280px) {
        width: 100%;
        flex-direction: column;
    }
`;
const LeftSection = styled.div`
    font-weight: 500;
    width: 90px;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 768px) {
        font-size: 13px;
    }
    span {
        font-weight: 600;
    }
`;
const Count = styled.span`
    cursor: pointer;
`;
const RightSection = styled.div`
    background-color: #017f01;
    width: 100px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: #fff;
    padding: 2px;
    @media all and (max-width: 1280px) {
        width: 100%;
        margin-top: 10px;
    }
    @media all and (max-width: 980px) {
        font-size: 13px;
    }
`;
