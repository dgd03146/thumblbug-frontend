import React, { useEffect, useRef, useState, useMemo } from "react";
import styled from "styled-components";
import {
  Asterisk,
  PEForm,
  PEFormItemTitle,
  PEInfo,
  PEInfoDesc,
  PEInfoTitle,
  PEItemWrapper,
  PEFormInput,
} from "./PEStyles";
import moment from "moment";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { setRewards } from "../../redux/newPostSlice";

const PEReward = (props) => {
    const {postData} = props
    const [rewardItem, setRewardItem] = useState()
    const [fundingPrice, setFundingPrice] = useState()
    const dispatch = useDispatch()

    const rewardItemRef = useRef()
    const fundingPriceRef = useRef()

    const handleRewardItem = (e) => {
        setRewardItem(e.target.value)
    }
    const handleFundingPrice = (e) => {
        setFundingPrice(e.target.value)
    }

    console.log(postData?.rewards);
    useEffect(() => {
        console.log(postData?.title);
        console.log(rewardItem, fundingPrice);
    }, [rewardItem, fundingPrice])
  return (
    <>
      <PEItemWrapper>
        <PEInfo style={{ position: "sticky", top: "0" }}>
          <PEInfoTitle>
            내가 만든 선물
            <Asterisk />
          </PEInfoTitle>
          <RewardList>
            {postData?.rewards.map(x => {return (<li>
              <div>
                <strong>{x.fundingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</strong>
                <span>{x.rewardItem}</span>
              </div>
            </li>
            )})}
            
          </RewardList>
        </PEInfo>
        <PEForm>
          <MakeRewardWrapper>
            <div className="createitemwrap">
              <PEInfoTitle>
                선물 만들기
                <Asterisk />
              </PEInfoTitle>
              <PEInfoDesc>
                선물은 후원자에게 프로젝트의 가치를 전달하는 수단입니다. 다양한
                금액대로 여러 개의 선물을 만들어주세요. 펀딩 성공률이 높아지고,
                더 많은 후원 금액을 모금할 수 있어요.
              </PEInfoDesc>
              <PEFormItemTitle style={{ marginTop: "1em" }}>
                선물 아이템
              </PEFormItemTitle>
              <PEFormInput maxLength={50} inputRef={rewardItemRef} changeHandler={handleRewardItem}/>
              <PEFormItemTitle>최소 후원 금액</PEFormItemTitle>
              <PEFormInput inputmode={"numeric"} inputRef={fundingPriceRef} changeHandler={handleFundingPrice}/>
              <ButtonWrapper>
                <button onClick={() => {
                    rewardItemRef.current.value = ""
                    fundingPriceRef.current.value = ""
                }}>초기화</button>
                <button onClick={() => {
                    dispatch(setRewards([...postData.rewards, {
                        rewardItem: rewardItemRef.current.value,
                        fundingPrice: fundingPriceRef.current.value
                    }]))
                }}>저장</button>
              </ButtonWrapper>
            </div>
          </MakeRewardWrapper>
        </PEForm>
      </PEItemWrapper>
    </>
  );
};

const RewardList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  li {
    padding: 0px;
    list-style: none;
    overflow: hidden;
    min-height: 90px;
    height: auto;
    border-radius: 4px;
    position: relative;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(240, 240, 240);
    box-sizing: border-box;
    margin: 0px 0px 12px;
    div {
      width: 100%;
      min-height: 90px;
      padding: 24px 28px;
      text-align: left;
      box-sizing: border-box;
      border: 0px;
      background: transparent;
      & strong {
        display: block;
        font-weight: 700;
        color: rgb(61, 61, 61);
        margin: 0px 0px 8px;
        max-width: 222px;
        font-size: 20px !important;
        line-height: 28px !important;
      }
      & span {
        display: block;
        font-weight: 400;
        color: rgb(109, 109, 109);
        margin: 10px 0px 0px px;
        font-size: 12px !important;
        line-height: 20px !important;
      }
    }
  }
`;

const MakeRewardWrapper = styled.div`
  flex: 1 1 0%;
  /* margin-top: 76px; */
  .createitemwrap {
    padding: 44px 48px;
    border: 1px solid rgb(240, 240, 240);
    border-radius: 4px;
    box-sizing: border-box;
    background-color: white;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 22px 0px 0px;
  button {
    flex: 0 0 auto;
    width: 170px;
    font-size: 12px;
    line-height: 20px;
    margin: 0px 0px 0px 10px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    white-space: nowrap;
    border-radius: 1px;
    margin: 0px;
    outline: 0px;
    box-sizing: border-box;
    font-weight: normal;
    padding: 0px 24px;
    border: 1px solid rgb(240, 240, 240);
    color: rgb(61, 61, 61);
    background: rgb(255, 255, 255);
    &:first-child {
      margin-left: 0px;
      &:hover {
        border-color: rgb(228, 228, 228);
      }
    }
    &:last-child {
      flex: 1 1 0%;
      margin: 0px 0px 0px 10px;
      background-color: ${(props) => props.theme.error};
      color: white;
      &:active,
      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

export default PEReward;
