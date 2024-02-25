const simpleUser = {
    name: 'John Smith',
    age: 22,
    title: 'Developer'
}


// const simpleUserCopy1 = {...simpleUser}
// const simpleUserCopy2 = Object.assign({}, simpleUser)
// const simpleUserCopy3 = Object.create(simpleUser)

// console.log(simpleUserCopy1, simpleUserCopy2, simpleUserCopy3)



const developerUser = {
    name: 'John Smith',
    bithDate: new Date('1985-04-08'),
    title: 'Developer',
    skills: ["JS", "TS","REACT"]
}

// const developerUserCopy = {...developerUser}
// const developerUserCopy = Object.assign({}, developerUser)
// const developerUserCopy = Object.create(developerUser)
// const developerUserCopy = JSON.parse(JSON.stringify(developerUser))
const developerUserCopy = structuredClone(developerUser)

developerUserCopy.skills.push('vue')
console.log(developerUser)
console.log(developerUserCopy)


const complexObject = {
    set: new Set([1,2,3]),
    map: new Map([[1, 2]]),
    regex: /foo/,
    deep: {array: [new Blob()]},
    error: new Error('Boom!')
}


class Developer {
    constructor(name, birthDate, title, skills =[]) {
        this.name = name
        this.birthDate = birthDate
        this.title = title
        this.skills = skills
    }

    addSkill(slill) {
        this.skills.push(slill)
    }

    get firstName() {
        return this.name.split(' ')[0]
    }
}

const john = new Developer('John Doe', '1985-09-02', 'Frontend', ['JS'])

john.addSkill('react');
console.log(john);

const johnCopy = JSON.parse(JSON.stringify(john));

console.log(johnCopy)
console.log(johnCopy.addSkill) // undefined
console.log(johnCopy.firstName) // undefined
// structuredClone тоже вернет undefined
