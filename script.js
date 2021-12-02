//マップキャンバスの設定
const canvasMap = document.querySelector("#canvasMap");
const ctxMap = canvasMap.getContext("2d");
// canvasMap.width = 2000;
// canvasMap.height = 1000;

//ペイントキャンバスの設定
const canvasPaint = document.querySelector("#canvasPaint");
const ctxPaint = canvasPaint.getContext("2d");
// canvasMap.width = 2000;
// canvasMap.height = 1000;

//キャンバスサイズの設定と拡大率
canvasFactor = 3;
//画面上の大きさ×拡大率
original_width = 950*canvasFactor;  //style="width:750px; height:500px"
original_height = 670*canvasFactor;  //  *1.414 

canvasMap.width = original_width;
canvasMap.height = original_height;
canvasMap.style.width = original_width/canvasFactor + "px";
canvasMap.style.height = original_height/canvasFactor + "px";
canvasPaint.width = canvasMap.width;
canvasPaint.height = canvasMap.height;
canvasPaint.style.width = original_width/canvasFactor + "px";
canvasPaint.style.height = original_height/canvasFactor + "px";

//photo キャンバスの設定
canvasPhotoListName = ["canvasPhoto1","canvasPhoto2","canvasPhoto3","canvasPhoto4"];
canvasFactor = 3;
photo_original_width = 198*canvasFactor;  //style="width:750px; height:500px"
photo_original_height = 125*canvasFactor;
photo_title_height = 45*canvasFactor;  
canvasPhotoList = []
ctxPhotoList = []
canvasPhotoListName.forEach(function(value,index){
    canvasPhotoList.push(document.getElementById(value));
    ctxPhotoList.push(canvasPhotoList[index].getContext("2d"));
    canvasPhotoList[index].width = photo_original_width;
    canvasPhotoList[index].height = photo_original_height;
    canvasPhotoList[index].style.width = photo_original_width/canvasFactor + "px";
    canvasPhotoList[index].style.height = photo_original_height/canvasFactor + "px";
});

//結合キャンバス　の設定
const canvasContact = document.querySelector("#canvasContact");
const ctxContact = canvasContact.getContext("2d");
canvasContact.width = original_width + photo_original_width;
canvasContact.height = original_height + photo_original_height;


//マップ画像の読み込みイベントの設定
const loadMapFile = document.getElementById("loadMapFile");
loadMapFile.addEventListener("change",function(evt){
    console.log("file selector");
    let file = evt.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    console.log(file[0]);
    reader.onload = function(){
        let dataURL = reader.result;
        let img = new Image();
        img.src = dataURL;
        img.onload = function(){
            ctxMap.drawImage(img,0,0,canvasMap.width,canvasMap.height);
        }
        // ctx02.fillRect(50,90,30,20);
    }

},false);

//写真画像の読み込みイベントの設定（配列を利用）
loadPhotoListName = ["selectPhoto1","selectPhoto2","selectPhoto3","selectPhoto4"];
loadPhotoFileList = [];
loadPhotoListName.forEach(function(value,index){
    loadPhotoFileList.push(document.getElementById(value));
    loadPhotoFileList[index].addEventListener("change",function(event){
        console.log("photo load event" + value + index);
        let file = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(file[0]);
        console.log(file[0]);
        reader.onload = function(){
        let dataURL = reader.result;
        let img = new Image();
        img.src = dataURL;
        img.onload = function(){
            ctxPhotoList[index].drawImage(img,0,0,canvasPhotoList[index].width,canvasPhotoList[index].height);
        }
        // ctx02.fillRect(50,90,30,20);
    },false});
});


