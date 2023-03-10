function mobile() {

  function qnahLayout(tagName, childtagName) {
    const tag = document.querySelector(tagName);
    const childTag = document.createElement(childtagName);
    tag.appendChild(childTag);
  }

  //원하는 부모 태그 안에 자식으로 div태그를 생성 가능할 수 있게 함수를 만들어 두었다.
  function divMaker(qnahTagName, counter) {
    for (let i = 0; i < counter; i++) {
      const divMaker = document.createElement("div");
      qnahTagName.appendChild(divMaker);
    }
  }
  //root안에 div태그를 3개 생성해주었다.
  divMaker(root, 1);
  divMaker(root.children[0], 3);
  divMaker(root.children[0].children[0], 1);
  divMaker(root.children[0].children[2], 1);
  divMaker(root.children[0].children[2].children[0], 1);

  function qnahdivMaker(qnahTagName, counter) {
    for (let i = 0; i < counter; i++) {
      const qnahTag = document.querySelector(qnahTagName);
      const divMaker = document.createElement("div");

      // console.log(root.children[0].children[1].children[2]);
      qnahTag.appendChild(divMaker);
    }
  }

  //div 안에 원하는 태그들을 만들려고 원하는 것들을 배열로 묶었다.
  let qnahTagNamelist = ["header", "nav", "main", "footer"];

  for (let i = 0; i < qnahTagNamelist.length; i++) {
    qnahLayout("#root > div > div:nth-child(2)", qnahTagNamelist[i]);
  }
  //부모태그 안에 자식 div를 만들어 주었다.
  qnahdivMaker("header", 2);
  qnahdivMaker("main",1);


  //기본적인 영역 스타일에 들어갈 속성들을 배열로 만들어 두었다.
  let styleName = ["height", "width", "display", "felexDirectrion", "justifyContent", "alignItems", "borderRadius", "border"];

  //스타일들을 객체로 묶어 주었다.
  let layoutStyle = {
    rootStyle: ["130vh", "100%", "flex", "", "center", "center", ""],
    rootchildFirstdiv: ["100%", "100%", "", "", "", "", "7%","1px solid rgb(250, 181, 33)"],
    xpenfl: ["18%", "100%", "flex", "", "center", "center", "","1px solid rgb(250, 181, 33)"], //테두리
    xpenflmain: ["64%", "100%"], //테두리안에 내용
    spicklayout: ["4%", "10%", "", "", "", "", "","1px solid rgb(250, 181, 33)"],
    homebtn: ["65%", "43%", "flex", "", "center", "center", "50%","1px solid rgb(250, 181, 33)"],
    homebtnchild: ["65%", "43%", "flex", "", "center", "center", "","1px solid rgb(250, 181, 33)"],

  }

  let qnahstyleName = ["height", "width", "display", "felexDirectrion", "justifyContent", "alignItems", "borderRadius", "border", "position", "marginTop"];

  let qnahStyle = {
    header: ["15%", "100%", "flex", "", "center", "center", "","1px solid rgb(250, 181, 33)", "fixed"],
    nav: ["25%", "100%", "flex", "column","center", "center", "","1px solid rgb(250, 181, 33)"],
    main: ["25%", "100%", "flex", "column","center", "center", "", "1px solid rgb(250, 181, 33)"],
    footer: ["25%", "100%", "flex", "column","center", "center", "", "1px solid rgb(250, 181, 33)"],

  }

  //함수를 이용해 스타일을 주기 위해 만들었다.
  function layoutRootStyle(tagName, styleName, styleTag) {

    tagName.style[styleName] = styleTag;

  }

  //기본적인 레이아웃 스타일을 주기 위하여 배열에 값을 넣어두고 함수를 이용 하여 출력 해보았다.
  function tagStyle(tagName, tagStyle, listName) {
    const tag = document.querySelector(tagName);
    for (let i = 0; i < listName.length; i++) {
      layoutRootStyle(tag, listName[i], tagStyle[i]);
    }
  }



  //함수 호출을 하여 스타일 값을 다 넣어 주었다.
  tagStyle("#root", layoutStyle.rootStyle, styleName);
  tagStyle("#root > div", layoutStyle.rootchildFirstdiv, styleName);
  tagStyle("#root > div > div:nth-child(1)", layoutStyle.xpenfl, styleName);
  tagStyle("#root > div > div:nth-child(2)", layoutStyle.xpenflmain, styleName);
  tagStyle("#root > div > div:nth-child(3)", layoutStyle.xpenfl, styleName);
  tagStyle("#root > div > div:nth-child(1) > div", layoutStyle.spicklayout, styleName);
  tagStyle("#root > div > div:nth-child(3) > div", layoutStyle.homebtn, styleName);
  tagStyle("#root > div > div:nth-child(3) > div > div", layoutStyle.homebtnchild, styleName);
  tagStyle("#root > div > div:nth-child(2) > header", qnahStyle.header, qnahstyleName);
  tagStyle("#root > div > div:nth-child(2) > nav", qnahStyle.nav, qnahstyleName);
  tagStyle("#root > div > div:nth-child(2) > main", qnahStyle.main, qnahstyleName);
  tagStyle("#root > div > div:nth-child(2) > footer", qnahStyle.footer, qnahstyleName);
  tagStyle("#root > div > div:nth-child(2) > footer", qnahStyle.footer, qnahstyleName);

  let keylist = Object.keys(a.teamInformation.teamAllMember[0]);

  function textAdd(parent, counter,br) {
    for (let i = 1; i < keylist.length; i++) {
      const parentTag = document.querySelector(parent);
      const childTag = document.createElement("p");
    
      childTag.textContent = a.teamInformation.teamAllMember[counter][keylist[i]];
      parentTag.appendChild(childTag);
      parentTag.appendChild(br);
    }
  }
  for(let i = 0 ; i < keylist.length;i++){
    const br = document.createElement("br");
    textAdd("#root > div > div:nth-child(2) > main > div",i,br);
  
}

  console.log(a.teamInformation.teamAllMember[0][keylist[1]]);

}
