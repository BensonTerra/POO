export class Director {
    id = 0
    name = ""
    dateOfBirth = new Date()
    country = "Portugal"

    constructor(id, name, dateOfBirth, country) {
        this.id = id
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.country = country;
    }
}