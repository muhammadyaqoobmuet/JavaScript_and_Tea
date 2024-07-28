const btn = document.querySelector('#btn');
const userType = document.querySelector('#typo');

const API_KEY = 'lmwr_sk_P57a6nUROy_OmqsP5xQPjgtyS3nluxMeyylfef6WugAhGYLd'; // Replace with your actual API key

const SERVER_URL = 'http://127.0.0.1:3000'; // Your proxy server URL

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const textValue = userType.value.trim();
    try {
        const imageUrl = await sendReq(textValue);
        displayImage(imageUrl);
    } catch (error) {
        console.error('Error:', error.message);
        alert('Failed to generate new images. Please try again later.');
    }
});

async function sendReq(userPrompt) {
    try {
        const response = await fetch(`${SERVER_URL}/image/generation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`,
                'X-Api-Version': 'v1'
            },
            body: JSON.stringify({
                prompt: userPrompt,
                samples: 1, // Number of images to generate
                quality: 'LOW', // Quality of the generated image
                guidance_scale: 50, // How strictly the image adheres to the prompt
                aspect_ratio: '1:1', // Desired aspect ratio
                style: 'PHOTOREALISTIC', // Style of the generated image
            })
        });

        if (!response.ok) {
            const errorMessage = await response.json();
            throw new Error(errorMessage.detail || 'Failed to generate new images');
        }

        const responseData = await response.json();
        return responseData.url; // Assuming the response contains a URL to the generated image
    } catch (error) {
        throw new Error(error.message);
    }
}

function displayImage(url) {
    const imgContainer = document.querySelector('.grid');
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('border', 'rounded-md', 'overflow-hidden');
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Generated Image';
    img.classList.add('object-cover', 'w-full', 'h-64');
    imgDiv.appendChild(img);
    imgContainer.appendChild(imgDiv);
}