//スタンプの設置
//スタンプ画像の設定
const charaHome = new Image();
charaHome.src = "image/home.png"
const charaSchool = new Image();
charaSchool.src = "image/school.png"
const charaEvacuation = new Image();
charaEvacuation.src = "image/evacuation.png"
const charaCamera1 = new Image();
charaCamera1.src = "image/camera1.png"
const charaCamera2 = new Image();
charaCamera2.src = "image/camera2.png"
const charaCamera3 = new Image();
charaCamera3.src = "image/camera3.png"
const charaCamera4 = new Image();
charaCamera4.src = "image/camera4.png"
const charaCamera5 = new Image();
charaCamera5.src = "image/camera5.png"
const charaNote1 = new Image();
charaNote1.src = "image/note1.png"
const charaNote2 = new Image();
charaNote2.src = "image/note2.png"
const charaNote3 = new Image();
charaNote3.src = "image/note3.png"
const charaNote4 = new Image();
charaNote4.src = "image/note4.png"
const charaNote5 = new Image();
charaNote5.src = "image/note5.png"
const charaNote6 = new Image();
charaNote6.src = "image/note6.png"
const charaNote7 = new Image();
charaNote7.src = "image/note7.png"
const charaNote8 = new Image();
charaNote8.src = "image/note8.png"　　　　　　　　　　　　
const charaNote9 = new Image();
charaNote9.src = "image/note9.png"

charaCameraFileList = ["image/camera1.png","image/camera2.png","image/camera3.png","image/camera4.png"]
charaCamera = []
charaCameraFileList.forEach(function(value,index){
    charaCamera.push(new Image());
    charaCamera[index].src = charaCameraFileList[index];
});



//吹き出しコメントの取得
charaFukidashiFileList = ["image/note1.png","image/note2.png","image/note3.png","image/note4.png"]
charaFukidashi = []
charaFukidashiFileList.forEach(function(value,index){
    charaFukidashi.push(new Image());
    charaFukidashi[index].src = charaFukidashiFileList[index];
});

//スタンプを選択
//デフォルトは「ペン」になっている
let penStatus = "pencil";

const homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click",()=>{
    penStatus = "home";
})
const schoolButton = document.getElementById("schoolButton");
schoolButton.addEventListener("click",()=>{
    penStatus = "school";
    // console.log("School Stamp selected");
})
const evacuationButton = document.getElementById("evacuationButton");
evacuationButton.addEventListener("click",()=>{
    penStatus = "evacuation";
})
// const penButton = document.getElementById("penButton");
// penButton.addEventListener("click",()=>{
//     penStatus = "pencil";
// })
const camera1Button = document.getElementById("camera1Button");
camera1Button.addEventListener("click",()=>{
    penStatus = "camera1";
})
const camera2Button = document.getElementById("camera2Button");
camera2Button.addEventListener("click",()=>{
    penStatus = "camera2";
})
const camera3Button = document.getElementById("camera3Button");
camera3Button.addEventListener("click",()=>{
    penStatus = "camera3";
})
const camera4Button = document.getElementById("camera4Button");
camera4Button.addEventListener("click",()=>{
    penStatus = "camera4";
})
const note1Button = document.getElementById("note1Button");
note1Button.addEventListener("click",()=>{
    penStatus = "note1";
})
const note2Button = document.getElementById("note2Button");
note2Button.addEventListener("click",()=>{
    penStatus = "note2";
})
const note3Button = document.getElementById("note3Button");
note3Button.addEventListener("click",()=>{
    penStatus = "note3";
})
const note4Button = document.getElementById("note4Button");
note4Button.addEventListener("click",()=>{
    penStatus = "note4";
})
const eraserButton = document.getElementById("eraserButton");
eraserButton.addEventListener("click",()=>{
    penStatus = "eraser";
})
// //全消去ボタンの設定
function confirmFunction(){
    let rt = confirm("本当にすべて消しますか？");
    if(rt == true){
        console.log("all easing");
        ctxPaint.clearRect(0,0,canvasPaint.width,canvasPaint.height);
    }
}

// 選択解除ボタン
// const freeButton = document.getElementById("freeButton");
// freeButton.addEventListener("click",()=>{
//     penStatus = "none";
// })



// 道具アイコンの選択されると発生するイベント
const tools = document.querySelectorAll(".tool");
const selectButton = (elem) => {
    removeAcitiveButton();
    // console.log("clicked");
    elem.classList.add("activeTool");
}

const removeAcitiveButton =() => {
    tools.forEach((tool)=>{
        tool.classList.remove("activeTool");
    });
}

// 色アイコンの選択されると発生するイベント
const toolColors = document.querySelectorAll(".toolColor");
const selectColor = (elem) => {
    removeAcitiveColor();
    ctxPaint.fillStyle = elem.getAttribute("data-color");
    elem.classList.add("activeColor");
}
const removeAcitiveColor =() => {
    toolColors.forEach((toolColor)=>{
        toolColor.classList.remove("activeColor");
    });
}

