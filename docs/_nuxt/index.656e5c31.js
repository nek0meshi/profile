import{d as p,m as l,q as a,s as e,I as S,J as g,K as O,z as $,A as w,_ as u,c as y,L as x,t as _,r as L,o as P,v as m,M as B,N as b,x as k,O as N,P as D,Q as G,R as j,S as M,T as J}from"./entry.87e3b8c0.js";const V=t=>($("data-v-be336e02"),t=t(),w(),t),R={class:"logos flex flex-row"},F=["href"],W=["src"],E=V(()=>e("p",null,"©︎ 2021-2024 YUSHI WATANABE",-1)),q=p({__name:"AppFooter",setup(t){const s=[{title:"github",url:"https://github.com/nek0meshi",imageFileName:"GitHub-Mark-Light-120px-plus.png",bdColor:"#000"},{title:"twitter",url:"https://twitter.com/yushi0dev",imageFileName:"Twitter social icons - circle - blue.png"},{title:"hatena-blog",url:"https://yushi-dev.hatenablog.com",imageFileName:"hatenablog-logo.svg"}];return(o,n)=>(l(),a("footer",null,[e("ul",R,[(l(),a(S,null,g(s,i=>e("li",{key:i.title},[e("a",{href:i.url,target:"_blank"},[e("img",{src:"logo/"+i.imageFileName,class:"link-logo",style:O({"background-color":i.bdColor||"#fff"})},null,12,W)],8,F)])),64))]),E]))}});const K=u(q,[["__scopeId","data-v-be336e02"]]),U={class:"ul flex flex-col justify-between"},Y=["onClick"],Q=p({__name:"NavModal",props:{links:{},show:{type:Boolean}},emits:["close","jump"],setup(t,{emit:s}){const o=t,n=s,i=y(()=>({show:o.show}));return(c,r)=>(l(),a("div",{class:x(["nav-modal flex justify-center items-center",i.value]),onClick:r[0]||(r[0]=v=>n("close"))},[e("ul",U,[(l(!0),a(S,null,g(o.links,v=>(l(),a("li",{key:v.label},[e("a",{onClick:d=>n("jump",v.href)},_(v.label),9,Y)]))),128))])],2))}});const z=u(Q,[["__scopeId","data-v-413a43b6"]]),H=t=>($("data-v-8499eb10"),t=t(),w(),t),X={class:"header-wrap mx-auto text-white relative"},Z={class:"flex flex-row gap-4 justify-end items-center header-content header-links"},ee=["onClick"],te=H(()=>e("span",{class:"hamburger-bar"},null,-1)),se=H(()=>e("span",{class:"hamburger-bar"},null,-1)),oe=H(()=>e("span",{class:"hamburger-bar"},null,-1)),ie=[te,se,oe],ne=p({__name:"AppHeader",setup(t){const s=[{href:"#about",label:"ABOUT"},{href:"#history",label:"HISTORY"},{href:"#skills",label:"SKILLS"},{href:"#links",label:"LINKS"},{href:"#photos",label:"PHOTOS"}],o=L(!1),n=L(!1),i=y(()=>({scrolled:n.value})),c=y(()=>({"show-modal":o.value})),r=()=>o.value=!o.value,v=d=>{const f=document.querySelector(d).offsetTop-80;window.scrollTo({top:f,behavior:"smooth"})};return P(()=>{window.addEventListener("scroll",()=>{const d=document.querySelector(".hero-image");if(!d){console.error("header is null");return}n.value=window.scrollY>d.clientHeight-50})}),(d,h)=>(l(),a("header",{class:x(["header fixed w-full",i.value])},[e("div",X,[e("ul",Z,[(l(),a(S,null,g(s,f=>e("li",{key:f.label},[e("a",{class:"header-link-a text-white",onClick:I=>v(f.href)},_(f.label),9,ee)])),64))]),e("nav",{class:x(["flex flex-row justify-end items-center header-content hamburger-wrap",c.value])},[e("a",{class:"hamburger",onClick:r},ie)],2)]),m(z,{show:o.value,links:s,onClose:h[0]||(h[0]=f=>o.value=!1),onJump:h[1]||(h[1]=f=>v(f))},null,8,["show"])],2))}});const ce=u(ne,[["__scopeId","data-v-8499eb10"]]),le={class:"app-container-inner"},ae=p({__name:"AppContainer",props:{id:{},title:{},isGray:{type:Boolean,default:!1}},setup(t){const{id:s,title:o,isGray:n}=t,i=y(()=>[{"is-gray":n},"app-container"]);return(c,r)=>(l(),a("section",{class:x(i.value)},[e("div",le,[e("h2",{id:s,class:"section-title"},_(o)),B(c.$slots,"default",{},void 0,!0)])],2))}});const C=u(ae,[["__scopeId","data-v-a64cb885"]]),re=e("div",null,[e("p",null,"2017年より、関西でWebエンジニアをしています。"),e("p",null,"PHP、JavaScriptでの開発経験が多いです。"),e("p",null," 趣味は、ギター・ベース、音楽・漫画・アニメ鑑賞、将棋、卓球、ルービックキューブ、写真などです。 ")],-1),_e=p({__name:"AboutSection",setup(t){return(s,o)=>(l(),b(C,{id:"about",title:"ABOUT"},{default:k(()=>[re]),_:1}))}});const de={},pe=t=>($("data-v-3b829db8"),t=t(),w(),t),ue={class:"hero-image bg-no-repeat bg-cover flex justify-center items-center"},he=pe(()=>e("h1",{class:"h2 text-white"},"YUSHI WATANABE",-1)),fe=[he];function me(t,s){return l(),a("div",ue,fe)}const ve=u(de,[["render",me],["__scopeId","data-v-3b829db8"]]),T=t=>($("data-v-831394ca"),t=t(),w(),t),Se={class:"flex flex-row items-stretch history-card-wrap"},ge={class:"timeline-date"},be=T(()=>e("span",{class:"timeline-icon"},null,-1)),ye={class:"timeline-period history-card-fade-in"},xe={class:"history-card-fade-in"},ke={class:"mt-7 title"},$e={class:"mb-3"},we=T(()=>e("p",{class:"tech-stack-title"},"使用技術",-1)),Ce=p({__name:"HistoryCard",props:{title:{},period:{},description:{},techStacks:{}},setup(t){const s=t;return P(()=>{const o=document.querySelectorAll(".history-card-fade-in"),n=window.innerHeight;window.addEventListener("scroll",()=>{for(const c of o)n>c.getBoundingClientRect().top*1.1?c.classList.add("show"):c.classList.remove("show")})}),(o,n)=>(l(),a("li",Se,[e("div",ge,[be,e("span",ye,_(s.period),1)]),e("div",xe,[e("h3",ke,_(s.title),1),e("div",$e,_(s.description),1),we,e("div",null,_(s.techStacks.join(", ")),1)])]))}});const je=u(Ce,[["__scopeId","data-v-831394ca"]]),Le={class:"flex flex-col mx-auto history-card-list"},Pe=p({__name:"HistorySection",setup(t){const s=[{title:"株式会社スマレジ",period:"2020/04〜現在",description:"Webエンジニアとして、勤怠管理の自社サービスの開発に携わっている。リードエンジニアとして、重要度の高い実装や上流寄りの工程、教育やレビューを担当。1on1の開始、振り返り会の企画・進行などといったチーム運営にも取り組んでいる。",techStacks:["PHP","TypeScript","React","CakePHP2","jQuery","SCSS","Laravel","Vue.js"]},{title:"株式会社SICデジタル",period:"2018/01〜2020/03",description:"Webアプリ開発やiOSアプリ開発を担当。1~10人月程度の小規模な新規開発・改修に携わった。",techStacks:["Laravel","Vue.js","iOS/swift","Objective-C"]},{title:"株式会社Silett",period:"2016/12~2017/12",description:"研究室の同期の起業に参加した。自社制作の対話システムを活用したアプリケーション制作に携わった。スマホアプリのクライアント部、サーバ部、インフラ周りなどを担当した。",techStacks:["iOS/swift","PHP","C#","AWS","Line Messaging API"]},{title:"大阪大学・大阪大学大学院",period:"2011/04〜2017/03",description:"研究室では、コミュニケーションロボットに関する研究に携わった。Pythonを利用し、心拍データの加工・計算や、統計解析などを行った。Java・C++を利用し、コミュニケーションロボットの挙動を制御するシステムを制作した。",techStacks:["Python","Java","C++"]}];return(o,n)=>(l(),b(C,{id:"history",title:"HISTORY","is-gray":""},{default:k(()=>[e("ul",Le,[(l(),a(S,null,g(s,i=>m(N(je),{key:i.title,title:i.title,period:i.period,description:i.description,"tech-stacks":i.techStacks,class:"history-card"},null,8,["title","period","description","tech-stacks"])),64))])]),_:1}))}});const He=u(Pe,[["__scopeId","data-v-6b9789f7"]]),Ie={class:"card-wrap"},Ne={class:"h3 mb-2"},Te={class:"experience mb-1"},Ae={class:"description"},Oe=p({__name:"SkillCard",props:{title:{},experience:{},description:{}},setup(t){const s=t;return(o,n)=>(l(),a("li",Ie,[e("h3",Ne,_(s.title),1),e("p",Te,_(s.experience),1),e("p",Ae,_(s.description),1)]))}});const Be=u(Oe,[["__scopeId","data-v-0212c4a5"]]),A=t=>($("data-v-33709c0a"),t=t(),w(),t),De={class:"flex flex-wrap justify-between"},Ge={class:"skill-others-card skill-card-fade-in"},Me=A(()=>e("h3",{class:"h3 mb-2"},"その他",-1)),Je=A(()=>e("p",{class:"experience mb-1"},"短期間の実務経験や実務外での利用を含む",-1)),Ve=p({__name:"SkillsSection",setup(t){const s=[{title:"PHP",experience:"実務6年",description:"サーバサイドではPHPを使う機会が多い。Laravelを中心に、CakePHP2も経験がある。"},{title:"JavaScript",experience:"実務5年",description:"既存システムへの部分的なTypeScript・React導入を担当。Vue.js・jQueryを過去に利用。"},{title:"iOS/swift",experience:"実務1年",description:"受託開発にて、業務システムの制作などで利用。"},{title:"HTML/CSS",experience:"実務1年",description:"SCSS・CSS Modulesも実務で利用。本ページは学習も兼ねて作成した。"},{title:"Python",experience:"実務3ヶ月/実務外2年",description:"主に、学生時代の研究活動で利用した。numpy/pandas等を利用した統計解析や、簡単なシステム操作のUI作成など。"},{title:"資格など",experience:"-",description:"基本情報技術者試験, 応用情報技術者, TOEIC 770点, 給与計算実務能力検定 2級"}],o=["DB設計","SQL","Java","C++","C#","Objective-C","Go","AngularJS","Nuxt.js","Next.js","Styled Components","AWS","Line Messaging API","Docker","Vagrant","GitHub","GitLab"];return P(()=>{const n=document.querySelectorAll(".skill-card-fade-in"),i=window.innerHeight;window.addEventListener("scroll",()=>{for(const r of n)i>r.getBoundingClientRect().top*1.1?r.classList.add("show"):r.classList.remove("show")})}),(n,i)=>(l(),b(C,{id:"skills",title:"SKILLS"},{default:k(()=>[e("ul",De,[(l(),a(S,null,g(s,c=>m(N(Be),{key:c.title,title:c.title,experience:c.experience,description:c.description,class:"skill-card skill-card-fade-in"},null,8,["title","experience","description"])),64))]),e("div",Ge,[Me,Je,e("p",null,_(o.join(", ")),1)])]),_:1}))}});const Re=u(Ve,[["__scopeId","data-v-33709c0a"]]),Fe={class:"card-wrap"},We=["href"],Ee={class:"h3"},qe={class:"card-content mb-3 self-stretch"},Ke=["src"],Ue={class:"flex flex-col"},Ye={key:0},Qe={class:"description"},ze={class:"url"},Xe=p({__name:"LinkCard",props:{title:{},url:{},description:{},techStacks:{},fileName:{}},setup(t){const s=t,o=y(()=>"links/"+s.fileName);return(n,i)=>(l(),a("li",Fe,[e("a",{href:n.url,target:"_blank",class:"p-5 flex flex-col items-center"},[e("h3",Ee,_(s.title),1),e("div",qe,[e("img",{src:o.value,class:"image"},null,8,Ke),e("div",Ue,[n.techStacks.length?(l(),a("p",Ye,_(s.techStacks.join(", ")+"。"),1)):D("",!0),e("p",Qe,_(s.description),1)])]),e("small",ze,_(s.url),1)],8,We)]))}});const Ze=u(Xe,[["__scopeId","data-v-b3001f95"]]),et={class:"flex flex-row flex-wrap justify-between"},tt=p({__name:"LinksSection",setup(t){const s=[{title:"将棋盤",url:"https://github.com/nek0meshi/shogi-board",description:"将棋盤を製作。駒を動かしたり、相手の駒を取ったり、成ったりすることができる。TypeScriptやVue3のの学習も兼ねて製作。",techStacks:["Vue.js3","TypeScript"],fileName:"shogi.jpg"},{title:"Profile",url:"https://github.com/nek0meshi/profile",description:"本サイト。エンジニアとしてのスキル・経歴・リンク集の紹介や、HTML/CSSの学習のため製作。",techStacks:["HTML/CSS","Nuxt.js","SCSS"],fileName:"profile.jpg"},{title:"Tetris",url:"https://github.com/nek0meshi/tetris",description:"テトリスゲーム。TypeScript・Reactの学習のため製作。",techStacks:["TypeScript","React"],fileName:"tetris.jpg"},{title:"TODOリスト",url:"https://github.com/nek0meshi/todo-list",description:"単純なTODOリスト。Go言語の学習のため製作。",techStacks:["Golang","Vue.js3","Bulma"],fileName:"todo-list.jpg"},{title:"タイピングゲーム",url:"https://github.com/nek0meshi/typing",description:"単純なタイピングゲーム。TypeScript・Vue.js3の学習のため製作。",techStacks:["Vue.js3","TypeScript"],fileName:"typing.jpg"},{title:"ブログ",url:"https://yushi-dev.hatenablog.com/",description:"現職の入社後に始めたブログ。学習の記録としての記事が多く、イベント観覧や読んだ書籍に関する記事もある。はてなブログ。2020/06〜現在。",techStacks:[],fileName:"hatenablog-logotype.svg"},{title:"Profile v1",url:"https://github.com/nek0meshi/profile/tree/master/v1",description:"プロフィールページの過去バージョン。エンジニアとしてのスキル・経歴・リンク集の紹介や、HTML/CSSの学習のため製作。",techStacks:["HTML/CSS","Nuxt.js","SCSS","bulma"],fileName:"profile-v1.jpg"}];return(o,n)=>(l(),b(C,{id:"links",title:"LINKS","is-gray":""},{default:k(()=>[e("ul",et,[(l(),a(S,null,g(s,i=>m(Ze,{key:i.title,title:i.title,url:i.url,description:i.description,"tech-stacks":i.techStacks,"file-name":i.fileName,class:"link-card"},null,8,["title","url","description","tech-stacks","file-name"])),64))])]),_:1}))}});const st=u(tt,[["__scopeId","data-v-d104f581"]]),ot=["src"],it=p({__name:"LightBox",props:{filePath:{},hasLeft:{type:Boolean},hasRight:{type:Boolean}},emits:["close","go-left","go-right"],setup(t,{emit:s}){const o=t,n=s;return(i,c)=>(l(),b(J,{name:"fade"},{default:k(()=>[G(e("div",{class:"light-box flex flex-row justify-around items-center",onClick:c[3]||(c[3]=r=>n("close"))},[e("button",{class:x(["arrow-button left-arrow",{hasNext:o.hasLeft}]),onClick:c[0]||(c[0]=j(r=>n("go-left"),["stop"]))},null,2),e("img",{class:"image",src:o.filePath,onClick:c[1]||(c[1]=j(()=>{},["stop"]))},null,8,ot),e("button",{class:x(["arrow-button right-arrow",{hasNext:o.hasRight}]),onClick:c[2]||(c[2]=j(r=>n("go-right"),["stop"]))},null,2)],512),[[M,i.filePath]])]),_:1}))}});const nt=u(it,[["__scopeId","data-v-8f330505"]]),ct={class:"flex flex-row flex-wrap justify-between"},lt=["src","onClick"],at=p({__name:"PhotosSection",setup(t){const s=["DSC03381.jpeg","DSC04099.JPG","DSC04722.JPG","DSC04772.JPG","DSC08398.JPG","DSC06286.JPG","DSC08311.JPG","DSC01744.jpeg","DSC01992.jpeg","DSC02177.jpeg","DSC02182.jpeg","DSC04930.JPG"],o=L(null),n=y(()=>o.value!==null?"photos/"+s[o.value]:""),i=d=>o.value=d,c=()=>o.value=null,r=d=>{const h=(o.value??0)+d;v(h)&&(o.value=h)},v=d=>d>=0&&d<s.length;return(d,h)=>(l(),b(C,{id:"photos",title:"PHOTOS"},{default:k(()=>[e("ul",ct,[(l(),a(S,null,g(s,(f,I)=>e("li",{key:f,class:"photo-card"},[e("img",{src:"photos/"+f,onClick:ut=>i(I)},null,8,lt)])),64))]),m(nt,{"file-path":n.value,"has-left":v(o.value!==null&&o.value-1),"has-right":v(o.value!==null&&o.value+1),onClose:c,onGoLeft:h[0]||(h[0]=f=>r(-1)),onGoRight:h[1]||(h[1]=f=>r(1))},null,8,["file-path","has-left","has-right"])]),_:1}))}});const rt=u(at,[["__scopeId","data-v-74438d1d"]]),_t=p({__name:"App",setup(t){return(s,o)=>(l(),a("div",null,[m(ce),m(ve),m(_e),m(He),m(Re),m(st),m(rt),m(K)]))}}),dt={};function pt(t,s,o,n,i,c){const r=_t;return l(),b(r)}const ft=u(dt,[["render",pt]]);export{ft as default};