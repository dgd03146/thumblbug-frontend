import React from "react"
import {
    Asterisk,
    PEForm,
    PEInfo,
    PEInfoDesc,
    PEInfoTitle,
    PEItemWrapper,
    PEFormInput,
  } from "./PEStyles"
  import { useDispatch } from "react-redux"
  import { setCreatorBiography, setCreatorName } from "../../redux/newPostSlice"

const PECreator = (props) => {
    const {postData} = props
    const dispatch = useDispatch()
    return(
        <>
        <PEItemWrapper>
        <PEInfo>
          <PEInfoTitle>
            창작자 이름
            <Asterisk />
          </PEInfoTitle>
          <PEInfoDesc>
            창작자 개인이나 팀을 대표할 수 있는 이름을 써주세요.
          </PEInfoDesc>
        </PEInfo>
        <PEForm>
          <PEFormInput
            maxLength={20}
            placeholder={"창작자님의 이름을 입력해주세요"}
            value={postData.creatorName}
            changeHandler={(e) => {
                dispatch(setCreatorName(e.target.value))
            }}
          />
        </PEForm>
      </PEItemWrapper>
      <PEItemWrapper>
        <PEInfo>
          <PEInfoTitle>
            창작자 소개
            <Asterisk />
          </PEInfoTitle>
          <PEInfoDesc>
            2~3문장으로 창작자님의 이력과 간단한 소개를 써주세요.
          </PEInfoDesc>
        </PEInfo>
        <PEForm>
          <PEFormInput
            maxLength={300}
            placeholder={"간단한 이력과 소개를 써주세요"}
            value={postData.creatorBiography}
            changeHandler={(e) => {
                dispatch(setCreatorBiography(e.target.value))
            }}
            textarea
          />
        </PEForm>
      </PEItemWrapper>
      </>
    )
}

export default PECreator