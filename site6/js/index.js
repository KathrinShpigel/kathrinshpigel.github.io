'use strict';



const tamagocchis = [
    { name: 'tedy', health: 80,  chunk: 20, path: './images/tedy.png', damage: 20 },
    { name: 'timo', health: 100, chunk: 10, path: './images/timo.png', damage: 15 },
    { name: 'gnar', health: 50,  chunk: 5,  path: './images/gnar.png', damage: 5  }
];
const createTomagocchi = getTamagocchi();



class Tamagocchi {
    constructor (selector, parameters) {
        this.$container = document.querySelector(selector);
        this.pathImage  = parameters.path;
        this.health     = parameters.health;
        this.chunk      = parameters.chunk;
        this.name       = parameters.name;
        this.damage     = parameters.damage;
    }

    showTamagocchi () {
        const div           = document.createElement('div');
        div.id              = `${ this.name }`;
        div.className       = `tamagocchi__item tamagocchi__${ this.name }`;
        div.style.cssText   = `background-image: url(${ this.pathImage })`;
        div.innerHTML       =   `<div class="tamagocchi__health" style="">${ this.name }</div>
                              <button class="btn tamagocchi__btn">Feed</button>`;
        this.$container.appendChild(div);
        this.getLiveLine(this.name, this.health);
    }

    statusHealth () {
        let status      = this.health;
        const hunk      = this.chunk;
        const persName  = this.name;
        const loss      = this.damage;
        const killed    = this.doKilled;
        const line      = this.getLiveLine;
        const btn       = document.querySelector(`#${ persName }`);

        const id = setInterval(function() {
            btn.onclick = function(event) {
                let target = event.target;
                if (status > 100) {
                    return status;
                }
                if (status < 0) {
                    target.disabled = 'disabled';
                    return;
                }
                status += hunk;
                line(persName, status);
                return status;
            };

            status -= loss;

            if (status < 0) {
                line(persName, status);
                killed(persName);
                clearInterval(id);
                
            } else {
                line(persName, status);
            }
        }, 1000);
    }
    doKilled (name) {
        const path          = './images/rip.png';
        const pers          = document.querySelector(`#${ name }`);
        pers.style.cssText  = `background-image: url(${ path })`;        
    }
    getLiveLine(name, health) {
        const liveLine          = document.querySelector(`#${ name }`).firstChild;
        liveLine.style.cssText  = `background: linear-gradient(to right, #008000 ${ health }%, #ff0000ed ${ health }%);`;
    }
}



function getTamagocchi () {
    let i = 0;
    return function () {
        if (i <= 2) {
            tamagocchis[i].obj  = new Tamagocchi('.tamagocchi_container', tamagocchis[i]);
            tamagocchis[i].obj.showTamagocchi();
            tamagocchis[i].obj.statusHealth();
        }
        i++;
    }
}