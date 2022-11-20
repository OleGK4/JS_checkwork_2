class PhoneUser {
    constructor(kazakh, surname, name, patronymic, phone_number, country_index, region, city, block, street, house, apartment, floor) {
        this.users = [];
        this.defaultUsers = [
            {
                'kazakh': true,
                'surname': 'Василевсов',
                'name': 'Василий',
                'patronymic': 'Васильев',
                'phone_number': 4562345123,
                'country_index': '2343',
                'region': 'Капусткая обл.',
                'city': 'Картошков',
                'block': 'Водный',
                'street': 'Капустянская',
                'house': '45',
                'apartment': '215',
                'floor': '10',
            },
            {
                'kazakh': false,
                'surname': 'Максимов',
                'name': 'Максим',
                'patronymic': 'Максимович',
                'phone_number': 4562345321,
                'country_index': '2343',
                'region': 'Кабачковая обл.',
                'city': 'Морковец',
                'block': 'Известняковый',
                'street': 'Ручковенская',
                'house': '12',
                'apartment': '115',
                'floor': '4',
            },
            {
                'kazakh': false,
                'surname': 'Максимов',
                'name': 'Максим',
                'patronymic': 'Максимович',
                'phone_number': 4562345321,
                'country_index': '2343',
                'region': 'Кабачковая обл.',
                'city': 'Морковец',
                'block': 'Известняковый',
                'street': 'Ручковенская',
                'house': '12',
                'apartment': '115',
                'floor': '4',
            },
        ];
        this.kazakh = kazakh;
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.phone_number = phone_number;
        this.country_index = country_index;
        this.region = region;
        this.city = city;
        this.block = block;
        this.street = street;
        this.house = house;
        this.apartment = apartment;
        this.floor = floor;
    };

    menu() {
        let a = confirm("Нужно ли ввести стандартных пользователей?");
        if (a === true) {
            switch (+prompt('Введите количество пользователей для заполнения (1 или 3)', '2')) {
                case 1:
                    this.users.push(...this.defaultUsers.slice(0, 1));
                    break
                case 2:
                    this.users.push(...this.defaultUsers.slice(0, 2));
                    break;
                case 3:
                    this.users.push(...this.defaultUsers);
                    break;
            }
        }
        while (true) {
            switch (+prompt(`
            1. Вывести пользователей в консоль
            2. Ввод новых пользователей, ограниченных по количеству
            3. Вывести только казахов
            4. Выход
            `)) {
                case 1:
                    newUser.displayUsers();
                    break;
                case 2:
                    newUser.createUsers();
                    break;
                case 3:
                    newUser.filterUsers();
                    break;
                default:
                    console.log('Выход');
                    return false;
            }
        }
    };

    displayUsers() {
        let count = 1;
        for (let i of this.users) {
            console.log(`
                             № Пользователя: ${count++}
            Казах ли?: ${i.kazakh}
            Фамилия: ${i.surname}
            Имя: ${i.name}  
            Отчество: ${i.patronymic}
            Номер телефона: +7${i.phone_number}\n
            Адрес:
                Индекс страны: ${i.country_index}
                Область: ${i.region}
                Город: ${i.city}
                Район: ${i.block}                 
                Улица: ${i.street}
                Дом: ${i.house}
                Квартира: ${i.apartment}
                Этаж: ${i.floor}                                
            `);
        }
    };

    createUsers() {
        let number = +prompt('Количество пользователей для заполнения', '1');
        for (let i = 1; i <= number; i++) {
            this.users.push(new PhoneUser(
                confirm('КАЗАХ?'),
                prompt('Фамилия:', 'Собаков'),
                prompt('Имя:', 'Собака'),
                prompt('Отчество:', 'Собакович'),
                +prompt('Номер телефона:', '9839839838'),
                +prompt('Индекс страны:', '6767'),
                prompt('Область:', 'Комаровская'),
                prompt('Город:', 'Косячев'),
                prompt('Район:', 'Соляной'),
                prompt('Улица:', 'Нариковая'),
                +prompt('Дом:', '228'),
                +prompt('Квартира:', '322'),
                +prompt('Этаж:', '15'),
            ));
        }
    };

    filterUsers() {
        let filteredUsers = [];
        for (let i of this.users) {
            if (i.kazakh === true) {
                filteredUsers.push(i)
            }
        }
        let c = confirm('Вывести казахов?')
        if (c === true) {
            let count = 1;
            for (let i of filteredUsers) {
                console.log(`
                             № Пользователя: ${count++}
            Казах ли?: ${i.kazakh}
            Фамилия: ${i.surname}
            Имя: ${i.name}  
            Отчество: ${i.patronymic}
            Номер телефона: +7${i.phone_number}\n
            Адрес:
                Индекс страны: ${i.country_index}
                Область: ${i.region}
                Город: ${i.city}
                Район: ${i.block}                 
                Улица: ${i.street}
                Дом: ${i.house}
                Квартира: ${i.apartment}
                Этаж: ${i.floor}                   
            `)
            }
        }
    };
}

let newUser = new PhoneUser();
newUser.menu();



