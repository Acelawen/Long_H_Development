// Introduction header animation //
let header = document.querySelector('#introduction');
let anim = [
    { t: "{ }", ms: 200},
    { t: "{_}", ms: 200},
    { t: "{ }", ms: 200},
    { t: "{_}", ms: 200},
    { t: "{G_}", ms: 200},
    { t: "{GA_}", ms: 200},
    { t: "{GAM_}", ms: 200},
    { t: "{GAME_}", ms: 200},
    { t: "{GAMEO_}", ms: 200},
    { t: "{GAMEOL_}", ms: 200},
    { t: "{GAMEOLO_}", ms: 200},
    { t: "{GAMEOLOG_}", ms: 200},
    { t: "{GAMEOLOGY_}", ms: 200},
    { t: "{GAMEOLOGY_P_}", ms: 200},
    { t: "{GAMEOLOGY_PL_}", ms: 200},
    { t: "{GAMEOLOGY_PLA_}", ms: 200},
    { t: "{GAMEOLOGY_PLAN_}", ms: 200},
    { t: "{GAMEOLOGY_PLANE_}", ms: 200},
    { t: "{GAMEOLOGY_PLANET_}", ms: 200},
    { t: "GAMEOLOGY PLANET", ms: 200},
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator) 
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}

update();