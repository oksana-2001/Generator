const personGenerator = {
    surNameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Стенан",
            "id_6": "Борис",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Олег"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алина",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Анна",
            "id_5": "Дина",
            "id_6": "Нина",
            "id_7": "Марина",
            "id_8": "Дарина",
            "id_9": "Елена",
            "id_10": "Ксюша"
        }
    }`,
    spacialityMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "инженер",
            "id_2": "солдат",
            "id_3": "водитель",
            "id_4": "грузчик",
            "id_5": "полицейский",
            "id_6": "строитель",
            "id_7": "физик",
            "id_8": "пилот",
            "id_9": "капитан",
            "id_10": "хирург"
        }
    }`,
    spacialityFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "косметолог",
            "id_2": "парикмахер",
            "id_3": "стилист",
            "id_4": "учитель",
            "id_5": "воспитатель",
            "id_6": "маляр",
            "id_7": "воспитатель",
            "id_8": "дизайнер",
            "id_9": "педиатр",
            "id_10": "швея"
        }
    }`,
    
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1995, min = 1970) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    getbirthYear: function(){
     return  randomIntNumber(1970, 1995);
        
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
   
        if (this.person.gender == 'Мужчина') {
            this.person.firstName = this.randomValue(this.firstNameMaleJson);
            this.person.surName = this.randomValue(this.surNameJson);
            this.person.patronymic = this.randomValue(this.firstNameMaleJson) + 'ович';
            this.person.birthYear = this.randomIntNumber(this.birthYear) + ' ' + 'г.р';
            this.person. spaciality = this.randomValue(this. spacialityMaleJson);
        } else {
            this.person.firstName = this.randomValue(this.firstNameFemaleJson);
            this.person.surName = this.randomValue(this.surNameJson) + 'a';
            this.person.patronymic = this.randomValue(this.firstNameMaleJson) + 'овна';
            this.person.birthYear = this.randomIntNumber(this.birthYear) + ' ' + 'г.р';
            this.person. spaciality = this.randomValue(this. spacialityFemaleJson);
        }
        return this.person;
        
    },
};
