class PhoneUser {
    constructor(surname, name, patronymic, address, phone_number) {
        this.users = [];
        this.toAddusers = [
            {
                'surname': 'Василевсов',
                'name': 'Василий',
                'patronymic': 'Васильев',
                'phone_number': 4562345123,
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
                'phone_number': 4562345321,
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
            {
                'surname': 'Максимов',
                'name': 'Максим',
                'patronymic': 'Максимович',
                'phone_number': 4562345321,
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
        this.phone_number = phone_number;
    }

    menu() {
        let a = confirm("Нужно ли ввести стандартных пользователей?");
        if (a === true) {
            switch (+prompt('Введите количество пользователей для заполнения (1 или 3)', '2')) {
                case 1:
                    this.users.push(...this.toAddusers[0]);
                    break
                case 2:
                    this.users.push(...this.toAddusers.slice(1, 0));
                    break;
                case 3:
                    this.users.push(...this.toAddusers);
                    break;
            }
        }
        while(true) {
            switch (+prompt(`
            1. Вывести пользователей в консоль
            2. Ввод нового пользователя
            3. Ввод ограниченного количества пользователей
            4. Вывести только казахов
            5. Выход
            `)) {
                case 1:
                    newUser.userList();
                    break;
                case 2:
                    newUser.newUser();
                    break;
                case 3:
                    newUser.newCappedUser();
                    break;
                case 4:
                    newUser.userFiltered();
                    break;
                default:
                    return false;
            }
        }
    }
    userList(){
        let count = 1;
        for(let i of this.users){
            console.log(`
                                                     № Пользователя: ${count++}
            Фамилия: ${i.surname}
            Имя: ${i.name}  
            Отчество: ${i.patronymic}
            Номер телефона: +7${i.phone_number}
            Адрес:\n 
                    Индекс страны: ${i.address.country_index}
                    Область: ${i.address.region}
                    Район: ${i.address.block}
                    Город: ${i.address.city}
                    Улица: ${i.address.street}
                    Дом: ${i.address.house}
                    Квартира: ${i.address.apartment}
                    Этаж: ${i.address.floor}                                
            `)
        }
    }
    newUser(){
        let number = +prompt('Количество пользователей для заполнения','1');
        for(let i = 1; i <= number; i++){
            this.users.push(new PhoneUser(
                prompt('Фамилия:','Собаков'),
                prompt('Имя:','Собака'),
                prompt('Отчество:','Собакович'),
                prompt('Адрес:','shgfh'),
                +prompt('Номер телефона:','9839839838'),
            ))
        }
    }
}

let newUser = new PhoneUser();
newUser.menu();



