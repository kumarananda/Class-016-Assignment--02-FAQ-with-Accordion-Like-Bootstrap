
const accheader = document.querySelectorAll('.acc-header');
// const accbody = document.querySelectorAll('.acc-body');


accheader.forEach(e => {
    e.addEventListener('click', function () {
        e.classList.toggle('activeArrow')
        
        if(e.classList.contains('activeArrow')){
            // e.nextElementSibling.style.height = 'auto';
            e.nextElementSibling.style.height = e.nextElementSibling.scrollHeight + 'px';
            
        }else{
            e.nextElementSibling.style.height = 0;
        }
        accheader.forEach(e => {
            if(e != this){
                e.classList.remove('activeArrow');
                e.nextElementSibling.style.height = 0;
            }
        })
        
    });
});




// const accheader = document.querySelectorAll('.acc-header');
// // const accbody = document.querySelectorAll('.acc-body');


// accheader.forEach(e => {
//     e.addEventListener('click', function () {
//         e.classList.toggle('activeArrow')
        
//         if(e.classList.contains('activeArrow')){
//             // e.nextElementSibling.style.height = 'auto';
//             e.nextElementSibling.style.height = e.nextElementSibling.scrollHeight + 'px';
//         }else{
//             e.nextElementSibling.style.height = 0;
//         }
//     });
// })