// 太さアイコンの選択されると発生するイベント
const toolThicknesses = document.querySelectorAll(".toolThickness");
const selectThickness = (elem) => {
    removeAcitiveThickness();
    // ctxPaint.fillStyle = elem.getAttribute("data-color");
    elem.classList.add("activeThickness");
}
const removeAcitiveThickness =() => {
    toolThicknesses.forEach((toolThickness)=>{
        toolThickness.classList.remove("activeThickness");
    });
}



// canvasをクリックしたときのイベント設定（アイコンを置く設定）
this.canvasPaint.addEventListener("mousedown",(e) => {
    dw = 100; //アイコンの大きさ
    dh = 100;
    let x = e.offsetX * canvasFactor-dw/2;
    let y = e.offsetY * canvasFactor-dh/2;

    console.log("アイコンの場所　x:",x,"y:",y);

    
    //penStatusの状態に応じて挙動変更(アイコンの設置)
    switch(penStatus) {
        case "pencil":
            isDrag = true
            break;
        case "home":
            ctxPaint.drawImage(charaHome,x,y,dw,dh); //drawImage(image, dx, dy, dw, dh)
            break;
        case "school":
            ctxPaint.drawImage(charaSchool,x,y,dw,dh);
            break;
        case "evacuation":
            ctxPaint.drawImage(charaEvacuation,x,y,dw,dh);
            break;
        case "camera1":
            ctxPaint.drawImage(charaCamera1,x,y,dw,dh);
            break;
        case "camera2":
            ctxPaint.drawImage(charaCamera2,x,y,dw,dh);
            break;
        case "camera3":
            ctxPaint.drawImage(charaCamera3,x,y,dw,dh);
            break;
        case "camera4":
            ctxPaint.drawImage(charaCamera4,x,y,dw,dh);
            break;
        case "note1":
            ctxPaint.drawImage(charaNote1,x,y,dw,dh);
            break;
        case "note2":
            ctxPaint.drawImage(charaNote2,x,y,dw,dh);
            break;
        case "note3":
            ctxPaint.drawImage(charaNote3,x,y,dw,dh);
            break;
        case "note4":
            ctxPaint.drawImage(charaNote4,x,y,dw,dh);
            break;
        case "eraser":
            isDrag = true;
            // ctxPaint.clearRect(x,y,dw/2,dh/2);
            break;
        default:
            penStatus = "pencil"
    }
})

//ペンによる経路の描画
const penButton = document.getElementById("penButton");
penButton.addEventListener("click",()=>{
    penStatus = "pencil";
    ctxPaint.fillStyle = "blue";  //線の色を変更
    console.log("pen selected");
})
// const pen2Button = document.getElementById("pen2Button");
// pen2Button.addEventListener("click",()=>{
//     penStatus = "pencil";
//     ctxPaint.fillStyle = "green"; //線の色を変更
//     console.log("pen2 selected");
// })

//線の色の初期設定
let penSize = 6;
const penthickButton = document.getElementById("thickButton");
penthickButton.addEventListener("click",()=>{
    penSize = 6 ;  //線の太さを変更
    console.log("penSize = " + penSize);
})
const penthinButton = document.getElementById("thinButton");
penthinButton.addEventListener("click",()=>{
    penSize = 3 ;  //線の太さを変更
    console.log("penSize = " + penSize);
})


//線を描く
// マウスがドラッグされているか(クリックされたままか)判断するためのフラグ
let isDrag = false;
ctxPaint.fillStyle = "blue";
ctxPaint.strokeStyle = ctxPaint.fillStyle;

canvasPaint.addEventListener("mouseup",()=>{
    isDrag = false;
    x = undefined;
    y = undefined;
});
canvasPaint.addEventListener("mousemove",(event)=>{
    draw(event.offsetX * canvasFactor ,event.offsetY * canvasFactor);
});

