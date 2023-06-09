const crew = document.querySelectorAll('.crew');

crew.forEach((item)=> {

    item.style.transition = 'filter 1s';

    item.addEventListener('mouseover', () => {
        crew.forEach((otherItem) => {
            if (otherItem !== item){
            otherItem.style.filter = 'blur(5px)';
            }
        });
    });

    item.addEventListener('mouseout', () => {
        crew.forEach((otherItem) => {
            otherItem.style.filter = 'none';
        });
    });
});