class PhoneUser{
    constructor(surname, name, patronymic, address, country_index, country, region, block, city, street, house, apartment, floor, phone_number) {
        this.users = [];
        this.toAddusers = [
            {
                'surname': 'Василевсов',
                'name': 'Василий',
                'patronymic': 'Васильев',
                'phone_number': 84562345123,
                'address': {
                    "country_index": '2343',
                    "region": 'Капусткая обл.',
                    "block": 'Водный',
                    "city": 'Картошков',
                    "street": 'Капустянская',
                    "house": '45',
                    "apartment": '215',
                    "floor": '10',
                }
            },
            {
                'surname': 'Максимов',
                'name': 'Максим',
                'patronymic': 'Максимович',
                'phone_number': 84562345321,
                'address': {
                    "country_index": '2343',
                    "region": 'Кабачковая обл.',
                    "block": 'Известняковый',
                    "city": 'Морковец',
                    "street": 'Ручковенская',
                    "house": '12',
                    "apartment": '115',
                    "floor": '4',
                }
            },
        ];
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.address = address;
        this.country_index = country_index;
        this.country = country;
        this.region = region;
        this.block = block;
        this.city = city;
        this.street = street;
        this.house = house;
        this.apartment = apartment;
        this.floor = floor;
        this.phone_number = phone_number;
    }
    menu(){
        let a = confirm("Ввести количество пользователей?");
        if(a === true){
            switch(+prompt('Введите количество пользователей для заполнения', '2')){
                case 1:
                    this.users.push(...this.toAddusers[0]);
                    break
                case 2:
                    this.users.push(...this.toAddusers.slice(1,0));
                    break;
            }
        }
    }
}