//線を描く関数
function draw(x2,y2){
    eraseW = 50; //消しゴムの大きさ
    eraseH = 50; //消しゴムの大きさ
    if(isDrag && penStatus == "pencil"){
        ctxPaint.beginPath();
        ctxPaint.arc(x2,y2,penSize*canvasFactor,0,Math.PI * 2);
        ctxPaint.closePath();
        ctxPaint.fill();
        drawLine(x,y,x2,y2);
    }else if(isDrag && penStatus == "eraser"){
        ctxPaint.clearRect(x-eraseW/2,y-eraseH/2,eraseW,eraseH);
    }
    x = x2;
    y = y2;
}

function drawLine(x1,y1,x2,y2){
    ctxPaint.beginPath();
    ctxPaint.moveTo(x1,y1);
    ctxPaint.lineTo(x2,y2);
    ctxPaint.strokeStyle = ctxPaint.fillStyle;
    console.log("penSize " +penSize);
    ctxPaint.lineWidth = penSize * canvasFactor*2;
    ctxPaint.stroke();
}

//吹き出しエリアの取得
fukidashiAreaNameList = ["fukidashi1","fukidashi2","fukidashi3","fukidashi4"];
fukidashiAreaList = []
fukidashiAreaNameList.forEach(function(value,index){
    // console.log(value);
    fukidashiAreaList.push(document.getElementById(value));
});



