const images = [
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
];

let galleryContainer = document.querySelector('.gallery');//контейнер 
let modal = document.querySelector('.modal');//модальное окно
let modalImage = document.querySelector('.modal__image');//изображение in модальное окно

    // Функция для создания разметки галереи
function createGalleryItems(images) {
    return images.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
        </li>
        `;
    }).join('')
}

    // Вставка разметки галереи
    galleryContainer.innerHTML = createGalleryItems(images);



    //при клике на изображение открывается модальное 
    galleryContainer.addEventListener('click', onGalleryContainerClick);


    function onGalleryContainerClick(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        if (event.target.nodeName !== 'IMG') {
            return;
        }
        let originalImageUrl = event.target.dataset.source; // Получаем URL оригинального изображения
        modalImage.src = originalImageUrl; // Устанавливаем URL оригинального изображения в модальном окне
        modal.style.display = 'flex';

        modal.addEventListener('click', closeModal); // Добавляем обработчик для закрытия модального окна
}

function closeModal() {
    modal.style.display = 'none';
    modalImage.src = '';
    
    modal.removeEventListener('click', closeModal);
}