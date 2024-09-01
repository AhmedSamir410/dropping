let input = document.querySelector(".inputValue");
let btn = document.querySelector("#btn");
let default_box = document.querySelector(".default_box");
let boxs = document.querySelectorAll(".list .box");
let darg = null;

btn.addEventListener('click' , function(){
    if(input.value !== ''){
        default_box.innerHTML += `<p class = "item" draggable = "true">${input.value}</p>`;
        input.value = "";
    }
    droggableMoving();
})

function droggableMoving(){
    let items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener('dragstart', function(){
            darg = item;
            item.style.opacity = '0.5'
        })
        
        item.addEventListener('dragend',function(){
            darg = null;
            item.style.opacity = '1'
        })

        boxs.forEach(box => {
            box.addEventListener('dragover' , function(e){
                e.preventDefault();
                box.style.cssText = "background-color : #f00"
            })
            box.addEventListener('dragleave' ,function(){
                box.style.cssText = "background-color : #fff"
            })
            box.addEventListener('drop' , function(){
                box.append(darg);
                box.style.cssText = "background-color : #fff"
            })
        })
    })
}

/* 
============== event Using ======================== 
== [1] dragstart =======        بدايه حركه البتاع 
== [2] dragend   =======        نهايه حركه البتاع 
== [3] dragover  =======   اما اعمل هوفر علي البوكس 
== [4] dragleave ======= اما ابعد عن البوكس بعد الهوفرى
== [5] drop      ======= 30 اسقط فيه الحاجه بس دا لازما تستخدم الكود ال في السطر 
================================================= 
*/
