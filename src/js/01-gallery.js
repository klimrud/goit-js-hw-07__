import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
// console.log(...galleryItems)

const container = document.querySelector('.gallery');

function imageGelleryMarkup(galleryItem) {
    return  galleryItem.map( ({preview, original, description}) =>{
    return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                 class="gallery__image"
                 src="${preview}"
                 data-source="${original}"
                 alt="${description}"
                />
             </a>
           </div>`;
  }).join('');
  
};
// container.insertAdjacentHTML('beforeend', imageGelleryMarkup(galleryItems) )
container.innerHTML = imageGelleryMarkup(galleryItems) 
// console.log(container);
 container.addEventListener( 'click', returnBigImage);
 let bigImage = {};

function returnBigImage(e){
  e.preventDefault();
 
 if(e.target.nodeName !== 'IMG') {
  return;
 };

const url = e.target.dataset.source;

bigImage = basicLightbox.create(`<img src="${url}" width="800" height="600">`);
  
 bigImage.show();
window.addEventListener('keydown', onCloseEsc);
};

function onCloseEsc(e){
  if(e.code !== 'Escape') {
    return;
   };
   bigImage.close();
   window.removeEventListener('keydown', onCloseEsc);
}
