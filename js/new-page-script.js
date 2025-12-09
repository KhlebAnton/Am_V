document.addEventListener('DOMContentLoaded', function () {
    const heroSwiper = new Swiper('.hero-swiper', {

        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        // Пагинация
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },


        effect: 'slide',



    });

    const porchModal = document.querySelector('.modal_overlay[data-modal="porch-modal"]');
    const porchBtns = document.querySelectorAll('[data-btn="porch-modal"]');
    const porchModalImgContainer = porchModal.querySelector('.modal_card-item__img-container');
    const porchModalTitle = porchModal.querySelector('.modal_card-item__title');
    const porchModalSize = porchModal.querySelector('.modal_card-item__size');
    const porchModalPrice = porchModal.querySelector('.modal_card-item__price');

    function openPorchModal(images) {
        porchModalImgContainer.innerHTML = '';

        if (images && images.length > 0) {
            images.forEach(img => {
                const imgClone = img.cloneNode(true);
                porchModalImgContainer.appendChild(imgClone);
            });
        }

        porchModal.classList.add('--is-open');
        document.body.classList.add('no-scrolled');
    }

    function closePorchModal() {
        porchModal.classList.remove('--is-open');
        document.body.classList.remove('no-scrolled');
    }

    porchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const imgContainer = btn.querySelector('.card-item__popup-img');
            const images = imgContainer.querySelectorAll('img');
            porchModalTitle.textContent = btn.querySelector('.card-item__title').textContent;
            porchModalSize.textContent = btn.querySelector('.card-item__size').textContent;
            porchModalPrice.textContent = btn.querySelector('.card-item__price').textContent;

            openPorchModal(images);
        })
    });

    porchModal.querySelector('.modal_close').addEventListener('click', closePorchModal);

    document.addEventListener('click', (e) => {
        if (porchModal.classList.contains('--is-open') &&
            !porchModal.querySelector('.modal_content').contains(e.target) &&
            !e.target.closest('[data-btn="porch-modal"]')) {
            closePorchModal();
        }
    });

    // Закрытие по клавише Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && porchModal.classList.contains('--is-open')) {
            closePorchModal();
        }
    });

    const imgModal = document.querySelector('.modal_overlay[data-modal="img-modal"]');
    const imgModalBtns = document.querySelectorAll('[data-btn="modal-img"]');
    const imgModalImg = imgModal.querySelector('.img-modal__img');
    
    imgModalBtns.forEach(btn => {
        btn.addEventListener('click', ()=> {
            
            openImgModal(btn.querySelector('img').src)
        })
    })
    function openImgModal(srcImg) {
        imgModalImg.src = srcImg;
        imgModal.classList.add('--is-open');
        document.body.classList.add('no-scrolled');
    }

    function closeImgModal() {
        imgModal.classList.remove('--is-open');
        document.body.classList.remove('no-scrolled');
    }
     document.addEventListener('click', (e) => {
        if (imgModal.classList.contains('--is-open') &&
            !imgModal.querySelector('.img-modal__img').contains(e.target) &&
            !e.target.closest('[data-btn="modal-img"]')) {
            closeImgModal();
        }
    });
});