'use strict';

async function getJoin() {
    try {
        // Use dynamic import with await
        const { default: fetch } = await import('node-fetch');

        const API_KEY_SECRET = 'liveclasses_default_secret';
        const LIVE_CLASSES = 'http://localhost:3010/api/v1/join';

        const response = await fetch(LIVE_CLASSES, {
            method: 'POST',
            headers: {
                authorization: API_KEY_SECRET,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                room: 'Live Classes',
                roomPassword: false,
                name: 'Live Classes',
                audio: true,
                video: true,
                screen: true,
                hide: false,
                notify: true,
            }),
        });
        const data = await response.json();
        if (data.error) {
            console.log('Error:', data.error);
        } else {
            console.log('join:', data.join);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getJoin();
