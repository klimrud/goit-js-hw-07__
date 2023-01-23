import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function imageGelleryMarkup(galleryItem) {
    return  galleryItem.map( ({preview, original, description}) =>{
    return `<li>
              <a class="gallery__item" href="${original}">
                <img
                 class="gallery__image"
                 src="${preview}"
                 data-source="${original}"
                 alt="${description}"
                />
             </a>
             </li>`;
  }).join('');
  
};
// console.log();
 
//  galleryEl.insertAdjacentHTML('beforeend', imageGelleryMarkup(galleryItems) )
galleryEl.innerHTML = imageGelleryMarkup(galleryItems) ;
// console.log(galleryEl);

//  galleryEl.addEventListener( 'click', returnBigImage);
let lightbox = {}

// function returnBigImage(e){
//   e.preventDefault();
//  if(e.target.nodeName !== 'IMG') {
//   return;
//  };
// //  console.log(e.target.dataset)

//  lightbox = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
//   scrollZoom: false,
// });
//   close.simpleLightbox();
// };

lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoom: false,
});

//  close.simpleLightbox;
