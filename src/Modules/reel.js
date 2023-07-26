const $projects = document.querySelectorAll('.projects__item');
const $nextBtn = document.querySelector('.next-btn');
const $backBtn = document.querySelector('.back-btn');

const projects = [...$projects];

function advanceOneProject() {
    const listLength = projects.length - 1;
    const nextNextIndex = projects.findIndex(proj => proj.classList.contains('next-next')); 

    projects.find(proj => proj.classList.contains('back-back')).classList.remove('back-back');
    projects.find(proj => proj.classList.contains('back')).classList.replace('back','back-back');
    projects.find(proj => proj.classList.contains('center')).classList.replace('center','back');
    projects.find(proj => proj.classList.contains('next')).classList.replace('next','center');
    projects.find(proj => proj.classList.contains('next-next')).classList.replace('next-next','next');
    
    if (nextNextIndex + 1 < listLength) {
        projects[nextNextIndex + 1].classList.add('next-next');
    } else {
        projects[0].classList.add('next-next');
    }
}

function goBackOneProject() {
    const listLength = projects.length - 1;
    const backBackIndex = projects.findIndex(proj => proj.classList.contains('back-back'));
    
    projects.find(proj => proj.classList.contains('next-next')).classList.remove('next-next');
    projects.find(proj => proj.classList.contains('next')).classList.replace('next','next-next');
    projects.find(proj => proj.classList.contains('center')).classList.replace('center','next');
    projects.find(proj => proj.classList.contains('back')).classList.replace('back','center');
    projects.find(proj => proj.classList.contains('back-back')).classList.replace('back-back','back');
    
    if (backBackIndex - 1 > -1) {
        projects[backBackIndex - 1].classList.add('back-back');
    } else {
        projects[listLength].classList.add('back-back');
    }
}

$nextBtn.addEventListener('click', advanceOneProject);
$backBtn.addEventListener('click', goBackOneProject);

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key === 'ArrowLeft') {
        $backBtn.focus();
        goBackOneProject();
    }
    else if (key === 'ArrowRight') {
        $nextBtn.focus();
        advanceOneProject();
    }
})