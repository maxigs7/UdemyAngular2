import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

    private heroes: Hero[] = [
        {
            name: "Aquaman",
            bio: "Aquaman's most widely recognized power is the telepathic ability to communicate with marine life, which he can summon from great distances.",
            img: "assets/img/aquaman.png",
            birthDate: "1941-11-01",
            type: "DC"
        },
        {
            name: "Batman",
            bio: "Batman has no inherent superhuman powers; he relies on \"his own scientific knowledge, detective skills, and athletic prowess\". Batman's inexhaustible wealth gives him access to advanced technologies, and as a proficient scientist, he is able to use and modify these technologies to his advantage.",
            img: "assets/img/batman.png",
            birthDate: "1939-05-01",
            type: "DC"
        },
        {
            name: "Daredevil",
            bio: "Just as Daredevil's other senses are stronger, they are also sensitive; his main weakness is his vulnerability to powerful sounds or odors that can temporarily weaken his radar sense. This weakness is often used to immobilize Daredevil.",
            img: "assets/img/daredevil.png",
            birthDate: "1964-01-01",
            type: "Marvel"
        },
        {
            name: "Hulk",
            bio: "The Hulk possesses the potential for seemingly limitless physical strength which is influenced by his emotional state, particularly his anger.",
            img: "assets/img/hulk.png",
            birthDate: "1962-05-01",
            type: "Marvel"
        },
        {
            name: "Green Lantern",
            bio: "The ring is powered by willpower. Each Green Lantern wears a ring that grants them a variety of possibilities. The full extent of the ring's ability has never been rigorously defined in the stories, but two consistent traits are that it grants the power of flight and that all its effects are accompanied by a green light.",
            img: "assets/img/linterna-verde.png",
            birthDate: "1940-06-01",
            type: "DC"
        },
        {
            name: "Spider-Man",
            bio: " Spider-Man has the ability to cling to walls, superhuman strength, a sixth sense (\"spider-sense\") that alerts him to danger, perfect balance and equilibrium, as well as superhuman speed and agility.",
            img: "assets/img/spiderman.png",
            birthDate: "1962-08-01",
            type: "Marvel"
        },
        {
            name: "Wolverine",
            bio: "His primary mutant power is an accelerated healing process, typically referred to as his mutant healing factor, that regenerates damaged or destroyed tissues of his body far beyond the capabilities of an ordinary human.",
            img: "assets/img/wolverine.png",
            birthDate: "1974-11-01",
            type: "Marvel"
        }
    ];

    constructor() { }

    getAll(): Hero[] {
        return this.heroes;
    }

    getByIndex(idx: number): Hero {
        if (idx < 0 || idx > (this.heroes.length - 1)) return null;

        return this.heroes[idx];
    }
}

export interface Hero {
    name: string,
    bio: string,
    img: string,
    birthDate: string,
    type: string
}