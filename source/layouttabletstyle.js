function tablet(){

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
  
  //div 안에 원하는 태그들을 만들려고 원하는 것들을 배열로 묶었다.
  let qnahTagNamelist = ["header", "nav", "main", "footer"];
  
  for (let i = 0; i < qnahTagNamelist.length; i++) {
    qnahLayout("#root > div > div:nth-child(2)", qnahTagNamelist[i]);
  }
  //기본적인 영역 스타일에 들어갈 속성들을 배열로 만들어 두었다.
  let styleName = ["height", "width", "display", "felexDirectrion", "justifyContent", "alignItems", "borderRadius", "border"];
  
  //스타일들을 객체로 묶어 주었다.
  let layoutStyle = {
    rootStyle: ["130vh", "100vw", "flex", "", "center", "center", ""],
    rootchildFirstdiv: ["100%", "100%", "", "", "", "", "7%","1px solid yellow"],
    xpenfl: ["18%", "100%", "flex", "", "center", "center", "","1px solid yellow"], //테두리
    xpenflmain: ["64%", "100%"], //테두리안에 내용
    spicklayout: ["4%", "10%"],
    homebtn: ["65%", "43%", "flex", "", "center", "center", "50%","1px solid yellow"],
    homebtnchild: ["65%", "43%", "flex", "", "center", "center", "","1px solid yellow"],
    // header: ["20%", "100%", "flex", "column", "left", "", "red"],
    // nav: ["15%", "100%", "flex", "row", "space-around", "center", "yellow"],
    // main: ["65%", "100%", "flex", "column", "space-around", "", "pink"],
  }
  
  
  //함수를 이용해 스타일을 주기 위해 만들었다.
  function layoutRootStyle(tagName, styleName, styleTag) {
  
    tagName.style[styleName] = styleTag;
  
  }
  
  //기본적인 레이아웃 스타일을 주기 위하여 배열에 값을 넣어두고 함수를 이용 하여 출력 해보았다.
  function tagStyle(tagName, tagStyle) {
    const tag = document.querySelector(tagName);
    for (let i = 0; i < styleName.length; i++) {
      layoutRootStyle(tag, styleName[i], tagStyle[i]);
    }
  }
  
  tagStyle("#root", layoutStyle.rootStyle);
  tagStyle("#root > div", layoutStyle.rootchildFirstdiv);
  tagStyle("#root > div > div:nth-child(1)", layoutStyle.xpenfl);
  tagStyle("#root > div > div:nth-child(2)", layoutStyle.xpenflmain);
  tagStyle("#root > div > div:nth-child(3)", layoutStyle.xpenfl);
  tagStyle("#root > div > div:nth-child(1) > div", layoutStyle.spicklayout);
  tagStyle("#root > div > div:nth-child(3) > div", layoutStyle.homebtn);
  tagStyle("#root > div > div:nth-child(3) > div > div", layoutStyle.homebtnchild);
  
  console.log(a);}
  