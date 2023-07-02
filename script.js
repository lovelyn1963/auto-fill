let fashionList = [
    'Ankara',
    'Bubu Gowns',
    'Sari',
    'suit',
    'senator',
    'casual',
    'sports wear',

];

const mainFashionList = document.querySelector('.mainfashionlist');
const inputBox = document.getElementById('text');

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = fashionList.filter((keyword)=>{
          return  keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}
function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    })
    mainFashionList.innerHTML = '<ul>' + content.join('') + '</ul>';
}
function selectInput(list){
    inputBox.value = list.innerHTML;
    mainFashionList.innerHTML ='';
}
 