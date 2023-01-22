# tumblbug

![](https://www.notion.so/image/https%3A%2F%2Ftumblbug-assets.imgix.net%2Fbrand%2Ftumblbug_introduction.png?table=block&id=256d08cd-3a8d-43c4-ad95-5cf40f8c83a3&spaceId=0506af35-6b8b-4c06-9c1c-7fe328d8aee6&width=2000&userId=17d0a86e-5f6e-4097-afd6-b83dc90e98d3&cache=v2)

## 📢 Project Introduction

Cloned Tumblebug Site, a funding community site that sponsors and sponsors various idea products.

[Project Link](http://tumblbug-clone.s3-website.ap-northeast-2.amazonaws.com/)


## 🎬 Demonstration video

[Link to YouTube demonstration] (https://www.youtube.com/watch?v=pitNSMnWOXs)

## 📅 Project Period

July 28th, 2022 to August 4th, 2022

## **🔨 Usage Technology and Library**

- - React
- - React Query
- - Redux-toolkit
- - Toast UI
- - S3
- - Notion

<br/>

## ****👨👩👧👦Team Member****

- Front-end: Lim Geo-jeong, Roh Hee-jung
- Back-end: Kim Hyun, Kwon Bok-kyung, Kim Song-yi

<br/>

## 💡 Core Functions
[API Design Link](https://gelatinous-macadamia-65a.notion.site/e72b9b4d9a194ab3a57084df8f47bf1a?v=efac60dd4a6a4d81889f2e11233273f1)

- Creators can create projects that can be sponsored before creating an idea product.
- Sponsors can select and sponsor sponsored items that include specific gifts after checking the creator's project plan and the gifts they can receive at the time of sponsorship.
- When the target amount set by the creator is reached, the project is successful, and the creator can produce the idea product himself and deliver the gift to the sponsor.
- Sponsors can check their sponsored projects and sponsored items in my sponsorship status.

## 💫Trouble Shooting


- **In the OS X environment in the React-quill editor, the phenomenon in which Korean letters are separated and entered in Chrome**

→ Resolve some escape characters by replacing them every time they are onChange

- **Make useQuery work only in certain situations.**

→ Give enabled as state, give the initial value of state as false, and change the state value when onClick.

- **Redux data received from the top selector within the return of useEffect does not come in**

→ Override at the top of the function component or check and resolve empty values with optional chaining.

- **How to scroll to other components with a dom element**

→ ForwradrRef delivers the ref value props to approach the dome element of the other component.

