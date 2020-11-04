const header = $('header.site-header').parent();

const makeHeader = data => {
    header.prepend(`<div>${data}</div>`).css({'background-color': '#000', 'text-align': 'center' });
}

header.prepend(`<div>This is from Script Tag</div>`).css({'background-color': '#000', 'text-align': 'center' });

fetch('https://47d58499bfaf.ngrok.io/api/products?shop=https://cknewapp2020.myshopify.com/')
    .then(res => res.json())
    .then(data => {
        makeHeader(data.data)
    })
    .catch(error => console.log(error))