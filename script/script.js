const tab_title = document.querySelectorAll('#tab_title a')
for(let i of tab_title){
    i.addEventListener('mouseover',()=>{
        for(let j of tab_title){j.classList.remove('active')}//모든 tab_title을 초기화
        i.classList.add('active')
    })
}
//1. txt 모두 숨기기 display=none vs opacity=0
//2. .tab_c a에 올렸을 때
//3. txt 올린대상만 서서히 보이기 opacity=1
//4. 마우스 나가면 사라지기
const tab_c_a = document.querySelectorAll('.tab_c a')
const txt = document.querySelectorAll('tab_c txt')
console.log(tab_c_a[0].children[0])
for(let i of tab_c_a){
    console.log(i,i.children[0])
    i.children[0].style.opacity = 0 //1
    i.addEventListener('mouseover',()=>{
        i.children[0].style.opacity = 1//text는 무조건 첫번째기 때문에 [0]
        i.children[0].style.transition = 'opacity 0.5s'//all 0.5s
    })
    i.addEventListener('mouseout',()=>{
        i.children[0].style.opacity = 0
    })
}

// //각 탭 제목에 해당하는 내용만 출력하기
// //초기값 : 모든 내용 숨기기, 1번 내용 보이기
// //탭 제목에 마우스 올렸을 때 내용 보이기
// const tab_title = document.querySelectorAll('#tab_title a')
const tab_c = document.querySelectorAll('#tab_contents .tab_c')
for(let i of tab_c){
    i.style.display = 'none'
}
tab_c[0].style.display = 'flex'//css에서 flex로 해놨기 때문에 block 대신 flex 
tab_title.forEach((i,index)=>{//tab_title과 tab_c의 가족관계가 다르지만 index가 같기 때문에 forEach를 사용한다.
    i.addEventListener('mouseover',()=>{
        for(let i of tab_c)[i.style.display='none']//모두 숨기고
        tab_c[index].style.display = 'flex'})//나와 같은 index의 tab_c를 보여라
    })//mouseout을 쓰면 남아있는 제목이 없어지기 때문에 사용하지 않는다.

// const tab_title = document.querySelectorAll(#tab_title a)
// const tab_c = document.querySelectorAll('#tab contents .tab_c')
// for(let i of tab_c){i.style.display = 'none'}
// tab_c[0].style.display = 'flex'
// tab_title.forEach((i,index)=>{
//     i.addEventListener('mouseover',()=>{
//         for(let i of tab_c)[i.style.display = 'none']
//         tab_c[index].style.display = 'flex'
//     })
// })