//downloadボタンの実装
const downloadButton = document.getElementById("download-button");
downloadButton.addEventListener("click",(e) => {

    console.log("contactButton is clicked.");

    // contactCtx2(saveImage,ctxSheet,ctxPaint);

    ctxContact.clearRect(0,0,canvasContact.width,canvasContact.height);

    //マップの結合
    let image1 = createImage(ctxMap);
    image1.onload = function(){
        ctxContact.drawImage(image1,4,4,original_width-14,original_height-10);  //original_width = 950*canvasFactor;  //style="width:750px; height:500px"
                                                                          //original_height = 670*canvasFactor;  //  *1.414
    }
    //マップの枠
    // パスをリセット
    ctxContact.beginPath () ;
    // 線を引くスタート地点に移動
    ctxContact.moveTo( 2, 2 ) ;
    // スタート地点から指定位置まで線を引く
    ctxContact.lineTo(original_width-2,2)
    ctxContact.lineTo(original_width-2,original_height-2)
    ctxContact.lineTo(2,original_height-2)
    ctxContact.lineTo(2,2)
    // 線の色
    ctxContact.strokeStyle = "gray" ;
    // 線の太さ
    ctxContact.lineWidth = 4 ;
    // 線を描画する
    ctxContact.stroke() ;

    //ペイント内容の結合
    let image2 = createImage(ctxPaint);
    image2.onload = function(){
        ctxContact.drawImage(image2,0,0,original_width,original_height);
    }

    //名前の書き込み
    let nameText = document.getElementById("name");
    // console.log(nameText.value);
    let fontSize = 50;
    // let lineHeight = 1.1618 ;	// 行の高さ (フォントサイズに対する倍率)
        // let x = 50 ;	// 水平位置
        // let y = 50 ;	// 垂直位置
    ctxContact.font = 'bold ' + fontSize +'px Arial, meiryo, sans-serif';
    ctxContact.fillText( "名前："+nameText.value, original_width + 30, 50);

    //カメラキャラクターの貼り付け
    charaCamera.forEach(function(value, index){
        ctxContact.drawImage(charaCamera[index],original_width+photo_original_width/20,(photo_original_height+photo_title_height)*index+100,30*canvasFactor,30*canvasFactor);
    });

    //カメラのタイトルの貼り付け
    //タイトルの取得
    titlePhotoIDList = ["photo1title","photo2title","photo3title","photo4title"];
    titlePhotoList = [];
    titlePhotoIDList.forEach(function(value,index){
        // console.log(value);
        titlePhotoList.push(document.getElementById(value).value);
        // console.log(document.getElementById(value).value);
    });
    fontSize = 40;
    ctxContact.font = 'bold ' + fontSize +'px Arial, meiryo, sans-serif';
    titlePhotoList.forEach(function(value,index){
        // console.log(titlePhotoList[index])
        ctxContact.fillText(value,original_width+photo_original_width/4,(photo_original_height+photo_title_height)*index+170);
    });
    //カメラ画像の結合
    ctxPhotoList.forEach(function(value,index){
        // console.log(index);
        let imagePhoto = createImage(ctxPhotoList[index]);
        
        //写真貼り付け
        imagePhoto.onload = function(){
            ctxContact.drawImage(imagePhoto,original_width,(photo_original_height+photo_title_height)*index+photo_title_height+50,photo_original_width,photo_original_height);
        }

    });

    fukidashi_width = original_width/2/4;
    fukidashi_title_height = 100;
    //吹き出しキャラクターの貼り付け
    charaFukidashi.forEach(function(value, index){
        ctxContact.drawImage(charaFukidashi[index],fukidashi_width/2+fukidashi_width*index,original_height+fukidashi_title_height/2,30*canvasFactor,30*canvasFactor);
    });
    //吹き出しコメントの結合
    // https://www.koikikukan.com/archives/2013/08/28-015555.php
    // console.log(fukidashiAreaList[1].value);
    fukidashiAreaList.forEach(function(value,index){
        // console.log(index);
        // console.log(fukidashiAreaList[index].value);
        let text = fukidashiAreaList[index].value;
        fontSize = 40;
        lineHeight = 1.1618 ;	// 行の高さ (フォントサイズに対する倍率)
        // let x = 50 ;	// 水平位置
        // let y = 50 ;	// 垂直位置
        ctxContact.font = 'bold ' + fontSize +'px Arial, meiryo, sans-serif';

        let lineNum = Math.trunc(text.length/6) +1;
        // console.log("lineNum : " + lineNum);
        // console.log(text.substr(0,10))
        for( i=0;i<lineNum;i++){
            let line = text.substr(i*5,5)
            var addY = fontSize ;
	        // 2行目以降の水平位置は行数とlineHeightを考慮する
	        if ( i ) addY += fontSize * lineHeight * i ;
            ctxContact.fillText( line, fukidashi_width*index + fukidashi_width/2, original_height + addY + fukidashi_title_height*1.2);
        }

    });    
 
    // コメント１の結合
    //タイトル部分
    let comment1title = document.getElementById("comment-title1").textContent;
    fontSize = 35;
    ctxContact.font = 'bold ' + fontSize +'px Arial, meiryo, sans-serif';
    ctxContact.fillText( comment1title, fukidashi_width*4 , original_height+100);
    //コメント部分
    let comment1Text = document.getElementById("comment1").value;
    fontSize = 40;
    ctxContact.font = 'bold ' + fontSize +'px Arial, meiryo, sans-serif';
    lineCharas = 13;
    let lineNum = Math.trunc(comment1Text.length/lineCharas) +1;
    for( i=0;i<lineNum;i++){
        let line = comment1Text.substr(i*lineCharas,lineCharas)
        var addY = fontSize ;
        // 2行目以降の水平位置は行数とlineHeightを考慮する
        if ( i ) addY += fontSize * lineHeight * i ;
        ctxContact.fillText( line, fukidashi_width*4 + fukidashi_width/2, original_height + addY + fukidashi_title_height*1.2);
    }

    // コメント２の結合
    //タイトル部分
    let comment2title = document.getElementById("comment-title2").textContent;
    fontSize = 35;
    ctxContact.font = 'bold ' + fontSize +'px Arial, meiryo, sans-serif';
    ctxContact.fillText( comment2title, fukidashi_width*6 , original_height+100);
    //コメント部分
    let comment2Text = document.getElementById("comment2").value;
    fontSize = 40;
    ctxContact.font = 'bold ' + fontSize +'px Arial, meiryo, sans-serif';
    // lineCharas = 15;
    lineNum = Math.trunc(comment2Text.length/lineCharas) +1;
    for( i=0;i<lineNum;i++){
        let line = comment2Text.substr(i*lineCharas,lineCharas)
        var addY = fontSize ;
        // 2行目以降の水平位置は行数とlineHeightを考慮する
        if ( i ) addY += fontSize * lineHeight * i ;
        ctxContact.fillText( line, fukidashi_width*6 + fukidashi_width/2, original_height + addY + fukidashi_title_height*1.2);
    }

    // 500ms 待ってから保存
    setTimeout(function(){
        console.log("save function start")
        let link = document.createElement("a");
        link.href = canvasContact.toDataURL("image/png");
        link.download = "testMyHazardMap.png";
        link.click();    
    },500)

}); 

let createImage= function(context){
    var image= new Image;
    image.src= context.canvas.toDataURL();
    return image;
}
