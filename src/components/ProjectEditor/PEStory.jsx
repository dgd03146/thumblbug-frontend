import React, { useEffect, useRef, useState, useMemo } from "react";
import styled from "styled-components";
import {
  Asterisk,
  PEForm,
  PEInfo,
  PEInfoTitle,
  PEItemWrapper,
  PENotice,
} from "./PEStyles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PEStory = (props) => {
    const QuillRef = useRef();
    const [contents, setContents] = useState("");

    const modules = {
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ size: ["small", false, "large", "huge"] }, { color: [] }],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
                { align: [] },
              ],
              ["image", "video"],
            ],
            handlers: {
            },
          },
        };
  return (
    <>
      <PEItemWrapper>
        <PEInfo>
          <PEInfoTitle>
          프로젝트 계획
            <Asterisk />
          </PEInfoTitle>
          <PENotice
            title={"텍스트 에디터 사용법"}
            desc={[
              `일단 붙여보고 멀쓸지 고민`,
              `종료 전 후원 취소를 대비해 10% 이상 초과 달성을 목표로 해주세요.`,
              `제작비, 선물 배송비, 인건비, 예비 비용 등을 함께 고려해주세요.`,
            ]}
          />
        </PEInfo>
        <PEForm>
            <div>

            <div style={{width: "fit-content"}}>
            <GuideButton href="https://creator.tumblbug.com/9b760197-bec0-4ffb-84b0-c943c0b50ae6">
            <div>
                <img src={process.env.PUBLIC_URL + "/storyguide.svg"}/>
            </div>
            <p>작성 가이드</p>
          </GuideButton>
            </div>
            <StoryEditor
                ref={QuillRef}
                onChange={(e) => {
                    console.log(QuillRef.current.getEditorContents());
                }}
                modules={modules}
                theme="snow"
                placeholder="내용을 입력해주세요."
              />
              </div>
        </PEForm>
      </PEItemWrapper>
    
    </>
  );
};

const StoryEditor = styled(ReactQuill)`
    margin-top: 1em;
    .ql-editor{
        min-height: 20rem;
    }
`

const GuideButton = styled.a`
    display: inline-flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 36px;
    opacity: 1;
    padding: 0px 17px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(240, 240, 240);
    border-radius: 45px;
    text-decoration: none;
    cursor: pointer;
    & > div{
        display: inline-flex;
        align-self: center;
        img{
            width: 1em;
            height: 1em;
        }
    }
    p{
        font-weight: 500;
    color: rgb(61, 61, 61);
    margin: 0px 0px 0px 5px;
    word-break: break-all;
    white-space: normal;
    font-size: 12px !important;
    line-height: 20px !important;
    }
`
export default PEStory;
