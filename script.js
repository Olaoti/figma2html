    var flex = document.querySelector('.flex')
    var container = document.querySelector('.container')
    var icon = document.querySelector('.icon-menu')
    var logo = document.querySelector('.logo')
        icon.addEventListener('click', function(){            
            flex.classList.add('show')
            flex.classList.remove('none')
            logo.style.display ='none'
            if(window.innerWidth<850){
            container.style.filter = 'blur(3px)'
            }else{
            container.style.filter = 'none'
            }
        })
        document.querySelector('.cancel').addEventListener('click', function(){
            flex.classList.remove('show')
            flex.classList.add('none')
            logo.style.display ='flex'
            container.style.filter = 'none'
        })
        document.querySelectorAll('.flex>a').forEach(link=>{
            link.addEventListener('click', function(){
                flex.classList.remove('show')
            flex.classList.add('none')
            logo.style.display ='flex'
            container.style.filter = 'none'
            })
        })    