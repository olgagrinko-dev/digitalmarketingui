// Описание проекта:
// Сверстать макет с использованием препроцессоров. 
// Добавить динамику в выпадающий список.
// Добавить анимацию (любую, на нативном css)

class Client {
    constructor() {
        this.getMoreInfo()
    }

    getMoreInfo() {
        const plus = document.querySelectorAll('.img-plus');
        const information = document.querySelectorAll('.information');

        for (let i = 0; i < plus.length; i++) {
            plus[i].addEventListener('click', () => {
                if (information[i].hidden) {
                    information[i].hidden = false;
                    plus[i].style = `background-image: url(./assets\/minus.svg); margin-top:40px;`;
                } else {
                    information[i].hidden = true;
                    plus[i].style = `background-image: url(./assets\/image (3).svg);`;
                }
            });
        }
    }
}

const client = new Client();