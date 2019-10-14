import utils from '@bigcommerce/stencil-utils';

export default function() {
    document.querySelectorAll('.product .card').forEach((card) => {
        const productId = card.getAttribute('data-entity-id');

        utils.api.product.getById(productId, { template: 'products/swatches' }, (err, response) => {
            card.querySelector('[data-category-swatches]').innerHTML = response;
        });
    });
}
