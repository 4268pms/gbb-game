//정보
var screenMessageBox; //screen_message_box
var screenGameObject; //screen_game_object
var screenPlayerInfo; //screen_player_info
var mst = new Monster("전사 미니언",477,12);
var crt = new Character("카이사",670,59);
var turnCount = 0;
var itTurn;
var currentMode = "전투"; //현재 플레이 상태를 표시하는 변수 (비전투, 전투)

function displayCharactersInfo(){
    crt.info();
    mst.info();
    tv("\n")
}

// 공격력 수치
function getRandomAttackValue(attack){
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로
    var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴
    return random;
}
// 출력 화면
window.onload = function(){
    screenMessageBox = document.getElementById("screen_message_box");
    screenGameObject = document.getElementById("screen_game_object");
    screenPlayerInfo = document.getElementById("screen_player_info");
    itTurn = document.getElementById("input_txt_turn");
    
    displayCharactersInfo();
    
    tv("전투 시작\n");
    
    // //전투 무한 루프 처리
    // var loop =true;
    // while(loop){
    //             loop = procBattleTurn();
    //         }
            
    }
       
    // -전투 종료 처리(종료메세지 출력, 경험치 획득)
function endBattle(){
    tv("전투 종료\n")
    //경험치 처리
    crt.exp = crt.exp + mst.exp; 
    
    tv("경험치"+mst.exp+"을 얻었습니다.\n");
    getReward();
    currentMode ="비전투"; //현재 모드를 비전투로 전환
    tvGameObjectClear()   // 게임 오브젝트 화면을 지움
    
}
function turn(){
    if(currentMode == "전투"){
        procBattleTurn();
    } else {
        procBattleTurn();
    }
    turnCount++;    // 턴 1 증가
    itTurn.value = turnCount;   // 현재 턴 표시
    console.log("현재 턴은 :"+turnCount);
}


// 배틀 턴
function procBattleTurn(){
    // 공격 메시지 출력
    var monsterDamage = getRandomAttackValue(mst.attack);
    var playerDamage = getRandomAttackValue(crt.attack);
    
    mst.currentHp = mst.currentHp - playerDamage;
    tv(crt.name + "가 " + mst.name + "에게 데미지를 "+playerDamage +" 입혔습니다.\n");
    crt.currentHp = crt.currentHp - monsterDamage;
    tv(mst.name + "이 " + crt.name + "에게 데미지를 "+monsterDamage +" 입혔습니다.\n");
    
    
    
    //hp 검사하기
    if(mst.currentHp <= 0 || crt.currentHp <= 0){
        // displayCharactersInfo();
        endBattle(); //전투 종료
        // crt.info();
        return false;
    }else{
        displayCharactersInfo();
        return true;
    }
}


// 보상 처리
function getReward(){
    crt.money = crt.money + mst.money;
    tv(mst.money + "원을 얻었습니다.\n")
}


