import React from 'react';


const Blog4 = () => {
    fetch('https://pritibhunia.medium.com/integrating-azure-api-management-with-azure-virtual-network-and-azure-application-gateway-920eb532c049', { mode: 'no-cors' })
        .then((response) => {
            console.log(response);
            return response.text();
        })
        .then((html) => {
            console.log(html);
        })
        .catch((err) => {
            // There was an error
            console.warn('Something went wrong.', err);
        });
    return (
        // <iframe
        //     src="https://pritibhunia.medium.com/integrating-azure-api-management-with-azure-virtual-network-and-azure-application-gateway-920eb532c049"
        //     frameBorder="0" title="Blog4"
        // ></iframe>
        <div id="Blog4Content">Hello</div>
    );
}

export default Blog4